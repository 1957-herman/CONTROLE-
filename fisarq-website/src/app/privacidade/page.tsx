import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Como a FISARQ recolhe, utiliza e protege os seus dados pessoais, em conformidade com a Lei n.º 22/11 de Protecção de Dados Pessoais.",
  alternates: { canonical: "/privacidade" },
};

export default function PrivacyPage() {
  return (
    <article className="container-site max-w-3xl py-32 sm:py-40">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-bronze-600">Legal</p>
      <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Política de Privacidade</h1>
      <div className="mt-10 space-y-6 leading-relaxed text-anthracite-700 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-anthracite-900">
        <p>
          A {siteConfig.legalName} é responsável pelo tratamento dos dados pessoais recolhidos através deste website, nos termos da
          Lei n.º 22/11, de 17 de Junho (Lei da Protecção de Dados Pessoais da República de Angola).
        </p>
        <h2>Dados recolhidos</h2>
        <p>Nome, e-mail, telefone e conteúdo da mensagem submetidos voluntariamente no formulário de contacto.</p>
        <h2>Finalidade e conservação</h2>
        <p>Os dados são usados exclusivamente para responder ao seu pedido e conservados pelo período estritamente necessário.</p>
        <h2>Os seus direitos</h2>
        <p>
          Pode exercer os direitos de acesso, retificação, apagamento, limitação e oposição através de{" "}
          <a className="underline" href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>.
        </p>
        <p className="text-sm text-stone-500">Texto-modelo — deve ser revisto pelo encarregado de proteção de dados antes da publicação.</p>
      </div>
    </article>
  );
}
