import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({ id, eyebrow, title, description, align = "left", tone = "dark" }: SectionHeadingProps) {
  const center = align === "center" ? "mx-auto text-center items-center" : "items-start";
  const titleColor = tone === "light" ? "text-white" : "text-anthracite-900";
  const descColor = tone === "light" ? "text-stone-300" : "text-stone-600";
  return (
    <Reveal className={`flex max-w-2xl flex-col ${center}`}>
      <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-bronze-500">
        <span className="h-px w-8 bg-bronze-500" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={id} className={`mt-5 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl ${titleColor}`}>
        {title}
      </h2>
      {description && <p className={`mt-5 text-base leading-relaxed sm:text-lg ${descColor}`}>{description}</p>}
    </Reveal>
  );
}
