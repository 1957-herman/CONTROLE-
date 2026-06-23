import { useState, useEffect } from 'react';
import ReportList from './components/ReportList';
import ReportEditor from './components/ReportEditor';
import ReportForm from './components/ReportForm';
import { loadReports, saveReports, deleteReport } from './utils/storage';
import './App.css';

export default function App() {
  const [reports, setReports] = useState([]);
  const [view, setView] = useState('list'); // 'list' | 'create' | 'edit'
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    setReports(loadReports());
  }, []);

  function handleCreate(formData) {
    const newReport = {
      id: crypto.randomUUID(),
      ...formData,
      photos: [],
      createdAt: new Date().toISOString(),
    };
    const updated = [newReport, ...reports];
    setReports(updated);
    saveReports(updated);
    setActiveId(newReport.id);
    setView('edit');
  }

  function handleSave(updatedReport) {
    const updated = reports.map(r => r.id === updatedReport.id ? updatedReport : r);
    setReports(updated);
    saveReports(updated);
  }

  function handleDelete(id) {
    const updated = deleteReport(id);
    setReports(updated);
    if (activeId === id) {
      setActiveId(null);
      setView('list');
    }
  }

  function handleOpen(id) {
    setActiveId(id);
    setView('edit');
  }

  const activeReport = reports.find(r => r.id === activeId);

  return (
    <div className="app">
      {view === 'list' && (
        <ReportList
          reports={reports}
          onOpen={handleOpen}
          onCreate={() => setView('create')}
          onDelete={handleDelete}
        />
      )}

      {view === 'create' && (
        <div className="centered-form">
          <ReportForm
            onSave={handleCreate}
            onCancel={() => setView('list')}
          />
        </div>
      )}

      {view === 'edit' && activeReport && (
        <ReportEditor
          report={activeReport}
          onSave={handleSave}
          onBack={() => setView('list')}
        />
      )}
    </div>
  );
}
