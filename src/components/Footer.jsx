import { NAV_LINKS, CONTACT } from '../data/content';
import { FacebookIcon, InstagramIcon, LinkedinIcon, WhatsAppIcon } from './icons';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="section-inner footer-grid">
        <div>
          <a href="#inicio" className="logo footer-logo">TRI<span>AREA</span></a>
          <p>Instalações fotovoltaicas, construção civil e serviços numa só equipa.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><FacebookIcon size={18} /></a>
            <a href="#" aria-label="Instagram"><InstagramIcon size={18} /></a>
            <a href="#" aria-label="LinkedIn"><LinkedinIcon size={18} /></a>
            <a href={`https://wa.me/${CONTACT.whatsapp}`} aria-label="WhatsApp" target="_blank" rel="noreferrer">
              <WhatsAppIcon size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4>Navegação</h4>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}><a href={link.href}>{link.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contactos</h4>
          <ul>
            <li>{CONTACT.phone}</li>
            <li>{CONTACT.email}</li>
            <li>{CONTACT.location}</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Triarea. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
