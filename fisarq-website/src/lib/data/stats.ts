import { siteConfig } from "@/lib/site";

export type Stat = { value: number; suffix: string; label: string };

export const stats: Stat[] = [
  // Calculado a partir do ano de fundação — atualiza-se sozinho todos os anos
  { value: new Date().getFullYear() - siteConfig.foundingYear, suffix: "", label: `Anos de experiência (desde ${siteConfig.foundingYear})` },
  { value: 57, suffix: "", label: "Projetos concluídos" },
  { value: 40, suffix: "+", label: "Parcerias ativas" },
];

export const partners = [
  "Administração Municipal do Cuvango",
  "Administração Municipal da Humpata",
  "Fundo Rodoviário",
  "Ministério da Justiça e dos Direitos Humanos",
  "Ministério do Comércio",
];
