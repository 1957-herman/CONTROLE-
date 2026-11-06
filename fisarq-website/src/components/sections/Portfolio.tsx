"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projectCategories, projects } from "@/lib/data/projects";

type Filter = (typeof projectCategories)[number];

export function Portfolio() {
  const [filter, setFilter] = useState<Filter>("Todos");
  const reduce = useReducedMotion();

  const visible = useMemo(
    () => (filter === "Todos" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="portefolio" aria-labelledby="portefolio-title" className="py-24 sm:py-32">
      <div className="container-site">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="portefolio-title"
            eyebrow="Portefólio"
            title="Projetos que definem o nosso padrão."
            description="Uma seleção de trabalhos recentes em arquitetura, engenharia, interiores e fiscalização."
          />

          <div role="group" aria-label="Filtrar projetos por categoria" className="flex flex-wrap gap-2">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                aria-pressed={filter === cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? "border-anthracite-900 bg-anthracite-900 text-white"
                    : "border-stone-300 text-anthracite-700 hover:border-anthracite-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          {visible.length} {visible.length === 1 ? "projeto apresentado" : "projetos apresentados"}
        </p>

        <motion.ul layout={!reduce} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((project) => (
              <motion.li
                key={project.id}
                layout={!reduce}
                initial={reduce ? false : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className={project.featured && filter === "Todos" ? "lg:col-span-2" : ""}
              >
                <article className="group relative h-full overflow-hidden rounded-2xl bg-anthracite-900" tabIndex={0} aria-labelledby={`proj-${project.id}`}>
                  <div className="relative aspect-[4/3] lg:aspect-auto lg:h-80">
                    <Image
                      src={project.image}
                      alt={`${project.title} — ${project.category}, ${project.location}`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-elegant group-hover:scale-105 group-focus-visible:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-anthracite-950/95 via-anthracite-950/40 to-transparent" aria-hidden="true" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze-300">
                      {project.category} · {project.year}
                    </p>
                    <h3 id={`proj-${project.id}`} className="mt-2 text-xl font-semibold sm:text-2xl">{project.title}</h3>
                    <p className="mt-1 flex items-center gap-1.5 text-sm text-stone-300">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" /> {project.location}
                    </p>
                    <p className="mt-3 max-h-0 overflow-hidden text-sm leading-relaxed text-stone-200 opacity-0 transition-all duration-500 ease-elegant group-hover:max-h-32 group-hover:opacity-100 group-focus-visible:max-h-32 group-focus-visible:opacity-100">
                      {project.description}
                    </p>
                  </div>
                </article>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
}
