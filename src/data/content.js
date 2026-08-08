export const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como trabalhamos', href: '#processo' },
  { label: 'Projectos', href: '#projectos' },
  { label: 'Contactos', href: '#contactos' },
];

export const SERVICES = [
  {
    id: 'fotovoltaico',
    icon: 'sun',
    title: 'Instalações Fotovoltaicas',
    description:
      'Projectamos e instalamos sistemas solares fotovoltaicos on-grid, off-grid e híbridos, adaptados ao consumo real de cada cliente.',
    items: [
      'Estudo energético e dimensionamento do sistema',
      'Instalação de painéis, inversores e baterias',
      'Sistemas híbridos com autonomia em caso de corte',
      'Manutenção preventiva e monitorização remota',
    ],
  },
  {
    id: 'construcao',
    icon: 'building',
    title: 'Construção Civil',
    description:
      'Executamos obras de construção e reabilitação com foco em qualidade, prazos e segurança, do projecto à entrega da chave.',
    items: [
      'Construção de raiz residencial e comercial',
      'Remodelações e ampliações',
      'Infra-estruturas eléctricas e hidráulicas',
      'Acompanhamento técnico e fiscalização de obra',
    ],
  },
  {
    id: 'servicos',
    icon: 'wrench',
    title: 'Serviços Gerais e Manutenção',
    description:
      'Damos suporte contínuo às instalações fotovoltaicas e civis, garantindo que tudo continua a funcionar como esperado.',
    items: [
      'Manutenção eléctrica preventiva e correctiva',
      'Assistência técnica e reparações',
      'Vistorias e relatórios técnicos',
      'Contratos de manutenção periódica',
    ],
  },
];

export const DIFERENCIAIS = [
  {
    icon: 'check',
    title: 'Equipa qualificada',
    text: 'Técnicos com experiência em energia solar e construção civil, preparados para cada tipo de projecto.',
  },
  {
    icon: 'shield',
    title: 'Garantia nos trabalhos',
    text: 'Materiais de qualidade e garantia sobre equipamentos e mão-de-obra em todos os projectos.',
  },
  {
    icon: 'clock',
    title: 'Orçamento sem compromisso',
    text: 'Visita técnica e proposta detalhada antes de qualquer decisão da sua parte.',
  },
  {
    icon: 'support',
    title: 'Acompanhamento pós-obra',
    text: 'Continuamos disponíveis depois da entrega, com manutenção programada quando necessário.',
  },
];

export const PROCESSO = [
  { n: '01', title: 'Contacto inicial', text: 'Conta-nos o que precisas — fotovoltaico, obra ou manutenção.' },
  { n: '02', title: 'Visita técnica', text: 'Avaliamos o local e as necessidades reais do projecto.' },
  { n: '03', title: 'Proposta detalhada', text: 'Enviamos um orçamento claro, com prazos e materiais definidos.' },
  { n: '04', title: 'Execução', text: 'A nossa equipa executa o trabalho com acompanhamento constante.' },
  { n: '05', title: 'Entrega e manutenção', text: 'Entregamos o projecto pronto e ficamos disponíveis para manutenção.' },
];

export const PROJECT_CATEGORIES = [
  { icon: 'sun', label: 'Fotovoltaico' },
  { icon: 'building', label: 'Construção civil' },
  { icon: 'wrench', label: 'Serviços' },
];

export const CONTACT = {
  phone: '+244 922 915 151',
  whatsapp: '244922915151',
  whatsappDisplay: '+244 922 915 151',
  email: 'geral@triarea.co.ao',
  location: 'Luanda, Angola',
  hours: 'Segunda a Sábado, 08h00 – 17h00',
};
