import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost" | "light";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ease-elegant focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-bronze-500 text-white hover:bg-bronze-600 shadow-sm",
  secondary: "bg-anthracite-900 text-white hover:bg-anthracite-700",
  ghost: "border border-anthracite-900/15 text-anthracite-900 hover:border-anthracite-900/40 hover:bg-anthracite-900/5",
  light: "border border-white/30 text-white hover:bg-white/10 hover:border-white/60",
};

export const buttonClasses = (variant: Variant = "primary", className = "") =>
  `${base} ${variants[variant]} ${className}`;

type ButtonLinkProps = ComponentProps<typeof Link> & { variant?: Variant };

export function ButtonLink({ variant = "primary", className = "", ...props }: ButtonLinkProps) {
  return <Link className={buttonClasses(variant, className)} {...props} />;
}

type ButtonProps = ComponentProps<"button"> & { variant?: Variant };

export function Button({ variant = "primary", className = "", type = "button", ...props }: ButtonProps) {
  return <button type={type} className={buttonClasses(variant, className)} {...props} />;
}
