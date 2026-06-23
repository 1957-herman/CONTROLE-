import { useState, useEffect } from 'react';

export default function InstallPrompt() {
  const [prompt, setPrompt] = useState(null);
  const [visible, setVisible] = useState(false);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const handler = e => {
      e.preventDefault();
      setPrompt(e);
      setVisible(true);
    };
    window.addEventListener('beforeinstallprompt', handler);
    window.addEventListener('appinstalled', () => setInstalled(true));
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  if (installed || !visible) return null;

  async function handleInstall() {
    if (!prompt) return;
    prompt.prompt();
    const { outcome } = await prompt.userChoice;
    if (outcome === 'accepted') setInstalled(true);
    setVisible(false);
  }

  return (
    <div className="install-banner">
      <span className="install-icon">📲</span>
      <div className="install-text">
        <strong>Instalar app</strong>
        <span>Use offline, direto da tela inicial</span>
      </div>
      <div className="install-actions">
        <button className="btn-install" onClick={handleInstall}>Instalar</button>
        <button className="btn-dismiss" onClick={() => setVisible(false)}>✕</button>
      </div>
    </div>
  );
}
