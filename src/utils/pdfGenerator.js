import jsPDF from 'jspdf';

const A4_W = 210;
const A4_H = 297;
const MARGIN = 12;
const HEADER_H = 36;
const FOOTER_H = 10;

function drawHeader(doc, report, pageNum, totalPages) {
  doc.setFillColor(30, 64, 120);
  doc.rect(0, 0, A4_W, HEADER_H, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.text('RELATÓRIO FOTOGRÁFICO', MARGIN, 10);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  const col2 = A4_W / 2;

  doc.text(`Cliente: ${report.client}`, MARGIN, 17);
  doc.text(`Obra: ${report.project}`, MARGIN, 23);
  doc.text(`Localidade: ${report.location}`, MARGIN, 29);

  doc.text(`Data: ${report.date}`, col2, 17);
  doc.text(`Ref.: ${report.reference || '—'}`, col2, 23);
  doc.text(`Página ${pageNum} / ${totalPages}`, col2, 29);

  doc.setTextColor(0, 0, 0);
}

function drawFooter(doc, report) {
  const y = A4_H - FOOTER_H;
  doc.setDrawColor(180, 180, 180);
  doc.setLineWidth(0.3);
  doc.line(MARGIN, y, A4_W - MARGIN, y);
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(7);
  doc.setTextColor(120, 120, 120);
  doc.text(`Relatório gerado em ${new Date().toLocaleString('pt-BR')}`, MARGIN, y + 4);
  if (report.company) {
    doc.text(report.company, A4_W - MARGIN, y + 4, { align: 'right' });
  }
  doc.setTextColor(0, 0, 0);
}

export async function generatePDF(report) {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });

  const photosPerPage = report.layout === '4' ? 4 : 6;
  const pages = [];
  for (let i = 0; i < report.photos.length; i += photosPerPage) {
    pages.push(report.photos.slice(i, i + photosPerPage));
  }
  const totalPages = pages.length;

  for (let pi = 0; pi < pages.length; pi++) {
    if (pi > 0) doc.addPage();
    const pagePhotos = pages[pi];

    drawHeader(doc, report, pi + 1, totalPages);
    drawFooter(doc, report);

    const cols = photosPerPage === 4 ? 2 : 3;
    const rows = photosPerPage === 4 ? 2 : 2;

    const usableW = A4_W - MARGIN * 2;
    const usableH = A4_H - HEADER_H - FOOTER_H - MARGIN * 2 - 6;

    const cellW = (usableW - (cols - 1) * 4) / cols;
    const captionH = 8;
    const cellH = (usableH - (rows - 1) * 4) / rows;
    const imgH = cellH - captionH - 1;

    for (let idx = 0; idx < pagePhotos.length; idx++) {
      const photo = pagePhotos[idx];
      const col = idx % cols;
      const row = Math.floor(idx / cols);
      const x = MARGIN + col * (cellW + 4);
      const y = HEADER_H + MARGIN + row * (cellH + 4);

      // border
      doc.setDrawColor(200, 200, 200);
      doc.setLineWidth(0.3);
      doc.rect(x, y, cellW, cellH);

      // image
      if (photo.dataUrl) {
        try {
          const format = photo.dataUrl.startsWith('data:image/png') ? 'PNG' : 'JPEG';
          doc.addImage(photo.dataUrl, format, x + 0.5, y + 0.5, cellW - 1, imgH - 1, undefined, 'FAST');
        } catch {
          doc.setFillColor(240, 240, 240);
          doc.rect(x + 0.5, y + 0.5, cellW - 1, imgH - 1, 'F');
          doc.setFontSize(8);
          doc.setTextColor(150, 150, 150);
          doc.text('Erro ao carregar imagem', x + cellW / 2, y + imgH / 2, { align: 'center' });
          doc.setTextColor(0, 0, 0);
        }
      } else {
        doc.setFillColor(240, 240, 240);
        doc.rect(x + 0.5, y + 0.5, cellW - 1, imgH - 1, 'F');
      }

      // caption background
      doc.setFillColor(245, 245, 245);
      doc.rect(x, y + imgH, cellW, captionH, 'F');

      // caption text
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7);
      doc.setTextColor(40, 40, 40);
      const photoNum = pi * photosPerPage + idx + 1;
      const caption = photo.caption
        ? `${photoNum}. ${photo.caption}`
        : `Foto ${photoNum}`;
      const lines = doc.splitTextToSize(caption, cellW - 2);
      doc.text(lines[0], x + 1, y + imgH + 5);
      doc.setTextColor(0, 0, 0);
    }
  }

  doc.save(`relatorio-fotografico-${report.reference || Date.now()}.pdf`);
}
