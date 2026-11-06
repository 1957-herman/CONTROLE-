import type { LucideIcon } from "lucide-react";
import { Building2, Compass, HardHat, Ruler } from "lucide-react";

export type Service = {
  id: string;
  title: string;
  summary: string;
  icon: LucideIcon;
  items: string[];
};

export const services: Service[] = [
  {
    id: "arquitetura",
    title: "Arquitetura e Urbanismo",
    summary:
      "Do estudo prévio ao projeto de execução, desenhamos edifícios e espaços urbanos com identidade, eficiência e respeito pelo contexto.",
    icon: Building2,
    items: [
      "Estudos de viabilidade e programa",
      "Licenciamento e projeto de execução",
      "Reabilitação e património",
      "Planeamento urbano e loteamentos",
    ],
  },
  {
    id: "engenharia",
    title: "Engenharia e Especialidades",
    summary:
      "Coordenação integrada de todas as especialidades em ambiente BIM, garantindo compatibilização, desempenho e conformidade regulamentar.",
    icon: Ruler,
    items: [
      "Estruturas e fundações",
      "Instalações hidráulicas e AVAC",
      "Eletricidade, ITED e segurança contra incêndio",
      "Térmica, acústica e certificação energética",
    ],
  },
  {
    id: "interiores",
    title: "Design de Interiores",
    summary:
      "Espaços interiores pensados para quem os vive — materiais, luz e mobiliário articulados numa linguagem coerente e intemporal.",
    icon: Compass,
    items: [
      "Conceito e moodboards",
      "Projeto de mobiliário e iluminação",
      "Espaços corporativos e hotelaria",
      "Seleção de materiais e acabamentos",
    ],
  },
  {
    id: "fiscalizacao",
    title: "Gestão e Fiscalização de Obras",
    summary:
      "Controlo independente de custo, prazo e qualidade em obra, assegurando que o projeto é executado exatamente como foi concebido.",
    icon: HardHat,
    items: [
      "Gestão de projeto (Project Management)",
      "Fiscalização e coordenação de segurança",
      "Controlo orçamental e de prazos",
      "Receção provisória e definitiva",
    ],
  },
];
