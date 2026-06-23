import { useRef, useState } from 'react';
import { applyAutoCaptions, getAutoCaption } from '../utils/captions';

const MAX_PHOTOS = 24;

export default function PhotoGrid({ photos, onChange }) {
  const inputRef = useRef();
  const [dragging, setDragging] = useState(null);
  const [dragOver, setDragOver] = useState(null);

  function handleFiles(files) {
    const remaining = MAX_PHOTOS - photos.length;
    if (remaining <= 0) return;
    const toAdd = Array.from(files).slice(0, remaining);

    let loaded = 0;
    const newPhotos = [];

    toAdd.forEach((file, i) => {
      const reader = new FileReader();
      reader.onload = e => {
        newPhotos.push({
          id: crypto.randomUUID(),
          dataUrl: e.target.result,
          caption: getAutoCaption(photos.length + i),
          name: file.name,
        });
        loaded++;
        if (loaded === toAdd.length) {
          onChange([...photos, ...newPhotos]);
        }
      };
      reader.readAsDataURL(file);
    });
  }

  function handleDrop(e) {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/'));
    if (files.length) handleFiles(files);
  }

  function removePhoto(id) {
    onChange(photos.filter(p => p.id !== id));
  }

  function updateCaption(id, caption) {
    onChange(photos.map(p => p.id === id ? { ...p, caption } : p));
  }

  function autoFillCaptions() {
    onChange(applyAutoCaptions(photos));
  }

  function clearCaptions() {
    onChange(photos.map(p => ({ ...p, caption: '' })));
  }

  function onDragStart(idx) {
    setDragging(idx);
  }

  function onDragEnter(idx) {
    setDragOver(idx);
  }

  function onDragEnd() {
    if (dragging !== null && dragOver !== null && dragging !== dragOver) {
      const arr = [...photos];
      const [moved] = arr.splice(dragging, 1);
      arr.splice(dragOver, 0, moved);
      onChange(arr);
    }
    setDragging(null);
    setDragOver(null);
  }

  const canAdd = photos.length < MAX_PHOTOS;

  return (
    <div className="photo-grid-section">
      <div className="photo-toolbar">
        <span className="photo-count">
          {photos.length} / {MAX_PHOTOS} fotos
        </span>
        <div className="toolbar-actions">
          <button className="btn-sm" onClick={autoFillCaptions} disabled={!photos.length}>
            Legendas automáticas
          </button>
          <button className="btn-sm btn-outline" onClick={clearCaptions} disabled={!photos.length}>
            Limpar legendas
          </button>
          <button
            className="btn-primary btn-sm"
            onClick={() => inputRef.current.click()}
            disabled={!canAdd}
          >
            + Adicionar fotos
          </button>
        </div>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        style={{ display: 'none' }}
        onChange={e => { handleFiles(e.target.files); e.target.value = ''; }}
      />

      {photos.length === 0 && (
        <div
          className="drop-zone"
          onDrop={handleDrop}
          onDragOver={e => e.preventDefault()}
          onClick={() => inputRef.current.click()}
        >
          <div className="drop-icon">📷</div>
          <p>Arraste fotos aqui ou clique para selecionar</p>
          <p className="drop-hint">Máximo {MAX_PHOTOS} fotos • JPG, PNG, WEBP</p>
        </div>
      )}

      {photos.length > 0 && (
        <div
          className="photo-cards"
          onDrop={handleDrop}
          onDragOver={e => e.preventDefault()}
        >
          {photos.map((photo, idx) => (
            <div
              key={photo.id}
              className={`photo-card ${dragging === idx ? 'dragging' : ''} ${dragOver === idx && dragging !== idx ? 'drag-over' : ''}`}
              draggable
              onDragStart={() => onDragStart(idx)}
              onDragEnter={() => onDragEnter(idx)}
              onDragEnd={onDragEnd}
            >
              <div className="photo-num">{idx + 1}</div>
              <img src={photo.dataUrl} alt={`Foto ${idx + 1}`} />
              <button
                className="remove-btn"
                onClick={() => removePhoto(photo.id)}
                title="Remover foto"
              >
                ×
              </button>
              <input
                className="caption-input"
                value={photo.caption}
                onChange={e => updateCaption(photo.id, e.target.value)}
                placeholder={`Legenda da foto ${idx + 1}`}
              />
            </div>
          ))}

          {canAdd && (
            <div className="photo-card add-card" onClick={() => inputRef.current.click()}>
              <span>+</span>
              <small>Adicionar</small>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
