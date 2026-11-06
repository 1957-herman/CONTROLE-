import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-anthracite-950 text-white">
      <Image
        src="/images/hero.svg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover opacity-70"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-anthracite-950 via-anthracite-950/70 to-anthracite-950/20" aria-hidden="true" />

      <div className="container-site pb-20 pt-36 sm:pb-28 lg:pb-32">
        <Reveal>
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-bronze-300">
            <span className="h-px w-10 bg-bronze-400" aria-hidden="true" />
            Arquitetura · Engenharia · Design · Gestão
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 id="hero-title" className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
            Excelência técnica que dá forma <span className="text-bronze-300">ao espaço construído.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-stone-300 sm:text-lg">
            Uma abordagem integrada que une arquitetura, engenharia de especialidades e gestão de obra numa única equipa —
            do primeiro esboço à entrega das chaves, com rigor, transparência e tecnologia BIM.
          </p>
        </Reveal>

        <Reveal delay={0.3} className="mt-10 flex flex-col gap-4 sm:flex-row">
          <ButtonLink href="#portefolio" variant="primary">
            Ver Portefólio <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
          <ButtonLink href="#contacto" variant="light">
            Falar com a Equipa
          </ButtonLink>
        </Reveal>
      </div>

      <a
        href="#sobre"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-stone-400 transition-colors hover:text-white sm:flex"
      >
        <span>Descobrir</span>
        <ChevronDown className="h-4 w-4 motion-safe:animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
}
