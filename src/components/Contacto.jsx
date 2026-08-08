import { useState } from 'react';
import { CONTACT, SERVICES } from '../data/content';
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon, WhatsAppIcon } from './icons';

export default function Contacto() {
  const [form, setForm] = useState({ nome: '', contacto: '', servico: SERVICES[0].title, mensagem: '' });

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = `Pedido de orçamento — ${form.servico}`;
    const body =
      `Nome: ${form.nome}\n` +
      `Contacto: ${form.contacto}\n` +
      `Serviço: ${form.servico}\n\n` +
      `Mensagem:\n${form.mensagem}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section id="contactos" className="section contactos">
      <div className="section-inner contactos-grid">
        <div className="contact-info">
          <p className="section-tag">Contactos</p>
          <h2>Vamos falar sobre o seu projecto</h2>
          <p className="section-lead">
            Envie os seus dados ou contacte-nos directamente pelos canais abaixo.
          </p>

          <ul className="contact-list">
            <li>
              <PhoneIcon size={20} />
              <div>
                <strong>Telefone</strong>
                <a href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`}>{CONTACT.phone}</a>
              </div>
            </li>
            <li>
              <WhatsAppIcon size={20} />
              <div>
                <strong>WhatsApp</strong>
                <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer">
                  {CONTACT.whatsappDisplay}
                </a>
              </div>
            </li>
            <li>
              <MailIcon size={20} />
              <div>
                <strong>Email</strong>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </div>
            </li>
            <li>
              <MapPinIcon size={20} />
              <div>
                <strong>Localização</strong>
                <span>{CONTACT.location}</span>
              </div>
            </li>
            <li>
              <ClockIcon size={20} />
              <div>
                <strong>Horário</strong>
                <span>{CONTACT.hours}</span>
              </div>
            </li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              Nome
              <input type="text" required value={form.nome} onChange={update('nome')} placeholder="O seu nome" />
            </label>
            <label>
              Telefone ou email
              <input type="text" required value={form.contacto} onChange={update('contacto')} placeholder="Como podemos responder" />
            </label>
          </div>

          <label>
            Serviço de interesse
            <select value={form.servico} onChange={update('servico')}>
              {SERVICES.map((s) => (
                <option key={s.id} value={s.title}>{s.title}</option>
              ))}
            </select>
          </label>

          <label>
            Mensagem
            <textarea
              required
              rows={4}
              value={form.mensagem}
              onChange={update('mensagem')}
              placeholder="Descreva brevemente o seu projecto"
            />
          </label>

          <button type="submit" className="btn btn-primary btn-lg">Enviar pedido</button>
        </form>
      </div>
    </section>
  );
}
