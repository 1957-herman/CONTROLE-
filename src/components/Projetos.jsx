import { PROJECT_CATEGORIES } from '../data/content';
import { SunIcon, BuildingIcon, WrenchIcon } from './icons';

const ICONS = { sun: SunIcon, building: BuildingIcon, wrench: WrenchIcon };

export default function Projetos() {
  return (
    <section id="projectos" className="section projectos">
      <div className="section-inner">
        <p className="section-tag">Projectos</p>
        <h2>Trabalhos realizados</h2>
        <p className="section-lead">
          Estamos a preparar a galeria com fotos reais dos nossos projectos concluídos.
          Entre em contacto para conhecer trabalhos já executados em cada área.
        </p>

        <div className="projects-grid">
          {PROJECT_CATEGORIES.map((cat) => {
            const Icon = ICONS[cat.icon];
            return (
              <div key={cat.label} className={`project-placeholder ${cat.icon}`}>
                <Icon size={32} />
                <span>{cat.label}</span>
                <small>Em breve</small>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
