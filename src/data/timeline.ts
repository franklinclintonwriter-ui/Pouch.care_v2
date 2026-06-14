import type { TimelineItem } from '@/lib/types';

/** Corporate timeline. Future items are clearly marked as planned. */
export const timeline: TimelineItem[] = [
  {
    id: 'tl-trade-license',
    date: '2024-11-07',
    dateLabel: 'November 2024',
    title: 'Export-Import trade foundation',
    description:
      'Trade license for export/import activity issued under the Pouch Care Enterprise trading name, establishing early trade operations.',
    status: 'completed',
  },
  {
    id: 'tl-incorporation',
    date: '2025-06-18',
    dateLabel: '18 June 2025',
    title: 'Incorporation as a private limited company',
    description:
      'Pouch Care International Ltd. incorporated under the Companies Act, 1994 — Certificate No. C-202769/2025 — as a private company limited by shares.',
    status: 'completed',
  },
  {
    id: 'tl-verification-center',
    date: '2025-07-01',
    dateLabel: 'Mid 2025',
    title: 'Verification Center established',
    description:
      'Launch of a public-safe verification system with redacted document previews, masked fields and a transparent document registry.',
    status: 'completed',
  },
  {
    id: 'tl-division-buildout',
    date: '2025-12-01',
    dateLabel: 'Late 2025 (Planned)',
    title: 'Division build-out',
    description:
      'Establishing operating standards, documentation and capability across the diversified divisions.',
    status: 'in-progress',
  },
  {
    id: 'tl-scaling',
    date: '2026-06-01',
    dateLabel: '2026 (Planned)',
    title: 'Selective scaling',
    description:
      'Targeted growth in priority divisions backed by verified demand and disciplined governance.',
    status: 'planned',
  },
  {
    id: 'tl-reporting',
    date: '2027-01-01',
    dateLabel: '2027 (Planned)',
    title: 'Formal reporting cadence',
    description:
      'Introduction of structured corporate and investor reporting as operations mature.',
    status: 'planned',
  },
];
