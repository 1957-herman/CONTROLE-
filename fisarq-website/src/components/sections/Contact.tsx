import { Briefcase, Clock, Mail, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "./ContactForm";
import { siteConfig } from "@/lib/site";

export function Contact() {
  const { contact } = siteConfig;
  const items = [
    { icon: MapPin, label: "Morada", value: `${contact.address.street}, ${contact.address.district}, ${contact.address.city}, ${contact.address.country}` },
    { icon: Phone, label: "Telefone", value: contact.phone, href: contact.phoneHref },
    { icon: Mail, label: "E-mail geral", value: contact.email, href: `mailto:${contact.email}` },
    { icon: Briefcase, label: "Comercial", value: contact.salesEmail, href: `mailto:${contact.salesEmail}` },
    { icon: Clock, label: "Horário", value: contact.hours },
  ];

  return (
    <section id="contacto" aria-labelledby="contacto-title" className="bg-stone-100 py-24 sm:py-32">
      <div className="container-site grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            id="contacto-title"
            eyebrow="Contacto"
            title="Vamos conversar sobre o seu projeto."
            description="Conte-nos o que pretende desenvolver. Respondemos a todos os pedidos num prazo de 2 dias úteis."
          />
          <ul className="mt-12 space-y-6">
            {items.map((item) => (
              <li key={item.label} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-anthracite-900 text-bronze-300">
                  <item.icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="mt-1 block font-medium text-anthracite-900 hover:text-bronze-600">{item.value}</a>
                  ) : (
                    <p className="mt-1 font-medium text-anthracite-900">{item.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
