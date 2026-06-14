import type { LeaderProfile } from '@/lib/types';

/**
 * Public-safe leadership profiles.
 * PRIVACY: No private NID, personal phone, personal email, or home address.
 * Only role, public responsibilities and professional focus areas.
 */
export const leaders: LeaderProfile[] = [
  {
    slug: 'abdullah-al-mamun',
    name: 'Abdullah Al Mamun',
    role: 'Chairman',
    shortRole: 'Chairman of the Board',
    initials: 'AM',
    summary:
      'Abdullah Al Mamun serves as Chairman of Pouch Care International Ltd., providing strategic direction and governance oversight across the company’s diversified divisions.',
    message:
      'Pouch Care International Ltd. was founded on a simple conviction: that a Bangladeshi enterprise can be both ambitious and uncompromisingly transparent. Our diversified foundation — spanning technology, trade, commerce, agriculture and advisory — is built to create durable value while operating to international standards of governance. We are at the beginning of our journey, and we intend to build it the right way: verified, compliant, and accountable.',
    focusAreas: [
      'Corporate strategy and direction',
      'Governance and accountability',
      'Long-term value creation',
      'Stakeholder trust',
    ],
    responsibilities: [
      'Chairs the board and sets strategic direction',
      'Oversees governance and compliance philosophy',
      'Guides capital and portfolio priorities',
      'Champions transparent, privacy-first disclosure',
    ],
    isBoardMember: true,
    order: 1,
  },
  {
    slug: 'md-oliullah',
    name: 'Md. Oliullah',
    role: 'Managing Director',
    shortRole: 'Managing Director',
    initials: 'MO',
    summary:
      'Md. Oliullah serves as Managing Director of Pouch Care International Ltd., leading execution across the company’s operating divisions and day-to-day management.',
    message:
      'Our mandate as a management team is execution with discipline. Each division — from trading and e-commerce to technology and agriculture — is being built on documented processes, compliance, and a privacy-first approach to information. We believe credibility is earned through verified action, and that is the standard we hold ourselves to as we grow.',
    focusAreas: [
      'Operational execution',
      'Division development',
      'Process and compliance',
      'Performance and delivery',
    ],
    responsibilities: [
      'Leads day-to-day management of the company',
      'Oversees execution across operating divisions',
      'Implements operational governance and controls',
      'Drives delivery, quality and accountability',
    ],
    isBoardMember: true,
    order: 2,
  },
];

export function getLeaderBySlug(slug: string): LeaderProfile | undefined {
  return leaders.find((l) => l.slug === slug);
}

export const boardMembers = leaders.filter((l) => l.isBoardMember);
