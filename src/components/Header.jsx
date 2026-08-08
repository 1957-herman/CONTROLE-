import { useState } from 'react';
import { NAV_LINKS } from '../data/content';
import { MenuIcon, CloseIcon } from './icons';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        <a href="#inicio" className="logo" onClick={() => setOpen(false)}>
          TRI<span>AREA</span>
        </a>

        <nav className={`nav ${open ? 'nav-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contactos" className="btn btn-primary nav-cta" onClick={() => setOpen(false)}>
            Pedir orçamento
          </a>
        </nav>

        <button
          className="nav-toggle"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  );
}
