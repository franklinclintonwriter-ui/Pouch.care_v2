import type { NavGroup, NavigationItem } from '@/lib/types';
import { sortedDivisions } from './divisions';

/** Primary navigation used by the desktop mega menu and mobile nav. */
export const primaryNav: NavGroup[] = [
  {
    label: 'Company',
    columns: [
      {
        heading: 'Overview',
        items: [
          {
            label: 'About',
            href: '/about',
            description: 'Who we are and what we are building.',
            icon: 'Building2',
          },
          {
            label: 'Leadership',
            href: '/leadership',
            description: 'Board and executive leadership.',
            icon: 'Users',
          },
          {
            label: 'Governance',
            href: '/governance',
            description: 'Principles, structure and accountability.',
            icon: 'Scale',
          },
        ],
      },
      {
        heading: 'Trust',
        items: [
          {
            label: 'Verification Center',
            href: '/verification',
            description: 'Verified legal identity and documents.',
            icon: 'ShieldCheck',
          },
          {
            label: 'Documents',
            href: '/documents',
            description: 'Licenses and legal records (public-safe).',
            icon: 'FileText',
          },
          {
            label: 'Investor Relations',
            href: '/investor-relations',
            description: 'Snapshot, roadmap and disclosures.',
            icon: 'TrendingUp',
          },
        ],
      },
    ],
    featured: {
      title: 'Verified incorporation',
      description:
        'Pouch Care International Ltd. — Certificate C-202769/2025, incorporated 18 June 2025.',
      href: '/verification',
    },
  },
  {
    label: 'Business',
    href: '/business',
    columns: [
      {
        heading: 'Divisions',
        items: sortedDivisions.slice(0, 4).map((d) => ({
          label: d.name,
          href: `/business/${d.slug}`,
          description: d.tagline,
          icon: d.icon,
        })),
      },
      {
        heading: 'More divisions',
        items: sortedDivisions.slice(4).map((d) => ({
          label: d.name,
          href: `/business/${d.slug}`,
          description: d.tagline,
          icon: d.icon,
        })),
      },
    ],
    featured: {
      title: 'Diversified by design',
      description:
        'Seven divisions spanning technology, trade, commerce and agriculture.',
      href: '/business',
    },
  },
  {
    label: 'Insights',
    columns: [
      {
        heading: 'Newsroom & Insights',
        items: [
          {
            label: 'Newsroom',
            href: '/newsroom',
            description: 'Official company announcements.',
            icon: 'Newspaper',
          },
          {
            label: 'Insights',
            href: '/insights',
            description: 'Perspectives across our sectors.',
            icon: 'Lightbulb',
          },
          {
            label: 'Careers',
            href: '/careers',
            description: 'Build with us (future openings).',
            icon: 'Briefcase',
          },
        ],
      },
    ],
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

/** Flat top-level links for simple contexts. */
export const topLevelLinks: NavigationItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Business', href: '/business' },
  { label: 'Verification', href: '/verification' },
  { label: 'Leadership', href: '/leadership' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
];

/** Footer navigation columns. */
export const footerNav: { heading: string; items: NavigationItem[] }[] = [
  {
    heading: 'Company',
    items: [
      { label: 'About', href: '/about' },
      { label: 'Leadership', href: '/leadership' },
      { label: 'Governance', href: '/governance' },
      { label: 'Investor Relations', href: '/investor-relations' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  {
    heading: 'Business',
    items: [
      { label: 'All Divisions', href: '/business' },
      ...sortedDivisions.map((d) => ({
        label: d.shortName,
        href: `/business/${d.slug}`,
      })),
    ],
  },
  {
    heading: 'Trust & Verification',
    items: [
      { label: 'Verification Center', href: '/verification' },
      { label: 'Documents', href: '/documents' },
      { label: 'Governance', href: '/governance' },
      { label: 'Accessibility', href: '/accessibility' },
    ],
  },
  {
    heading: 'Resources',
    items: [
      { label: 'Newsroom', href: '/newsroom' },
      { label: 'Insights', href: '/insights' },
      { label: 'Contact', href: '/contact' },
      { label: 'Sitemap', href: '/sitemap' },
    ],
  },
  {
    heading: 'Legal',
    items: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Use', href: '/terms' },
      { label: 'Accessibility', href: '/accessibility' },
    ],
  },
];
