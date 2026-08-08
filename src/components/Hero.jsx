import { SunIcon, BuildingIcon, WrenchIcon } from './icons';

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-inner">
        <p className="eyebrow">Energia solar · Construção civil · Serviços</p>
        <h1>
          Soluções completas para construir e energizar o seu espaço
        </h1>
        <p className="hero-lead">
          A Triarea junta instalação fotovoltaica, construção civil e manutenção
          numa só equipa — do projecto à entrega, com acompanhamento até ao fim.
        </p>
        <div className="hero-actions">
          <a href="#contactos" className="btn btn-primary btn-lg">Pedir orçamento gratuito</a>
          <a href="#servicos" className="btn btn-ghost btn-lg">Ver serviços</a>
        </div>

        <div className="hero-pills">
          <span className="pill"><SunIcon size={18} /> Fotovoltaico</span>
          <span className="pill"><BuildingIcon size={18} /> Construção civil</span>
          <span className="pill"><WrenchIcon size={18} /> Manutenção</span>
        </div>
      </div>
    </section>
  );
}
