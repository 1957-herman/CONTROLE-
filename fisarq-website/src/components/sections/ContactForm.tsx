"use client";

import { useId, useRef, useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { contactSchema, type ContactField } from "@/lib/validation";

type Status = { type: "idle" | "loading" | "success" | "error"; message?: string };
type FieldErrors = Partial<Record<ContactField, string>>;

const inputBase =
  "mt-2 block w-full rounded-xl border bg-white px-4 py-3 text-anthracite-900 placeholder:text-stone-500 transition-colors focus:border-anthracite-900 focus:outline-none focus:ring-2 focus:ring-bronze-400/40";

function Field({
  id, label, error, required, children,
}: { id: string; label: string; error?: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-anthracite-800">
        {label} {required ? <span className="text-bronze-600" aria-hidden="true">*</span> : <span className="text-stone-500">(opcional)</span>}
      </label>
      {children}
      {error && <p id={`${id}-error`} className="mt-1.5 text-sm text-red-700">{error}</p>}
    </div>
  );
}

export function ContactForm() {
  const uid = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>({ type: "idle" });

  const fid = (name: ContactField) => `${uid}-${name}`;
  const aria = (name: ContactField) => ({
    id: fid(name),
    name,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${fid(name)}-error` : undefined,
    className: `${inputBase} ${errors[name] ? "border-red-600" : "border-stone-300"}`,
  });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const raw = Object.fromEntries(new FormData(form));
    const parsed = contactSchema.safeParse({ ...raw, consent: raw.consent === "on" });

    if (!parsed.success) {
      const next: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as ContactField;
        next[key] ??= issue.message;
      }
      setErrors(next);
      setStatus({ type: "error", message: "Verifique os campos assinalados." });
      const first = Object.keys(next)[0] as ContactField | undefined;
      if (first) form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setErrors({});
    setStatus({ type: "loading" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const body = (await res.json().catch(() => ({}))) as { message?: string; errors?: FieldErrors };
      if (!res.ok) {
        if (body.errors) setErrors(body.errors);
        throw new Error(body.message ?? "Não foi possível enviar a mensagem.");
      }
      formRef.current?.reset();
      setStatus({ type: "success", message: "Obrigado! A sua mensagem foi enviada. Entraremos em contacto brevemente." });
    } catch (err) {
      setStatus({ type: "error", message: err instanceof Error ? err.message : "Ocorreu um erro inesperado." });
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      noValidate
      aria-labelledby="contacto-title"
      className="rounded-3xl border border-stone-200 bg-stone-50 p-6 shadow-sm sm:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id={fid("name")} label="Nome" error={errors.name} required>
          <input type="text" autoComplete="name" required {...aria("name")} />
        </Field>
        <Field id={fid("email")} label="E-mail" error={errors.email} required>
          <input type="email" autoComplete="email" inputMode="email" required {...aria("email")} />
        </Field>
        <Field id={fid("phone")} label="Telefone" error={errors.phone}>
          <input type="tel" autoComplete="tel" inputMode="tel" {...aria("phone")} />
        </Field>
        <Field id={fid("subject")} label="Assunto" error={errors.subject} required>
          <input type="text" required {...aria("subject")} />
        </Field>
        <div className="sm:col-span-2">
          <Field id={fid("message")} label="Mensagem" error={errors.message} required>
            <textarea rows={6} required {...aria("message")} className={`${aria("message").className} resize-y`} />
          </Field>
        </div>
      </div>

      {/* Honeypot — invisível para pessoas e leitores de ecrã */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor={fid("company")}>Empresa</label>
        <input id={fid("company")} name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-6">
        <label className="flex items-start gap-3 text-sm text-stone-600">
          <input
            type="checkbox"
            name="consent"
            aria-invalid={errors.consent ? true : undefined}
            aria-describedby={errors.consent ? `${fid("consent")}-error` : undefined}
            className="mt-0.5 h-4 w-4 rounded border-stone-300 accent-bronze-600"
          />
          <span>
            Aceito que os meus dados sejam tratados para resposta a este pedido, nos termos da{" "}
            <a href="/privacidade" className="underline underline-offset-2 hover:text-anthracite-900">Política de Privacidade</a>.
          </span>
        </label>
        {errors.consent && <p id={`${fid("consent")}-error`} className="mt-1.5 text-sm text-red-700">{errors.consent}</p>}
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" variant="secondary" disabled={status.type === "loading"} className="sm:w-auto">
          {status.type === "loading" ? (
            <><Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> A enviar…</>
          ) : (
            <><Send className="h-4 w-4" aria-hidden="true" /> Enviar mensagem</>
          )}
        </Button>
        <p
          role="status"
          aria-live="polite"
          className={`flex items-center gap-2 text-sm ${status.type === "success" ? "text-emerald-700" : "text-red-700"}`}
        >
          {status.type === "success" && <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />}
          {(status.type === "success" || status.type === "error") && status.message}
        </p>
      </div>
    </form>
  );
}
