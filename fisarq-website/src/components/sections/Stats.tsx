"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";
import { partners, stats, type Stat } from "@/lib/data/stats";

function Counter({ value, suffix }: Pick<Stat, "value" | "suffix">) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, value]);

  return (
    <span ref={ref} aria-hidden="true">
      {display}
      <span className="text-bronze-500">{suffix}</span>
    </span>
  );
}

export function Stats() {
  return (
    <section aria-labelledby="stats-title" className="border-b border-stone-200 bg-stone-100 py-20 sm:py-24">
      <div className="container-site">
        <h2 id="stats-title" className="sr-only">A FISARQ em números</h2>
        <dl className="grid gap-y-10 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse border-l border-stone-300 pl-6">
              <dt className="mt-2 text-sm text-stone-600">{s.label}</dt>
              <dd className="font-display text-4xl font-semibold text-anthracite-900 sm:text-5xl">
                <span className="sr-only">{s.value}{s.suffix}</span>
                <Counter value={s.value} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-20">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-stone-500">Parceiros e clientes que confiam em nós</p>
          <ul className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {partners.map((p) => (
              <li key={p} className="flex h-14 items-center justify-center rounded-lg border border-stone-200 bg-stone-50 px-3 text-center font-display text-sm font-semibold tracking-wide text-stone-500">
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
