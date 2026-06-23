import { useState } from 'react';

export default function ReportForm({ initial = {}, onSave, onCancel }) {
  const today = new Date().toISOString().split('T')[0];
  const [form, setForm] = useState({
    client: initial.client || '',
    project: initial.project || '',
    location: initial.location || '',
    date: initial.date || today,
    reference: initial.reference || '',
    company: initial.company || '',
    layout: initial.layout || '6',
  });

  function update(field, value) {
    setForm(f => ({ ...f, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.client || !form.project) return;
    onSave(form);
  }

  return (
    <form className="report-form" onSubmit={handleSubmit}>
      <h2 className="form-title">
        {initial.id ? 'Editar Relatório' : 'Novo Relatório'}
      </h2>

      <div className="form-grid">
        <div className="form-group">
          <label>Cliente *</label>
          <input
            type="text"
            value={form.client}
            onChange={e => update('client', e.target.value)}
            placeholder="Nome do cliente"
            required
          />
        </div>

        <div className="form-group">
          <label>Obra *</label>
          <input
            type="text"
            value={form.project}
            onChange={e => update('project', e.target.value)}
            placeholder="Nome ou descrição da obra"
            required
          />
        </div>

        <div className="form-group">
          <label>Localidade</label>
          <input
            type="text"
            value={form.location}
            onChange={e => update('location', e.target.value)}
            placeholder="Cidade / Endereço"
          />
        </div>

        <div className="form-group">
          <label>Data</label>
          <input
            type="date"
            value={form.date}
            onChange={e => update('date', e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Referência / Nº do Relatório</label>
          <input
            type="text"
            value={form.reference}
            onChange={e => update('reference', e.target.value)}
            placeholder="Ex: RF-2024-001"
          />
        </div>

        <div className="form-group">
          <label>Empresa / Responsável</label>
          <input
            type="text"
            value={form.company}
            onChange={e => update('company', e.target.value)}
            placeholder="Nome da empresa ou responsável"
          />
        </div>

        <div className="form-group full-width">
          <label>Layout de fotos por página</label>
          <div className="layout-options">
            <label className={`layout-card ${form.layout === '6' ? 'selected' : ''}`}>
              <input
                type="radio"
                name="layout"
                value="6"
                checked={form.layout === '6'}
                onChange={() => update('layout', '6')}
              />
              <span className="layout-icon">▦ ▦ ▦<br/>▦ ▦ ▦</span>
              <span>6 fotos por página<br/>(3 colunas × 2 linhas)</span>
            </label>
            <label className={`layout-card ${form.layout === '4' ? 'selected' : ''}`}>
              <input
                type="radio"
                name="layout"
                value="4"
                checked={form.layout === '4'}
                onChange={() => update('layout', '4')}
              />
              <span className="layout-icon">▦ ▦<br/>▦ ▦</span>
              <span>4 fotos por página<br/>(2 colunas × 2 linhas)</span>
            </label>
          </div>
        </div>
      </div>

      <div className="form-actions">
        <button type="button" className="btn-secondary" onClick={onCancel}>
          Cancelar
        </button>
        <button type="submit" className="btn-primary">
          {initial.id ? 'Salvar Alterações' : 'Criar Relatório'}
        </button>
      </div>
    </form>
  );
}
