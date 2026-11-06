export const projectCategories = [
  "Todos",
  "Arquitetura",
  "Engenharia",
  "Interiores",
  "Fiscalização",
] as const;

export type ProjectCategory = Exclude<(typeof projectCategories)[number], "Todos">;

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  location: string;
  year: number;
  description: string;
  image: string;
  featured?: boolean;
};

/** Projetos de exemplo — substituir imagens em /public/images/projects por fotografias reais. */
export const projects: Project[] = [
  {
    id: "edificio-atlantico",
    title: "Edifício Atlântico",
    category: "Arquitetura",
    location: "Luanda",
    year: 2025,
    description: "Edifício de escritórios com 12 000 m², fachada ventilada e certificação LEED Gold.",
    image: "/images/projects/edificio-atlantico.svg",
    featured: true,
  },
  {
    id: "campus-tecnologico",
    title: "Campus Tecnológico Norte",
    category: "Engenharia",
    location: "Talatona",
    year: 2024,
    description: "Coordenação BIM de todas as especialidades para um campus de inovação com 4 edifícios.",
    image: "/images/projects/campus-tecnologico.svg",
  },
  {
    id: "residencia-quinta",
    title: "Residência da Quinta",
    category: "Arquitetura",
    location: "Mussulo",
    year: 2023,
    description: "Moradia unifamiliar de baixo consumo energético integrada numa encosta arborizada.",
    image: "/images/projects/residencia-quinta.svg",
  },
  {
    id: "sede-corporativa",
    title: "Sede Corporativa Meridian",
    category: "Interiores",
    location: "Luanda",
    year: 2025,
    description: "Design de interiores para 3 pisos de escritórios em regime de trabalho híbrido.",
    image: "/images/projects/sede-corporativa.svg",
  },
  {
    id: "hospital-regional",
    title: "Ampliação Hospital Regional",
    category: "Fiscalização",
    location: "Benguela",
    year: 2024,
    description: "Fiscalização e coordenação de segurança de uma empreitada de 18 mil milhões de Kz concluída no prazo.",
    image: "/images/projects/hospital-regional.svg",
  },
  {
    id: "hotel-marginal",
    title: "Hotel Marginal",
    category: "Interiores",
    location: "Luanda",
    year: 2023,
    description: "Reabilitação de edifício histórico em hotel boutique de 42 quartos.",
    image: "/images/projects/hotel-marginal.svg",
  },
  {
    id: "ponte-pedonal",
    title: "Ponte Pedonal do Parque",
    category: "Engenharia",
    location: "Lubango",
    year: 2022,
    description: "Estrutura metálica de 68 m de vão com tabuleiro em madeira lamelada.",
    image: "/images/projects/ponte-pedonal.svg",
  },
  {
    id: "plano-frente-maritima",
    title: "Plano Frente Marítima",
    category: "Arquitetura",
    location: "Lobito",
    year: 2022,
    description: "Plano de pormenor para requalificação de 9 ha de frente marítima.",
    image: "/images/projects/plano-frente-maritima.svg",
  },
];
