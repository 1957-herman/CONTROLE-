export default function Sobre() {
  return (
    <section id="sobre" className="section sobre">
      <div className="section-inner sobre-grid">
        <div>
          <p className="section-tag">Sobre nós</p>
          <h2>Uma equipa, três áreas de trabalho</h2>
          <p className="section-lead">
            A Triarea nasceu para resolver, com uma única equipa, os três pedidos que mais
            surgem a quem constrói ou remodela um espaço: energia solar fiável, obra bem
            executada e manutenção que não falha depois da entrega.
          </p>
          <p>
            Trabalhamos com clientes particulares e empresas, acompanhando cada projecto desde
            a primeira visita técnica até à manutenção pós-obra — sempre com orçamento claro e
            prazos definidos antes de qualquer trabalho começar.
          </p>
        </div>

        <div className="sobre-values">
          <div className="value-card">
            <h3>Missão</h3>
            <p>Entregar energia solar e construção de qualidade, com transparência do início ao fim de cada projecto.</p>
          </div>
          <div className="value-card">
            <h3>Visão</h3>
            <p>Ser a referência em soluções integradas de energia e construção civil onde operamos.</p>
          </div>
          <div className="value-card">
            <h3>Valores</h3>
            <p>Rigor técnico, transparência no orçamento e compromisso com prazos e qualidade.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
