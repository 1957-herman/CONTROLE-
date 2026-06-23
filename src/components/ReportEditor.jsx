import { useState } from 'react';
import ReportForm from './ReportForm';
import PhotoGrid from './PhotoGrid';
import { generatePDF } from '../utils/pdfGenerator';

export default function ReportEditor({ report, onSave, onBack }) {
  const [meta, setMeta] = useState({
    client: report.client,
    project: report.project,
    location: report.location,
    date: report.date,
    reference: report.reference,
    company: report.company,
    layout: report.layout || '6',
  });
  const [photos, setPhotos] = useState(report.photos || []);
  const [editingMeta, setEditingMeta] = useState(false);
  const [generating, setGenerating] = useState(false);

  function handleMetaSave(newMeta) {
    setMeta(newMeta);
    setEditingMeta(false);
    save(newMeta, photos);
  }

  function handlePhotosChange(newPhotos) {
    setPhotos(newPhotos);
    save(meta, newPhotos);
  }

  function save(m, p) {
    onSave({ ...report, ...m, photos: p });
  }

  async function handleGeneratePDF() {
    if (!photos.length) {
      alert('Adicione ao menos uma foto antes de gerar o PDF.');
      return;
    }
    setGenerating(true);
    try {
      await generatePDF({ ...meta, photos });
    } finally {
      setGenerating(false);
    }
  }

  const dateFormatted = meta.date
    ? new Date(meta.date + 'T12:00:00').toLocaleDateString('pt-BR')
    : '—';

  return (
    <div className="editor-layout">
      <div className="editor-topbar">
        <button className="btn-back" onClick={onBack}>← Relatórios</button>
        <div className="editor-title">
          <h1>{meta.project || 'Sem título'}</h1>
          <span className="editor-sub">{meta.client} · {meta.location} · {dateFormatted}</span>
        </div>
        <div className="editor-actions">
          <button className="btn-secondary" onClick={() => setEditingMeta(true)}>
            Editar dados
          </button>
          <button
            className="btn-primary"
            onClick={handleGeneratePDF}
            disabled={generating || !photos.length}
          >
            {generating ? 'Gerando PDF...' : '⬇ Exportar PDF'}
          </button>
        </div>
      </div>

      {editingMeta && (
        <div className="modal-overlay">
          <div className="modal">
            <ReportForm
              initial={{ ...meta, id: report.id }}
              onSave={handleMetaSave}
              onCancel={() => setEditingMeta(false)}
            />
          </div>
        </div>
      )}

      <div className="editor-meta-bar">
        <span><strong>Cliente:</strong> {meta.client || '—'}</span>
        <span><strong>Obra:</strong> {meta.project || '—'}</span>
        <span><strong>Localidade:</strong> {meta.location || '—'}</span>
        <span><strong>Data:</strong> {dateFormatted}</span>
        <span><strong>Ref.:</strong> {meta.reference || '—'}</span>
        <span><strong>Layout:</strong> {meta.layout === '4' ? '4 fotos/pág.' : '6 fotos/pág.'}</span>
      </div>

      <PhotoGrid photos={photos} onChange={handlePhotosChange} />
    </div>
  );
}
