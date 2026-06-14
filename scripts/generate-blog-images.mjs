/**
 * Generate premium, on-brand cover images for every newsroom + insight post
 * using OpenAI's flagship image model (gpt-image-1), then optimise to WebP.
 *
 * Usage:
 *   OPENAI_API_KEY=sk-... node scripts/generate-blog-images.mjs [--force]
 *
 * Output: public/blog/<slug>.webp  (1456x816, ~16:9)
 *
 * Notes:
 * - Prompts are abstract/conceptual and on-brand (deep navy + gold), with no
 *   text, no logos, and no real people — safe, premium, and reusable.
 * - Idempotent: skips slugs whose image already exists unless --force.
 */
import { mkdir, writeFile, access } from 'node:fs/promises';
import { constants } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const OUT_DIR = resolve(ROOT, 'public/blog');

const MODEL = 'gpt-image-1';
const SIZE = '1536x1024'; // landscape; downscaled to 1456px wide WebP
const FORCE = process.argv.includes('--force');

const API_KEY = process.env.OPENAI_API_KEY;
if (!API_KEY) {
  console.error('✘ OPENAI_API_KEY is not set. Aborting.');
  process.exit(1);
}

const STYLE =
  'Premium, editorial, enterprise corporate art. Deep midnight navy blue base ' +
  'with elegant gold accents and subtle emerald highlights. Abstract, ' +
  'sophisticated, minimal, high-end. Soft cinematic lighting, gentle gradients, ' +
  'fine geometric detail, generous negative space. No text, no words, no logos, ' +
  'no watermarks, no real human faces. Suitable as a website article cover.';

/** slug -> concept prompt */
const PROMPTS = {
  // Newsroom
  'pouch-care-international-incorporated':
    'A polished abstract representation of corporate incorporation and legal foundation — clean architectural pillars and a subtle official seal motif rendered in gold on navy.',
  'pouch-care-expands-legal-foundation':
    'An abstract network of interconnected nodes branching into diversified sectors — trade, technology, agriculture, commerce — as elegant gold filaments over deep navy.',
  'verification-center-launched':
    'A refined abstract concept of trust and verification — a luminous gold shield and check motif with layered translucent document cards, navy background.',
  // Insights
  'building-a-verified-enterprise-in-bangladesh':
    'An abstract premium skyline and rising growth lines symbolising a credible enterprise being built, gold light on midnight navy.',
  'fundamentals-of-compliant-import-export':
    'An abstract global trade concept — stylised shipping containers, dotted trade routes and a subtle globe arc in gold over deep navy.',
  'seo-as-a-compounding-business-asset':
    'An abstract concept of compounding digital growth — ascending layered bars and a magnifier search motif as elegant gold geometry on navy.',
  'designing-trustworthy-ecommerce':
    'An abstract trustworthy digital commerce concept — a sleek storefront and secure checkout cart motif in refined gold linework on navy.',
  'it-ites-engineering-for-reliability':
    'An abstract software reliability concept — clean circuitry, code brackets and modular blocks as precise gold geometry over deep navy.',
  'sustainable-agro-value-chains':
    'An abstract sustainable agriculture value chain — stylised sprouting plants and flowing supply lines in gold and subtle emerald over navy.',
};

async function exists(path) {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function loadSlugs() {
  // Read slugs straight from the data files without a TS build step.
  const { readFile } = await import('node:fs/promises');
  const files = ['src/data/news.ts', 'src/data/insights.ts'];
  const slugs = [];
  for (const f of files) {
    const src = await readFile(resolve(ROOT, f), 'utf8');
    for (const m of src.matchAll(/slug:\s*'([^']+)'/g)) slugs.push(m[1]);
  }
  return [...new Set(slugs)];
}

async function generateOne(slug) {
  const concept = PROMPTS[slug];
  if (!concept) {
    console.warn(`! No prompt for "${slug}" — skipping.`);
    return false;
  }
  const prompt = `${concept}\n\nStyle: ${STYLE}`;

  const res = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: MODEL,
      prompt,
      size: SIZE,
      n: 1,
      quality: 'high',
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`OpenAI error ${res.status}: ${text.slice(0, 400)}`);
  }

  const json = await res.json();
  const b64 = json.data?.[0]?.b64_json;
  if (!b64) throw new Error('No image data returned');
  const png = Buffer.from(b64, 'base64');

  // Optimise to WebP with sharp.
  const sharp = (await import('sharp')).default;
  const webp = await sharp(png)
    .resize(1456, 816, { fit: 'cover' })
    .webp({ quality: 80 })
    .toBuffer();

  const out = resolve(OUT_DIR, `${slug}.webp`);
  await writeFile(out, webp);
  console.log(`✓ ${slug}.webp (${(webp.length / 1024).toFixed(0)} KB)`);
  return true;
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const slugs = await loadSlugs();
  console.log(`Generating cover images for ${slugs.length} posts…\n`);

  let made = 0;
  for (const slug of slugs) {
    const out = resolve(OUT_DIR, `${slug}.webp`);
    if (!FORCE && (await exists(out))) {
      console.log(`• ${slug}.webp exists — skipping`);
      continue;
    }
    try {
      if (await generateOne(slug)) made++;
    } catch (err) {
      console.error(`✘ ${slug}: ${err.message}`);
    }
  }
  console.log(`\nDone. ${made} image(s) generated in public/blog/.`);
}

main();
