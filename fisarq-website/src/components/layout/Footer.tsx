import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { navLinks, siteConfig } from "@/lib/site";
import { services } from "@/lib/data/services";

export function Footer() {
  const { contact, social } = siteConfig;
  const year = new Date().getFullYear();
  return (
    <footer className="bg-anthracite-950 text-stone-300" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Rodapé</h2>
      <div className="container-site grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div className="space-y-5 lg:col-span-1">
          <Logo tone="light" />
          <p className="max-w-xs text-sm leading-relaxed text-stone-500">
            Arquitetura, engenharia, design e gestão de projetos com rigor, sustentabilidade e inovação técnica.
          </p>
        </div>

        <nav aria-label="Navegação do rodapé">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Navegação</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}><a href={l.href} className="transition-colors hover:text-bronze-300">{l.label}</a></li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Serviços</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.id}><a href="/#servicos" className="transition-colors hover:text-bronze-300">{s.title}</a></li>
            ))}
          </ul>
        </div>

        <address className="not-italic">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Contactos</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-bronze-400" aria-hidden="true" />
              <span>{contact.address.street}<br />{contact.address.postalCode} {contact.address.city}, {contact.address.country}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-bronze-400" aria-hidden="true" />
              <a href={contact.phoneHref} className="hover:text-bronze-300">{contact.phone}</a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-bronze-400" aria-hidden="true" />
              <a href={`mailto:${contact.email}`} className="hover:text-bronze-300">{contact.email}</a>
            </li>
          </ul>
        </address>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-4 py-6 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {siteConfig.legalName} Todos os direitos reservados.</p>
          <ul className="flex gap-6">
            <li><a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-bronze-300">LinkedIn</a></li>
            <li><a href={social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-bronze-300">Instagram</a></li>
            <li><a href="/privacidade" className="hover:text-bronze-300">Política de Privacidade</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
