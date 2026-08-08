import { SERVICES } from '../data/content';
import { SunIcon, BuildingIcon, WrenchIcon, CheckIcon } from './icons';

const ICONS = { sun: SunIcon, building: BuildingIcon, wrench: WrenchIcon };

export default function Servicos() {
  return (
    <section id="servicos" className="section servicos">
      <div className="section-inner">
        <p className="section-tag">O que fazemos</p>
        <h2>Os nossos serviços</h2>
        <p className="section-lead">
          Três áreas, uma só equipa de confiança para acompanhar o seu projecto.
        </p>

        <div className="services-grid">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon];
            return (
              <article key={service.id} className="service-card">
                <div className="service-icon"><Icon size={26} /></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.items.map((item) => (
                    <li key={item}>
                      <CheckIcon size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contactos" className="service-link">Pedir este serviço →</a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
