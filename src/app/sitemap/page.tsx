import Link from 'next/link';
import { Section } from '@/components/layout/section';
import { PageHero } from '@/components/sections/page-hero';
import { SEOJsonLd } from '@/components/seo/json-ld';
import { sortedDivisions } from '@/data/divisions';
import { leaders } from '@/data/leadership';
import { sortedNews } from '@/data/news';
import { sortedInsights } from '@/data/insights';
import { buildMetadata, breadcrumbJsonLd } from '@/lib/seo';

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Sitemap', path: '/sitemap' },
];

export const metadata = buildMetadata({
  title: 'Sitemap',
  description:
    'A complete overview of the Pouch Care International Ltd. website — browse company, business, leadership, newsroom, insights and legal pages.',
  path: '/sitemap',
});

interface SitemapLink {
  label: string;
  href: string;
}

interface SitemapGroup {
  heading: string;
  links: SitemapLink[];
}

const groups: SitemapGroup[] = [
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Leadership', href: '/leadership' },
      { label: 'Governance', href: '/governance' },
      { label: 'Investor Relations', href: '/investor-relations' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    heading: 'Trust',
    links: [
      { label: 'Verification', href: '/verification' },
      { label: 'Documents', href: '/documents' },
    ],
  },
  {
    heading: 'Business',
    links: [
      { label: 'All Divisions', href: '/business' },
      ...sortedDivisions.map((division) => ({
        label: division.name,
        href: `/business/${division.slug}`,
      })),
    ],
  },
  {
    heading: 'Leadership Profiles',
    links: leaders.map((leader) => ({
      label: leader.name,
      href: `/leadership/${leader.slug}`,
    })),
  },
  {
    heading: 'Newsroom',
    links: [
      { label: 'Newsroom', href: '/newsroom' },
      ...sortedNews.map((post) => ({
        label: post.title,
        href: `/newsroom/${post.slug}`,
      })),
    ],
  },
  {
    heading: 'Insights',
    links: [
      { label: 'Insights', href: '/insights' },
      ...sortedInsights.map((post) => ({
        label: post.title,
        href: `/insights/${post.slug}`,
      })),
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Use', href: '/terms' },
      { label: 'Accessibility', href: '/accessibility' },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <SEOJsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <PageHero
        eyebrow="Navigation"
        title="Sitemap"
        description="A complete overview of the Pouch Care International Ltd. website."
        breadcrumbs={breadcrumbs}
      />

      <Section>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <nav key={group.heading} aria-label={group.heading}>
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-wide text-gold-700">
                {group.heading}
              </h2>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-navy-800 transition-colors hover:text-gold-700"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </Section>
    </>
  );
}
