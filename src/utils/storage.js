const STORAGE_KEY = 'photo_reports_v1';

export function loadReports() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveReports(reports) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reports));
}

export function deleteReport(id) {
  const reports = loadReports().filter(r => r.id !== id);
  saveReports(reports);
  return reports;
}
