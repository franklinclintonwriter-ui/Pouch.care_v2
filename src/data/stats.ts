import type { StatItem } from '@/lib/types';

/**
 * Headline facts. Intentionally avoids invented metrics (revenue, clients,
 * employees). Values reflect verifiable structural facts about the company.
 */
export const stats: StatItem[] = [
  {
    id: 'stat-divisions',
    value: '7',
    label: 'Business divisions',
    description:
      'Diversified divisions aligned to the company’s legal objects.',
    icon: 'LayoutGrid',
  },
  {
    id: 'stat-type',
    value: 'Ltd.',
    label: 'Private limited company',
    description: 'Limited by shares under the Companies Act, 1994.',
    icon: 'Building2',
  },
  {
    id: 'stat-year',
    value: '2025',
    label: 'Year incorporated',
    description: 'Incorporated 18 June 2025 — Certificate C-202769/2025.',
    icon: 'CalendarCheck',
  },
  {
    id: 'stat-verified',
    value: '100%',
    label: 'Verified foundation',
    description: 'Public-safe, document-backed corporate verification.',
    icon: 'ShieldCheck',
  },
];
