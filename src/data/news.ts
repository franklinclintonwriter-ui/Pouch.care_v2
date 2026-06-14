import type { NewsPost } from '@/lib/types';

/** Newsroom posts. Placeholder announcements grounded in verified facts. */
export const news: NewsPost[] = [
  {
    slug: 'pouch-care-international-incorporated',
    image: '/blog/pouch-care-international-incorporated.svg',
    title:
      'Pouch Care International Ltd. incorporated as a private limited company',
    excerpt:
      'Pouch Care International Ltd. has been incorporated under the Companies Act, 1994 as a private company limited by shares, establishing a verified corporate foundation.',
    category: 'Corporate',
    author: 'Pouch Care Newsroom',
    date: '2025-06-18',
    dateLabel: '18 June 2025',
    readingTime: '2 min read',
    body: [
      'Pouch Care International Ltd. has been formally incorporated under the Companies Act, 1994 as a private company limited by shares. The company is registered with the Registrar of Joint Stock Companies & Firms (RJSC), Bangladesh, under Certificate of Incorporation No. C-202769/2025, dated 18 June 2025.',
      'Incorporation establishes the company as a distinct legal entity with the capacity to operate across its broad legal objects — spanning general trading, import and export, e-commerce, digital marketing, IT/ITES, agriculture, consultancy, and contracting.',
      'The company has adopted a privacy-first approach to public disclosure. Verified corporate information is made available through a public-safe Verification Center, while sensitive personal and document-level data is protected and shared only through verified channels.',
      'This milestone marks the beginning of a disciplined build-out across the company’s diversified divisions, each grounded in documented processes and compliance.',
    ],
  },
  {
    slug: 'pouch-care-expands-legal-foundation',
    image: '/blog/pouch-care-expands-legal-foundation.svg',
    title: 'Pouch Care expands legal foundation across diversified sectors',
    excerpt:
      'The company’s Memorandum & Articles of Association establish a diversified set of objects, enabling operations across technology, trade, commerce and agriculture.',
    category: 'Corporate',
    author: 'Pouch Care Newsroom',
    date: '2025-06-20',
    dateLabel: '20 June 2025',
    readingTime: '3 min read',
    body: [
      'With incorporation complete, Pouch Care International Ltd. has confirmed a diversified legal foundation through its Memorandum & Articles of Association. The company’s objects span general trading, import/export and distribution; e-commerce; digital marketing and SEO; web development, hosting and domain services; IT/ITES, software and hardware; agriculture, dairy, poultry and fishery; consultancy and advisory; and tenders, contracting and joint ventures.',
      'This breadth is intentional. It allows the company to build an integrated business ecosystem in which divisions can reinforce one another — for example, linking agricultural production to trading and e-commerce channels, or pairing technology delivery with digital marketing.',
      'Each division will be developed with documented operating standards and a compliance-first posture. The company emphasises that forward-looking initiatives are presented as roadmap items, not as existing results.',
      'The diversified foundation positions Pouch Care to pursue selective, verified growth across multiple high-potential sectors.',
    ],
  },
  {
    slug: 'verification-center-launched',
    image: '/blog/verification-center-launched.svg',
    title: 'Company Verification Center launched',
    excerpt:
      'Pouch Care International Ltd. introduces a public-safe Verification Center with redacted document previews, masked sensitive fields, and a transparent document registry.',
    category: 'Trust & Transparency',
    author: 'Pouch Care Newsroom',
    date: '2025-07-01',
    dateLabel: '01 July 2025',
    readingTime: '3 min read',
    body: [
      'Pouch Care International Ltd. has launched its Verification Center — an enterprise-grade, public-safe system for confirming the company’s legal identity and corporate standing.',
      'The Verification Center presents the company’s incorporation status, constitutional documents, and licensing in a structured registry. Each record includes public-safe metadata: document title, category, issuing authority, dates, entity name, business category, and verification status.',
      'Crucially, the system is privacy-first by design. Sensitive fields — such as personal identifiers, signatures, seals and QR codes — are masked. Raw document scans are treated as private source files and are never published. Public previews are redacted, and an official copy can be requested through a verified channel.',
      'The launch reflects the company’s belief that credibility is best built through transparency that respects privacy and security.',
    ],
  },
];

export function getNewsBySlug(slug: string): NewsPost | undefined {
  return news.find((n) => n.slug === slug);
}

export const sortedNews = [...news].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);
