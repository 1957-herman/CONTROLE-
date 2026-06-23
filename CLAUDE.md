# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Relatório Fotográfico** — a Brazilian Portuguese PWA for creating professional photo reports and exporting them as PDF files. The entire UI and all PDF output is in Portuguese (pt-BR).

## Commands

```bash
npm install        # install dependencies
npm run dev        # start dev server (Vite HMR)
npm run build      # production build
npm run preview    # preview the production build locally
npm run lint       # run Oxlint
```

There is no test suite configured.

## Architecture

### View-state routing (no router library)

`App.jsx` controls which screen is shown via a `view` state variable (`'list'` | `'create'` | `'edit'`) and an `activeId`. There is no React Router or similar — navigation is purely state-driven with prop callbacks.

### Data model

All report data lives in `localStorage` under the key `photo_reports_v1`. The `src/utils/storage.js` module owns all reads and writes. Each report object has this shape:

```js
{
  id: string,           // crypto.randomUUID()
  client: string,
  project: string,
  location: string,
  date: string,         // ISO date (YYYY-MM-DD)
  reference: string,
  company: string,
  layout: '4' | '6',   // photos per PDF page
  photos: [{ id, dataUrl, caption, name }],
  createdAt: string,    // ISO datetime
}
```

Photos are stored as base64 `dataUrl` strings directly in localStorage — there is no server or file system involved. Maximum 24 photos per report.

### PDF generation

`src/utils/pdfGenerator.js` uses **jsPDF directly** (not html2canvas) to draw the PDF programmatically. It renders an A4 page with a blue header (`#1e4078`) containing report metadata, a footer with timestamp and company name, and a grid of photos in either 2×2 (4 photos) or 3×2 (6 photos) layout. Each photo cell includes the `dataUrl` image and a caption bar below it.

### Component tree

```
App
├── InstallPrompt          — PWA install banner (beforeinstallprompt)
├── ReportList             — card grid of saved reports; handles open/delete
├── ReportForm             — create/edit report metadata (client, project, layout…)
└── ReportEditor           — active report editor
    ├── ReportForm (modal) — edit metadata inline
    └── PhotoGrid          — add/remove/reorder photos, edit captions, trigger PDF export
```

`ReportEditor` holds local copies of `meta` and `photos` in state, calls `onSave` after every change (auto-save), and delegates PDF generation to `pdfGenerator.js`.

### Utilities

- `src/utils/storage.js` — `loadReports` / `saveReports` / `deleteReport` (localStorage)
- `src/utils/pdfGenerator.js` — `generatePDF(report)` async, triggers browser download
- `src/utils/captions.js` — pool of 24 Portuguese construction-site auto-captions; `getAutoCaption(index)` cycles through them

### PWA

Configured via `vite-plugin-pwa` in `vite.config.js`. The service worker uses Workbox with `autoUpdate` registration. Icons are in `public/icons/`. The manifest language is `pt-BR`, theme color `#1e4078`.

## Tech stack

- **React 19** (JSX, no TypeScript)
- **Vite 8** with `@vitejs/plugin-react` (uses Oxc transform)
- **jsPDF 4** for PDF generation
- **vite-plugin-pwa / Workbox** for PWA support
- **Oxlint** for linting (config in `.oxlintrc.json`; enforces `react/rules-of-hooks`)
- No state management library — plain `useState` with prop drilling
- No routing library — view state managed manually in `App.jsx`
