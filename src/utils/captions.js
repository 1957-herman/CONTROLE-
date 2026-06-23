const AUTO_CAPTIONS = [
  'Vista geral do local',
  'Detalhe da estrutura',
  'Área de trabalho',
  'Fachada principal',
  'Interior do ambiente',
  'Detalhe construtivo',
  'Acabamento superficial',
  'Vista lateral',
  'Cobertura',
  'Fundação exposta',
  'Instalações elétricas',
  'Instalações hidráulicas',
  'Alvenaria em execução',
  'Concretagem em andamento',
  'Revestimento aplicado',
  'Vista panorâmica',
  'Detalhe de fixação',
  'Esquadria instalada',
  'Pavimentação',
  'Área externa',
  'Sinalização de obra',
  'Equipamentos de segurança',
  'Materiais em estoque',
  'Ponto de medição',
];

export function getAutoCaption(index) {
  return AUTO_CAPTIONS[index % AUTO_CAPTIONS.length];
}

export function applyAutoCaptions(photos) {
  return photos.map((p, i) => ({
    ...p,
    caption: p.caption || getAutoCaption(i),
  }));
}
