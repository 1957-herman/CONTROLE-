function base(props) {
  return {
    width: props.size ?? 24,
    height: props.size ?? 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className: props.className,
  };
}

export function SunIcon(props) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2.5v3M12 18.5v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2.5 12h3M18.5 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
    </svg>
  );
}

export function BuildingIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M4 21V6.5L12 3l8 3.5V21" />
      <path d="M4 21h16" />
      <path d="M9 21v-5h6v5" />
      <path d="M9 10h1M14 10h1M9 14h1M14 14h1" />
    </svg>
  );
}

export function WrenchIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M14.7 6.3a3.5 3.5 0 1 0-4.9 4.9L3 18l3 3 6.8-6.8a3.5 3.5 0 0 0 4.9-4.9l-1.6 1.6-2-2z" />
    </svg>
  );
}

export function CheckIcon(props) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.3 12.3l2.4 2.4 5-5" />
    </svg>
  );
}

export function ShieldIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M12 3l7 3v5.2c0 4.4-3 8-7 9.8-4-1.8-7-5.4-7-9.8V6z" />
      <path d="M9 12.2l2.2 2.2 3.8-4" />
    </svg>
  );
}

export function ClockIcon(props) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3.2 2" />
    </svg>
  );
}

export function SupportIcon(props) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3.6" />
      <path d="M5.6 5.6l3 3M18.4 5.6l-3 3M5.6 18.4l3-3M18.4 18.4l-3-3" />
    </svg>
  );
}

export function PhoneIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M6.6 3.5l3 .6.9 3.5-2 1.8a12.5 12.5 0 0 0 5.7 5.7l1.8-2 3.5.9.6 3a2 2 0 0 1-2 2.4C11.4 19.9 4.1 12.6 3.6 5.9a2 2 0 0 1 3-2.4z" />
    </svg>
  );
}

export function MailIcon(props) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 6.5l8 6 8-6" />
    </svg>
  );
}

export function MapPinIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M12 21s7-6.6 7-11.5A7 7 0 0 0 5 9.5C5 14.4 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  );
}

export function WhatsAppIcon(props) {
  return (
    <svg {...base(props)} fill="currentColor" stroke="none">
      <path d="M12 2.5A9.5 9.5 0 0 0 3.9 17l-1 3.6 3.7-1a9.5 9.5 0 1 0 5.4-17.1zm5.5 13.5c-.2.6-1.3 1.2-1.8 1.3-.5.1-1 .1-1.6-.1-.4-.1-.9-.3-1.5-.6-2.7-1.2-4.4-3.9-4.6-4.1-.1-.2-1.1-1.4-1.1-2.7s.7-1.9 1-2.2c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.5.7 1.7.8 1.8.1.2.1.4 0 .6-.4.7-.8 1-1 1.2-.2.2-.2.4-.1.6.5.9 1.2 1.7 1.9 2.3.9.7 1.6 1 1.9 1.1.2.1.4.1.6-.1.3-.3.7-1 .9-1.3.2-.3.4-.3.6-.2l1.7.8c.2.1.4.2.4.4.1.3.1.7-.1 1.1z" />
    </svg>
  );
}

export function FacebookIcon(props) {
  return (
    <svg {...base(props)} fill="currentColor" stroke="none">
      <path d="M13.5 21v-7.2h2.4l.4-2.8h-2.8V9.1c0-.8.2-1.4 1.4-1.4h1.5V5.1C15.9 5 15 5 14 5c-2.4 0-4 1.4-4 4v2h-2.4v2.8H10V21z" />
    </svg>
  );
}

export function InstagramIcon(props) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon(props) {
  return (
    <svg {...base(props)} fill="currentColor" stroke="none">
      <rect x="3" y="3" width="18" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M7.3 10v7M7.3 7.3v.1M11 10v7M11 13c0-1.7 1-3 2.6-3s2.4 1.1 2.4 3v4" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function ChevronRightIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}

export function MenuIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M4 6.5h16M4 12h16M4 17.5h16" />
    </svg>
  );
}

export function CloseIcon(props) {
  return (
    <svg {...base(props)}>
      <path d="M5 5l14 14M19 5L5 19" />
    </svg>
  );
}
