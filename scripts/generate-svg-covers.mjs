/**
 * Generate premium, on-brand SVG cover art for every newsroom + insight post.
 * No external API required — deterministic, crisp, tiny, and fast.
 *
 *   node scripts/generate-svg-covers.mjs
 *
 * Output: public/blog/<slug>.svg  (1456x816, ~16:9)
 *
 * Each post gets a distinct abstract motif (gold on deep navy) matching its
 * topic. Swap to photoreal AI later via scripts/generate-blog-images.mjs.
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = resolve(ROOT, 'public/blog');

const W = 1456;
const H = 816;
const CX = W / 2;
const CY = H / 2;
const GOLD = '#e1c068';
const GOLD2 = '#c1922a';

/** Shared premium background: navy gradient, glow, rings, dot grid. */
function chrome(inner) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#1a2c48"/>
      <stop offset="0.55" stop-color="#0a1422"/>
      <stop offset="1" stop-color="#060d17"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.72" cy="0.28" r="0.6">
      <stop offset="0" stop-color="${GOLD}" stop-opacity="0.20"/>
      <stop offset="1" stop-color="${GOLD}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="goldgrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${GOLD}"/>
      <stop offset="1" stop-color="${GOLD2}"/>
    </linearGradient>
    <pattern id="dots" width="26" height="26" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.4" fill="#ffffff" fill-opacity="0.05"/>
    </pattern>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#dots)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <g stroke="#ffffff" stroke-opacity="0.06" fill="none">
    <circle cx="${CX}" cy="${CY}" r="300"/>
    <circle cx="${CX}" cy="${CY}" r="220"/>
  </g>
  ${inner}
  <g opacity="0.9" transform="translate(64 ${H - 64})">
    <rect x="-2" y="-26" width="34" height="34" rx="8" fill="url(#goldgrad)"/>
    <path d="M6 0 V-18 a8 8 0 0 1 8 -8 h4 a7 7 0 0 1 0 14 h-6" fill="none" stroke="#0a1422" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <text x="46" y="-2" font-family="Georgia, serif" font-size="20" fill="#fbfaf6" font-weight="700">Pouch Care</text>
  </g>
