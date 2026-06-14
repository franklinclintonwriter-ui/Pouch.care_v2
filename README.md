# Pouch Care International Ltd. — Enterprise Website

`pouch-care-enterprise-web`

A premium, enterprise-grade corporate website for **Pouch Care International Ltd.**, a Bangladesh-incorporated private company limited by shares (Companies Act, 1994 · Certificate No. **C-202769/2025** · incorporated **18 June 2025**).

The site presents the company as a serious, diversified international business group across technology, trade, commerce, agriculture, and consultancy — with a **privacy-first verification system** that never exposes sensitive personal or document-level data.

**Live preview:** https://pouch-care.pages.dev (Cloudflare Pages)

---

## ✨ Highlights

- **27+ routes** covering company, business divisions, verification, leadership, governance, investor relations, newsroom, insights, careers, contact, and legal pages.
- **Public-safe Verification Center** with redacted document previews, masked sensitive fields, status badges, and a document registry.
- **Premium design system** — deep navy + gold + emerald palette, glassmorphism accents, Framer Motion micro-interactions, dark-mode support.
- **SEO-complete** — per-page metadata, OpenGraph/Twitter cards, canonical URLs, dynamic OG images, JSON-LD (Organization, WebSite, BreadcrumbList, Article, Person), dynamic `sitemap.xml` + `robots.txt`.
- **Fully responsive** from 320px to ultrawide, **accessible** (WCAG-aligned, keyboard nav, focus states, reduced-motion), and **fast** (CSS gradients over images, optimized fonts, minimal JS).
- **Tested** — Vitest unit/component tests + Playwright E2E + GitHub Actions CI.

---

## 🧱 Tech Stack

| Area       | Choice                                          |
| ---------- | ----------------------------------------------- |
| Framework  | Next.js 14 (App Router)                         |
| Language   | TypeScript (strict, `noUncheckedIndexedAccess`) |
| Styling    | Tailwind CSS + shadcn-style tokens              |
| Animation  | Framer Motion                                   |
| Icons      | Lucide React                                    |
| Fonts      | `next/font` — Inter (sans) + Fraunces (serif)   |
| Unit tests | Vitest + Testing Library                        |
| E2E tests  | Playwright                                      |
| Quality    | ESLint + Prettier                               |
| CI/CD      | GitHub Actions + Cloudflare Pages               |

---

## 🚀 Setup

```bash
# 1. Install dependencies
npm install

# 2. Configure environment
cp .env.example .env.local   # then edit values

# 3. Start the dev server
npm run dev                  # http://localhost:3000
```

Requires **Node.js 20+**.

---

## 📜 Commands

| Command                 | Description                                    |
| ----------------------- | ---------------------------------------------- |
| `npm run dev`           | Start the dev server                           |
| `npm run build`         | Production build                               |
| `npm run start`         | Serve the production build                     |
| `npm run typecheck`     | TypeScript check (no emit)                     |
| `npm run lint`          | ESLint                                         |
| `npm run format`        | Prettier write                                 |
| `npm run format:check`  | Prettier check (CI)                            |
| `npm test`              | Vitest unit/component tests                    |
| `npm run test:e2e`      | Playwright E2E (builds + serves automatically) |
| `npm run pages:build`   | Build for Cloudflare Pages (next-on-pages)     |
| `npm run pages:preview` | Build + preview the Pages build locally        |
| `npm run pages:deploy`  | Build + deploy to Cloudflare Pages             |

> First E2E run: `npx playwright install --with-deps chromium`.

---

## 📁 Folder Structure

```
src/
├── app/                      # App Router routes
│   ├── layout.tsx            # Root layout (fonts, header/footer, JSON-LD)
│   ├── page.tsx              # Homepage
│   ├── about/ verification/ documents/
│   ├── business/             # + [slug] division pages
│   ├── leadership/           # + [slug] leader profiles
│   ├── newsroom/ insights/   # + [slug] article pages
│   ├── governance/ investor-relations/ careers/ contact/
│   ├── privacy-policy/ terms/ accessibility/ sitemap/
│   ├── api/og/               # Dynamic OpenGraph image (edge)
│   ├── robots.ts             # robots.txt (edge)
│   ├── sitemap.ts            # sitemap.xml (edge)
│   └── not-found.tsx
├── components/               # layout, sections, cards, documents, forms, brand, theme, seo, ui
├── data/                     # Typed content models (see below)
└── lib/                      # types, utils, seo, site, validation
tests-e2e/                    # Playwright specs
```

---

## 🗂️ Data Architecture

All content lives in typed modules under `src/data/`, with interfaces in `src/lib/types.ts`:

| File            | Type                          |
| --------------- | ----------------------------- |
| `company.ts`    | `CompanyProfile`              |
| `documents.ts`  | `LegalDocument`               |
| `divisions.ts`  | `BusinessDivision`            |
| `leadership.ts` | `LeaderProfile`               |
| `timeline.ts`   | `TimelineItem`                |
| `stats.ts`      | `StatItem`                    |
| `nav.ts`        | `NavGroup` / `NavigationItem` |
| `news.ts`       | `NewsPost`                    |
| `insights.ts`   | `InsightPost`                 |
| `faqs.ts`       | `FaqItem`                     |

---

## 🔐 Privacy & Document Redaction Policy

