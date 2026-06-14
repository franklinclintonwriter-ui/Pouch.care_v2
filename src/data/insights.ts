import type { InsightPost, InsightCategory } from '@/lib/types';

export const insightCategories: InsightCategory[] = [
  'Bangladesh Business',
  'Import & Export',
  'Digital Marketing',
  'E-commerce',
  'IT & ITES',
  'Agriculture',
  'Company Updates',
];

/** Insights / thought-leadership articles (polished placeholders). */
export const insights: InsightPost[] = [
  {
    slug: 'building-a-verified-enterprise-in-bangladesh',
    image: '/blog/building-a-verified-enterprise-in-bangladesh.svg',
    title: 'Building a verified enterprise in Bangladesh',
    excerpt:
      'Why verifiable incorporation, transparent documentation and privacy-first disclosure are the foundation of long-term business credibility.',
    category: 'Bangladesh Business',
    author: 'Pouch Care Insights',
    date: '2025-07-05',
    dateLabel: '05 July 2025',
    readingTime: '5 min read',
    body: [
      'Credibility is the scarcest currency in business. For a young enterprise, it is also the hardest to manufacture — and the easiest to lose. The most durable way to build it is not through claims, but through verifiable facts.',
      'For Bangladeshi companies, that begins with incorporation under the Companies Act, 1994 and registration with the RJSC. A certificate of incorporation establishes legal personality; the Memorandum & Articles of Association define what the company may do and how it is governed.',
      'But verification should not come at the cost of privacy. A modern approach publishes public-safe metadata and redacted previews, while protecting sensitive personal and document-level information. This is the model Pouch Care has adopted: transparent on what matters for trust, protective of what matters for safety.',
      'The result is a foundation that partners, investors and customers can independently reason about — the starting point for everything else.',
    ],
  },
  {
    slug: 'fundamentals-of-compliant-import-export',
    image: '/blog/fundamentals-of-compliant-import-export.svg',
    title: 'The fundamentals of compliant import & export',
    excerpt:
      'A practical view of the documentation, discipline and risk management that separate sustainable trade operations from opportunistic ones.',
    category: 'Import & Export',
    author: 'Pouch Care Insights',
    date: '2025-07-12',
    dateLabel: '12 July 2025',
    readingTime: '6 min read',
    body: [
      'Trade rewards reliability. Counterparties remember whether goods arrived as specified, on time, with clean documentation — and they price future business accordingly.',
      'Compliant trade starts with the right authorisations, including a valid trade license for export/import activity, and continues through disciplined documentation at every step: procurement, quality checks, shipping and delivery.',
      'Risk management is equally important. Phasing trade volumes to verified demand, maintaining working-capital discipline, and evaluating suppliers before commitment all reduce the chance of costly surprises.',
      'None of this is glamorous. But it is exactly what allows a trading operation to compound trust — and trade — over time.',
    ],
  },
  {
    slug: 'seo-as-a-compounding-business-asset',
    image: '/blog/seo-as-a-compounding-business-asset.svg',
    title: 'SEO as a compounding business asset',
    excerpt:
      'Treating search visibility as durable infrastructure rather than a campaign changes how you invest — and what you earn.',
    category: 'Digital Marketing',
    author: 'Pouch Care Insights',
    date: '2025-07-18',
    dateLabel: '18 July 2025',
    readingTime: '5 min read',
    body: [
      'Paid media stops the moment you stop paying. Organic search, done well, keeps working — which is why the strongest digital strategies treat SEO as infrastructure, not a campaign line item.',
      'That means investing in genuinely useful content, technical health, and clear information architecture. It means measuring outcomes transparently, so that progress is verifiable rather than assumed.',
      'The compounding comes from durability: a well-structured page can earn visibility for years. Over time, that organic base lowers the cost of every other channel.',
      'For growth-minded businesses, the lesson is simple — build assets, not just activity.',
    ],
  },
  {
    slug: 'designing-trustworthy-ecommerce',
    image: '/blog/designing-trustworthy-ecommerce.svg',
    title: 'Designing trustworthy e-commerce experiences',
    excerpt:
      'Trust is the real conversion lever in digital commerce. Here is how thoughtful design, transparency and operations earn it.',
    category: 'E-commerce',
    author: 'Pouch Care Insights',
    date: '2025-07-24',
    dateLabel: '24 July 2025',
    readingTime: '5 min read',
    body: [
      'Customers do not abandon carts only because of price. They abandon when something feels off — unclear product information, an awkward checkout, or doubts about whether an order will be fulfilled.',
      'Trustworthy commerce is therefore a full-stack discipline: transparent product information, secure and frictionless checkout, and reliable order management behind the scenes.',
      'Operational rigour — documented inventory, order and fulfilment processes — is what turns a good storefront into a dependable business. The interface earns the click; operations earn the repeat purchase.',
      'Design for trust first, and conversion tends to follow.',
    ],
  },
  {
    slug: 'it-ites-engineering-for-reliability',
    image: '/blog/it-ites-engineering-for-reliability.svg',
    title: 'IT & ITES: engineering for reliability',
    excerpt:
      'Reliability is a product feature. The practices that deliver it — testing, security by design, documentation — are also what make teams scale.',
    category: 'IT & ITES',
    author: 'Pouch Care Insights',
    date: '2025-07-30',
    dateLabel: '30 July 2025',
    readingTime: '6 min read',
    body: [
      'In technology services, reliability is not a nice-to-have — it is the product. Clients buy the confidence that what you build will keep working.',
      'That confidence is engineered through disciplined practice: version control as a default, automated testing, security by design, and documentation that survives team changes.',
      'These same practices are what let a delivery team scale without chaos. They reduce rework, shorten onboarding, and make quality repeatable rather than heroic.',
      'Reliability, in other words, is both a customer promise and an operating advantage.',
    ],
  },
  {
    slug: 'sustainable-agro-value-chains',
    image: '/blog/sustainable-agro-value-chains.svg',
    title: 'Toward sustainable agro value chains',
    excerpt:
      'Linking responsible agro production to trading and commerce channels can create resilient, transparent value chains.',
    category: 'Agriculture',
    author: 'Pouch Care Insights',
    date: '2025-08-05',
    dateLabel: '05 August 2025',
    readingTime: '5 min read',
    body: [
      'Agriculture sits at the intersection of livelihoods, food security and commerce. The opportunity is to build value chains that are both productive and responsible.',
      'A quality-oriented approach to agro production — across dairy, poultry and fishery — provides a foundation. Linking that production to trading and e-commerce channels can shorten the distance between producer and market.',
      'Sustainability matters here not as a slogan but as resource stewardship: practices that protect long-term productivity rather than mortgaging it for short-term gain.',
      'Integrated, transparent agro value chains are a meaningful way to create durable value.',
    ],
  },
];

export function getInsightBySlug(slug: string): InsightPost | undefined {
  return insights.find((i) => i.slug === slug);
}

export const sortedInsights = [...insights].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);
