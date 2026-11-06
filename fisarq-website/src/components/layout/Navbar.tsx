"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { navLinks } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("inicio");

  // Fundo sólido após scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Secção ativa (aria-current) via IntersectionObserver
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Menu móvel: Escape fecha e bloqueia scroll do body
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;
  const linkColor = solid ? "text-anthracite-700 hover:text-anthracite-950" : "text-white/80 hover:text-white";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-elegant ${
        solid ? "border-b border-stone-200 bg-stone-50/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav aria-label="Navegação principal" className="container-site flex h-18 items-center justify-between gap-6 py-4">
        <Logo tone={solid ? "dark" : "light"} />

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                aria-current={active === link.id ? "location" : undefined}
                className={`relative text-sm font-medium transition-colors ${linkColor} after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-bronze-500 after:transition-all after:duration-300 ${
                  active === link.id ? "after:w-full" : "after:w-0 hover:after:w-full"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <ButtonLink href="/#contacto" variant={solid ? "secondary" : "light"} className="px-5 py-2.5">
            Pedir Consulta
          </ButtonLink>
        </div>

        <button
          type="button"
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden ${solid ? "text-anthracite-900" : "text-white"}`}
          aria-expanded={open}
          aria-controls="menu-movel"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-movel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100dvh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-stone-50 lg:hidden"
          >
            <ul className="container-site flex flex-col gap-1 pt-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    aria-current={active === link.id ? "location" : undefined}
                    className="block border-b border-stone-200 py-4 font-display text-2xl font-medium text-anthracite-900"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-8">
                <ButtonLink href="/#contacto" variant="primary" className="w-full" onClick={() => setOpen(false)}>
                  Pedir Consulta
                </ButtonLink>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
