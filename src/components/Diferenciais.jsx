import { DIFERENCIAIS } from '../data/content';
import { CheckIcon, ShieldIcon, ClockIcon, SupportIcon } from './icons';

const ICONS = { check: CheckIcon, shield: ShieldIcon, clock: ClockIcon, support: SupportIcon };

export default function Diferenciais() {
  return (
    <section className="section diferenciais">
      <div className="section-inner">
        <p className="section-tag">Porque escolher a Triarea</p>
        <h2>O que nos diferencia</h2>

        <div className="dif-grid">
          {DIFERENCIAIS.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <div key={item.title} className="dif-card">
                <div className="dif-icon"><Icon size={24} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
