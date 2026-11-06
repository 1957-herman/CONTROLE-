import { siteConfig } from "@/lib/site";

export type Stat = { value: number; suffix: string; label: string };

export const stats: Stat[] = [
  // Calculado a partir do ano de fundação — atualiza-se sozinho todos os anos
  { value: new Date().getFullYear() - siteConfig.foundingYear, suffix: "", label: `Anos de experiência (desde ${siteConfig.foundingYear})` },
  { value: 57, suffix: "", label: "Projetos concluídos" },
  { value: 98, suffix: "%", label: "Clientes satisfeitos" },
  { value: 40, suffix: "+", label: "Parcerias ativas" },
];

export const partners = ["Atlas Engenharia", "Norte Capital", "Grupo Meridian", "Lusoterra", "Vértice Imobiliária", "Tagus Tech"];
