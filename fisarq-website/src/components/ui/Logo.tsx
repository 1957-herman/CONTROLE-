import Link from "next/link";

type LogoProps = { tone?: "light" | "dark"; className?: string };

/** Logótipo vetorial FISARQ (substituir pelo ficheiro oficial quando disponível). */
export function Logo({ tone = "dark", className = "" }: LogoProps) {
  const text = tone === "light" ? "text-white" : "text-anthracite-900";
  return (
    <Link href="/#inicio" aria-label="FISARQ — voltar ao início" className={`group inline-flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden="true">
        <rect width="40" height="40" rx="8" className={tone === "light" ? "fill-white/10" : "fill-anthracite-900"} />
        <path d="M11 29V11h14M11 20h10" fill="none" stroke="#f3f1ed" strokeWidth="3" strokeLinecap="square" />
        <path d="M24 29l5-11" stroke="#a8865b" strokeWidth="3" strokeLinecap="square" />
      </svg>
      <span className={`font-display text-lg font-semibold tracking-[0.22em] ${text}`}>FISARQ</span>
    </Link>
  );
}