</svg>`;
}

const G = (inner) =>
  `<g fill="none" stroke="url(#goldgrad)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" transform="translate(${CX} ${CY})">${inner}</g>`;

/** Per-slug motifs, centred on (0,0). */
const MOTIFS = {
  // Newsroom
  'pouch-care-international-incorporated': () =>
    G(`
      <rect x="-150" y="-40" width="300" height="20" rx="6" fill="url(#goldgrad)" stroke="none"/>
      <path d="M-150 -40 L0 -120 L150 -40 Z" stroke-width="6"/>
      ${[-110, -55, 0, 55, 110].map((x) => `<rect x="${x - 12}" y="-20" width="24" height="120" rx="4"/>`).join('')}
      <rect x="-160" y="100" width="320" height="20" rx="6" fill="url(#goldgrad)" stroke="none"/>
      <circle cx="0" cy="-70" r="10" fill="url(#goldgrad)" stroke="none"/>
    `),
  'pouch-care-expands-legal-foundation': () => {
    const nodes = [
      [0, 0],
      [-180, -90],
      [180, -90],
      [-200, 80],
      [200, 80],
      [-60, 130],
      [70, -150],
    ];
    const edges = nodes
      .slice(1)
      .map(([x, y]) => `<line x1="0" y1="0" x2="${x}" y2="${y}"/>`)
      .join('');
    const dots = nodes
      .map(
        ([x, y], i) =>
          `<circle cx="${x}" cy="${y}" r="${i === 0 ? 18 : 12}" fill="url(#goldgrad)" stroke="none"/>`,
      )
      .join('');
    return G(`${edges}${dots}`);
  },
  'verification-center-launched': () =>
    G(`
      <path d="M0 -140 L130 -95 V20 C130 110 70 150 0 175 C-70 150 -130 110 -130 20 V-95 Z"/>
      <path d="M-55 5 L-12 50 L70 -55" stroke-width="14"/>
    `),
  // Insights
  'building-a-verified-enterprise-in-bangladesh': () =>
    G(`
      ${[[-150, 60, 90], [-70, 20, 130], [10, -20, 170], [95, -70, 150]]
        .map(
          ([x, y, h]) =>
            `<rect x="${x}" y="${y}" width="48" height="${h}" rx="6"/>`,
        )
        .join('')}
      <path d="M-170 90 L150 -150" stroke-width="6"/>
      <path d="M150 -150 l-46 6 m46 -6 l-6 46" stroke-width="6"/>
    `),
  'fundamentals-of-compliant-import-export': () =>
    G(`
      <path d="M-220 40 A 240 240 0 0 1 220 40" stroke-dasharray="2 22" stroke-width="7"/>
      ${[[-150, 70], [-70, 95], [60, 95], [140, 70]]
        .map(
          ([x, y]) =>
            `<rect x="${x - 36}" y="${y - 6}" width="72" height="56" rx="6"/><line x1="${x}" y1="${y - 6}" x2="${x}" y2="${y + 50}"/>`,
        )
        .join('')}
      <circle cx="-220" cy="40" r="10" fill="url(#goldgrad)" stroke="none"/>
      <circle cx="220" cy="40" r="10" fill="url(#goldgrad)" stroke="none"/>
    `),
  'seo-as-a-compounding-business-asset': () =>
    G(`
      ${[[-150, 70, 70], [-70, 30, 110], [10, -20, 160], [95, -80, 220]]
        .map(
          ([x, y, h]) =>
            `<rect x="${x}" y="${y}" width="50" height="${h}" rx="6"/>`,
        )
        .join('')}
      <circle cx="120" cy="-120" r="58"/>
      <line x1="162" y1="-78" x2="210" y2="-30" stroke-width="12"/>
    `),
  'designing-trustworthy-ecommerce': () =>
    G(`
      <path d="M-170 -70 h340 l-30 70 h-280 Z"/>
      <line x1="-150" y1="0" x2="-150" y2="150"/>
      <line x1="150" y1="0" x2="150" y2="150"/>
      <line x1="-150" y1="150" x2="150" y2="150"/>
      <circle cx="-90" cy="150" r="16"/>
      <circle cx="90" cy="150" r="16"/>
      <path d="M-150 30 h300" stroke-dasharray="2 20"/>
    `),
  'it-ites-engineering-for-reliability': () =>
    G(`
      <rect x="-110" y="-110" width="220" height="220" rx="18"/>
      <circle cx="0" cy="0" r="40" fill="url(#goldgrad)" stroke="none"/>
      ${[[-110, -50], [-110, 0], [-110, 50], [110, -50], [110, 0], [110, 50], [-50, -110], [0, -110], [50, -110], [-50, 110], [0, 110], [50, 110]]
        .map(
          ([x, y]) =>
            `<line x1="${x}" y1="${y}" x2="${x < 0 ? x - 40 : x > 0 ? x + 40 : x}" y2="${y < -100 ? y - 40 : y > 100 ? y + 40 : y}"/><circle cx="${x < 0 ? x - 40 : x > 0 ? x + 40 : x}" cy="${y < -100 ? y - 40 : y > 100 ? y + 40 : y}" r="7" fill="url(#goldgrad)" stroke="none"/>`,
        )
        .join('')}
      <path d="M-150 -150 l-26 26 l26 26 M150 -150 l26 26 l-26 26" stroke-width="6"/>
    `),
  'sustainable-agro-value-chains': () =>
    `<g fill="none" stroke="url(#goldgrad)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" transform="translate(${CX} ${CY})">
      <path d="M0 150 V-20"/>
      <path d="M0 30 C -90 30 -120 -40 -120 -90 C -50 -90 0 -50 0 10 Z" fill="#2f9e6f" fill-opacity="0.18"/>
      <path d="M0 -20 C 80 -20 110 -80 110 -130 C 45 -130 0 -90 0 -40 Z" fill="url(#goldgrad)" fill-opacity="0.18"/>
      <path d="M-180 150 C -90 110 90 110 180 150" stroke-dasharray="2 20"/>
    </g>`,
};

async function main() {
  await mkdir(OUT, { recursive: true });
  let n = 0;
  for (const [slug, motif] of Object.entries(MOTIFS)) {
    const svg = chrome(motif());
    await writeFile(resolve(OUT, `${slug}.svg`), svg, 'utf8');
    console.log(`✓ ${slug}.svg`);
    n++;
  }
  console.log(`\nDone. ${n} cover(s) written to public/blog/.`);
}

main();