> **This is a hard requirement, not a guideline.**

The public site **must never** expose: full NID / passport numbers; personal phone numbers or emails; full private/home addresses; signatures, official seals, QR / verification codes; witness information, personal tax IDs; or **unredacted legal document scans**.

### How this is enforced

- **No raw scans in `/public`.** Raw documents are **private admin/source files only**. `/private`, `/source-documents`, and `*.raw.pdf` are git-ignored.
- **Metadata-only data model.** `LegalDocument` carries public-safe metadata, a `publicSummary`, an explicit list of **`disclosedFields`** (shown), and **`maskedFields`** (acknowledged but redacted).
- **Redacted previews.** `RedactedDocumentPreview` renders a _stylised_ representation with masked bars — it never loads a real scan.
- **Tested guarantees.** `src/data/documents.test.ts` asserts no sensitive field labels/values leak into `disclosedFields`, and every record declares `maskedFields`.
- **Crawler protection.** `robots.ts` disallows `/private/`.

**Before adding any document:** redact the source, extract only public-safe metadata, and add a record (never the file).

---

## ✍️ Content Update Guides

### Add a new trade license / legal document

Append a `LegalDocument` to `src/data/documents.ts` (public-safe metadata, `disclosedFields`, and `maskedFields` only). It automatically appears on `/documents`, `/verification`, and in `sitemap.xml`. Set `statusIsDateDependent: true` with a `validUntil` to auto-flag renewals. **Never** reference a raw file path.

### Add a new business division

Append a `BusinessDivision` to `src/data/divisions.ts` (the `icon` must be registered in `src/components/ui/icon.tsx`). The `/business/<slug>` page, nav mega-menu, and sitemap update automatically.

### Add a newsroom post / insight article

Append a `NewsPost` to `src/data/news.ts` or an `InsightPost` to `src/data/insights.ts` (`body` is an array of paragraphs). Pages, listings, related posts, `Article` JSON-LD, and sitemap update automatically.

### Add / edit a leader

Edit `src/data/leadership.ts`. Keep profiles **public-safe** — role, message, focus areas, responsibilities only. No private personal data.

---

## 🌍 Environment Variables

See `.env.example`. None are required for local dev (sensible defaults apply).

| Variable                    | Purpose                                             |
| --------------------------- | --------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`      | Canonical URL for metadata, sitemap, canonical tags |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Public display email (optional)                     |
| `CONTACT_FORM_ENDPOINT`     | Optional endpoint to enable real form submissions   |
| `NEXT_PUBLIC_ANALYTICS_ID`  | Optional analytics id                               |

**Never commit secrets.** Only `.env.example` is tracked.

---

## ☁️ Deployment — Cloudflare Pages (primary)

This project deploys to **Cloudflare Pages** via the `@cloudflare/next-on-pages` adapter (mostly-static output; the OG image, sitemap, and robots run on the Edge runtime). Configuration lives in `wrangler.toml` (project `pouch-care`, `nodejs_compat`).

### Automated (GitHub Actions)

`.github/workflows/deploy-pages.yml` deploys on every push to `main` (and via manual **workflow_dispatch**). It requires two **repository secrets**:

| Secret       | Value                                             |
| ------------ | ------------------------------------------------- |
| `CF_API_KEY` | Cloudflare **API token** (Account → Pages → Edit) |
| `CF_ACC_ID`  | Cloudflare **Account ID**                         |

Add them under **Settings → Secrets and variables → Actions**. (Use a scoped API token — never the Global API Key.)

### Manual (local)

```bash
export CLOUDFLARE_API_TOKEN=<scoped-token>
export CLOUDFLARE_ACCOUNT_ID=<account-id>
npm run pages:deploy
```

### Custom domain (`pouch.care`)

In the Cloudflare dashboard → **Workers & Pages → pouch-care → Custom domains → Set up a domain** → add `pouch.care` (and `www.pouch.care`). The domain must be a zone in the same account; Cloudflare adds the DNS records automatically.

### Vercel (alternative)

The app is a standard Next.js project and also deploys to Vercel with zero config — import the repo and set `NEXT_PUBLIC_SITE_URL`.

---

## ♿ Accessibility & Performance

- Semantic landmarks, single `<h1>` per page, logical heading order.
- Keyboard-navigable mega menu + mobile drawer, visible focus rings, skip link.
- `prefers-reduced-motion` fully respected (animations disabled).
- WCAG-aware contrast; form fields have labels, `aria-invalid`, and inline errors.
- Decorative visuals use CSS gradients (no heavy hero images); fonts via `next/font` with `display: swap`.

---

## ✅ Testing

```bash
npm test            # Vitest: validation helpers, StatusBadge, documents, nav
npm run test:e2e    # Playwright: homepage, nav (desktop + mobile), verification,
                    # documents table, division/leadership/article routes,
                    # contact-form validation, sitemap/robots
```

CI (`.github/workflows/ci.yml`) runs typecheck, lint, unit tests, Prettier check, production build, and Playwright E2E on every push/PR.

---

## ⚠️ Content Integrity Note

Forward-looking statements (divisions, roadmaps, investor materials) are presented as **planned / roadmap**, not current results. The site intentionally **does not** claim revenue, clients, funding, offices, partnerships, awards, or international operations that are not verified.

---

© Pouch Care International Ltd. All rights reserved.
