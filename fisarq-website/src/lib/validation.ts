import { z } from "zod";

/** Esquema partilhado entre cliente e servidor (validação única). */
export const contactSchema = z.object({
  name: z.string({ error: "Indique o seu nome." }).trim().min(2, "Indique o seu nome.").max(100),
  email: z.string({ error: "Indique um e-mail válido." }).trim().email("Indique um e-mail válido.").max(160),
  phone: z
    .string()
    .trim()
    .max(30)
    .regex(/^[+()\d\s-]*$/, "Indique um telefone válido.")
    .optional()
    .or(z.literal("")),
  subject: z.string({ error: "Indique o assunto." }).trim().min(3, "Indique o assunto.").max(150),
  message: z.string({ error: "Escreva a sua mensagem." }).trim().min(10, "A mensagem deve ter pelo menos 10 caracteres.").max(5000),
  consent: z.literal(true, { message: "É necessário aceitar a política de privacidade." }),
  /** Honeypot anti-spam: deve chegar vazio. */
  company: z.string().max(200).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type ContactField = keyof ContactInput;
