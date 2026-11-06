import { NextResponse } from "next/server";
import { contactSchema, type ContactField } from "@/lib/validation";

export const runtime = "nodejs";

/** Limitação simples por IP (em memória). Em produção multi-instância, usar Redis/Upstash. */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_REQUESTS;
}

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

async function sendEmail(data: { name: string; email: string; phone?: string; subject: string; message: string }) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.info("[contact] Envio de e-mail não configurado. Pedido recebido:", { ...data, message: `${data.message.slice(0, 80)}…` });
    return;
  }

  const html = `
    <h2>Novo pedido de contacto — website FISARQ</h2>
    <p><strong>Nome:</strong> ${escapeHtml(data.name)}</p>
    <p><strong>E-mail:</strong> ${escapeHtml(data.email)}</p>
    <p><strong>Telefone:</strong> ${escapeHtml(data.phone || "—")}</p>
    <p><strong>Assunto:</strong> ${escapeHtml(data.subject)}</p>
    <p><strong>Mensagem:</strong><br>${escapeHtml(data.message).replace(/\n/g, "<br>")}</p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to, reply_to: data.email, subject: `[Website] ${data.subject}`, html }),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ message: "Demasiados pedidos. Tente novamente mais tarde." }, { status: 429 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "Pedido inválido." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    const errors: Partial<Record<ContactField, string>> = {};
    for (const issue of parsed.error.issues) errors[issue.path[0] as ContactField] ??= issue.message;
    return NextResponse.json({ message: "Dados inválidos.", errors }, { status: 422 });
  }

  // Honeypot preenchido → bot. Responde 200 para não dar pistas.
  if (parsed.data.company) return NextResponse.json({ ok: true });

  try {
    const { name, email, phone, subject, message } = parsed.data;
    await sendEmail({ name, email, phone: phone || undefined, subject, message });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Falha no envio:", err);
    return NextResponse.json({ message: "Não foi possível enviar a mensagem. Tente por e-mail ou telefone." }, { status: 502 });
  }
}
