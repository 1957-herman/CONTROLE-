import { Leaf, ShieldCheck, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const pillars = [
  {
    title: "Missão",
    text: "Desenvolver projetos de arquitetura e engenharia que criam valor duradouro para clientes, utilizadores e comunidades, com qualidade técnica irrepreensível.",
  },
  {
    title: "Visão",
    text: "Ser a referência nacional em soluções integradas de projeto e gestão, reconhecida pela inovação, pela fiabilidade e pela capacidade de execução.",
  },
];

const values = [
  { icon: ShieldCheck, title: "Rigor", text: "Processos certificados, controlo de qualidade em cada fase e total responsabilidade técnica." },
  { icon: Leaf, title: "Sustentabilidade", text: "Eficiência energética, materiais responsáveis e conceção orientada ao ciclo de vida." },
  { icon: Sparkles, title: "Inovação Técnica", text: "Metodologia BIM, simulação e ferramentas digitais ao serviço de decisões mais informadas." },
];

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="py-24 sm:py-32">
      <div className="container-site">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              id="sobre-title"
              eyebrow="Sobre Nós"
              title="Uma equipa multidisciplinar, um único interlocutor."
              description="A FISARQ reúne arquitetos, engenheiros, designers e gestores de projeto que trabalham em conjunto desde o primeiro dia. O resultado: menos interfaces, decisões mais rápidas e obras sem surpresas."
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1} className="rounded-2xl border border-stone-200 bg-white p-8">
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-bronze-600">{p.title}</h3>
                <p className="mt-4 leading-relaxed text-anthracite-700">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <ul className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-stone-200 bg-stone-200 md:grid-cols-3">
          {values.map((v, i) => (
            <li key={v.title} className="bg-stone-50">
              <Reveal delay={i * 0.1} className="h-full p-8 sm:p-10">
                <v.icon className="h-7 w-7 text-bronze-500" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="mt-6 text-xl font-semibold">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-stone-600">{v.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
