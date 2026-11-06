# FISARQ — Website Institucional

Website institucional da FISARQ (arquitetura, engenharia, design e gestão de projetos).

**Stack:** Next.js 16 (App Router, TypeScript) · Tailwind CSS v4 · Motion (framer-motion) · Zod · lucide-react

## Arranque

```bash
cd fisarq-website
cp .env.example .env.local   # ajustar valores
npm install
npm run dev                  # http://localhost:3000
npm run build && npm start   # produção
```

## Estrutura

```
fisarq-website/
├── public/images/            # hero.svg + projects/*.svg (placeholders → substituir por fotos reais)
├── src/
│   ├── app/
│   │   ├── layout.tsx         # fontes (Inter + Plus Jakarta Sans), metadata SEO, JSON-LD, skip link
│   │   ├── page.tsx           # composição das secções da homepage
│   │   ├── globals.css        # design system (@theme: antracite, stone, bronze)
│   │   ├── api/contact/route.ts  # endpoint do formulário (validação, rate limit, honeypot, Resend)
│   │   ├── privacidade/page.tsx  # política de privacidade (Lei n.º 22/11 — Angola)
│   │   ├── sitemap.ts · robots.ts · manifest.ts · opengraph-image.tsx · icon.svg · not-found.tsx
│   ├── components/
│   │   ├── layout/            # Navbar (sticky, menu móvel, secção ativa) · Footer
│   │   ├── sections/          # Hero · About · Services · Stats · Portfolio · Contact · ContactForm
│   │   └── ui/                # Button · Logo · SectionHeading · Reveal (animação on-scroll)
│   └── lib/
│       ├── site.ts            # dados institucionais e navegação (fonte única)
│       ├── validation.ts      # esquema Zod partilhado cliente/servidor
│       └── data/              # services.ts · projects.ts · stats.ts
```

## Conteúdo

Todo o conteúdo editável está em `src/lib/site.ts` e `src/lib/data/*`. Contactos, morada, estatísticas,
parceiros e projetos são **valores de exemplo** — substituir pelos reais antes de publicar.

## Formulário de contacto

`POST /api/contact` valida com o mesmo esquema Zod do cliente, aplica rate limit por IP (5 pedidos / 10 min,
em memória) e honeypot anti-spam. Se `RESEND_API_KEY`, `CONTACT_TO_EMAIL` e `CONTACT_FROM_EMAIL` estiverem
definidos, envia e-mail via Resend; caso contrário regista o pedido no log do servidor.

## SEO e acessibilidade

- Metadata API (title template, canonical, Open Graph, Twitter), `sitemap.xml`, `robots.txt`, manifest, imagem OG gerada.
- Dados estruturados `ProfessionalService` (schema.org).
- HTML semântico (`header/nav/main/section/article/address/footer`), `lang="pt-AO"`, hierarquia de headings.
- Skip link, `focus-visible`, `aria-current`, `aria-expanded`, `aria-pressed`, `aria-live`, erros ligados por `aria-describedby`.
- Respeita `prefers-reduced-motion`.

## Deploy

Recomendado: Vercel (suporta a API route). Definir `NEXT_PUBLIC_SITE_URL` e as variáveis de e-mail.
