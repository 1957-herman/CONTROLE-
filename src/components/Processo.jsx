import { PROCESSO } from '../data/content';

export default function Processo() {
  return (
    <section id="processo" className="section processo">
      <div className="section-inner">
        <p className="section-tag">Como trabalhamos</p>
        <h2>Do primeiro contacto à entrega</h2>

        <div className="steps">
          {PROCESSO.map((step) => (
            <div key={step.n} className="step">
              <span className="step-n">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
