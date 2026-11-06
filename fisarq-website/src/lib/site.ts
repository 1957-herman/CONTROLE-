/** Configuração institucional centralizada — única fonte de verdade para SEO, navegação e contactos. */
export const siteConfig = {
  name: "FISARQ",
  legalName: "FISARQ — Arquitetura, Engenharia e Gestão de Projetos, Lda.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.fisarq.ao",
  locale: "pt_AO",
  title: "FISARQ | Arquitetura, Engenharia, Design e Gestão de Projetos",
  description:
    "Soluções integradas de arquitetura, engenharia de especialidades, design de interiores e fiscalização de obras. Rigor técnico, sustentabilidade e inovação do conceito à entrega.",
  keywords: [
    "arquitetura",
    "engenharia",
    "projetos de especialidades",
    "design de interiores",
    "fiscalização de obras",
    "gestão de projetos",
    "urbanismo",
    "BIM",
  ],
  contact: {
    email: "geral@fisarq.ao",
    phone: "+244 900 000 000",
    phoneHref: "tel:+244900000000",
    address: {
      street: "Rua Rainha Ginga, 000",
      city: "Luanda",
      country: "Angola",
      countryCode: "AO",
    },
    hours: "Segunda a sexta, 09h00 – 18h00",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/fisarq",
    instagram: "https://www.instagram.com/fisarq",
  },
} as const;

export const navLinks = [
  { id: "inicio", href: "/#inicio", label: "Início" },
  { id: "sobre", href: "/#sobre", label: "Sobre Nós" },
  { id: "servicos", href: "/#servicos", label: "Serviços" },
  { id: "portefolio", href: "/#portefolio", label: "Portefólio" },
  { id: "contacto", href: "/#contacto", label: "Contacto" },
] as const;
