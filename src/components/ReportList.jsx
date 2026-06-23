export default function ReportList({ reports, onOpen, onCreate, onDelete }) {
  function handleDelete(e, id) {
    e.stopPropagation();
    if (confirm('Excluir este relatório permanentemente?')) {
      onDelete(id);
    }
  }

  return (
    <div className="list-layout">
      <div className="list-header">
        <div>
          <h1 className="app-title">📋 Relatórios Fotográficos</h1>
          <p className="app-subtitle">Crie, edite e exporte relatórios com fotos em PDF</p>
        </div>
        <button className="btn-primary" onClick={onCreate}>
          + Novo Relatório
        </button>
      </div>

      {reports.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">📷</div>
          <h2>Nenhum relatório ainda</h2>
          <p>Clique em "Novo Relatório" para começar</p>
          <button className="btn-primary" onClick={onCreate}>
            Criar primeiro relatório
          </button>
        </div>
      ) : (
        <div className="report-cards">
          {reports.map(r => {
            const dateStr = r.date
              ? new Date(r.date + 'T12:00:00').toLocaleDateString('pt-BR')
              : '—';
            const pages = Math.ceil((r.photos?.length || 0) / (r.layout === '4' ? 4 : 6));
            return (
              <div key={r.id} className="report-card" onClick={() => onOpen(r.id)}>
                <div className="report-card-thumb">
                  {r.photos?.[0] ? (
                    <img src={r.photos[0].dataUrl} alt="capa" />
                  ) : (
                    <div className="no-thumb">📷</div>
                  )}
                  <span className="photo-badge">{r.photos?.length || 0} fotos</span>
                </div>
                <div className="report-card-body">
                  <h3 className="report-card-title">{r.project || 'Sem título'}</h3>
                  <p className="report-card-client">{r.client}</p>
                  <p className="report-card-meta">{r.location} · {dateStr}</p>
                  {r.reference && (
                    <span className="report-card-ref">{r.reference}</span>
                  )}
                  <p className="report-card-pages">{pages} página{pages !== 1 ? 's' : ''} de PDF</p>
                </div>
                <div className="report-card-actions">
                  <button
                    className="btn-icon edit"
                    onClick={e => { e.stopPropagation(); onOpen(r.id); }}
                    title="Editar"
                  >
                    ✏️
                  </button>
                  <button
                    className="btn-icon delete"
                    onClick={e => handleDelete(e, r.id)}
                    title="Excluir"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
