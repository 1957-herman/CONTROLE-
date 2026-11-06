import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/lib/data/services";

export function Services() {
  return (
    <section id="servicos" aria-labelledby="servicos-title" className="bg-anthracite-900 py-24 text-white sm:py-32">
      <div className="container-site">
        <SectionHeading
          id="servicos-title"
          tone="light"
          eyebrow="Áreas de Atuação"
          title="Serviços integrados em todo o ciclo do projeto."
          description="Atuamos de forma isolada ou em regime chave-na-mão, assegurando coordenação total entre disciplinas."
        />

        <ul className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <li key={s.id}>
              <Reveal delay={(i % 2) * 0.1} className="group h-full">
                <article className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-colors duration-500 hover:border-bronze-500/50 hover:bg-white/[0.06] sm:p-10">
                  <span className="absolute right-8 top-8 font-display text-5xl font-semibold text-white/5" aria-hidden="true">
                    0{i + 1}
                  </span>
                  <s.icon className="h-8 w-8 text-bronze-400" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="mt-6 text-2xl font-semibold">{s.title}</h3>
                  <p className="mt-4 leading-relaxed text-stone-300">{s.summary}</p>
                  <ul className="mt-8 grid gap-3 border-t border-white/10 pt-6 text-sm text-stone-300 sm:grid-cols-2">
                    {s.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-bronze-400" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
