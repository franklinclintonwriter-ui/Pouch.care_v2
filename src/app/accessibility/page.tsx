import { Section } from '@/components/layout/section';
import { PageHero } from '@/components/sections/page-hero';
import { SEOJsonLd } from '@/components/seo/json-ld';
import { company } from '@/data/company';
import { buildMetadata, breadcrumbJsonLd } from '@/lib/seo';

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Accessibility', path: '/accessibility' },
];

export const metadata = buildMetadata({
  title: 'Accessibility',
  description:
    'Our commitment to building an accessible website for Pouch Care International Ltd., the measures we have taken, known limitations, and how to give feedback.',
  path: '/accessibility',
});

const LAST_UPDATED = '14 June 2026';

export default function AccessibilityPage() {
  return (
    <>
      <SEOJsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <PageHero
        eyebrow="Legal"
        title="Accessibility"
        description="We want this website to be usable by as many people as possible, including those who rely on assistive technologies."
        breadcrumbs={breadcrumbs}
      />

      <Section size="narrow">
        <p className="text-sm font-medium text-muted-foreground">
          Last updated: {LAST_UPDATED}
        </p>

        <h2 className="mb-3 mt-10 text-2xl font-semibold text-navy-900">
          Our commitment
        </h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          {company.legalName} is committed to making this website accessible to
          all visitors. We aim to align with the principles of the Web Content
          Accessibility Guidelines (WCAG) 2.1 at Level AA, and we treat
          accessibility as an ongoing responsibility rather than a one-time
          task.
        </p>

        <h2 className="mb-3 mt-10 text-2xl font-semibold text-navy-900">
          Measures we have taken
        </h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          We have incorporated a range of accessibility practices into the
          design and development of this website, including:
        </p>
        <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
          <li>
            Semantic HTML structure with meaningful headings and landmarks to
            support screen readers.
          </li>
          <li>Full keyboard navigation for interactive elements.</li>
          <li>
            Visible focus states so keyboard users can track their position.
          </li>
          <li>
            Attention to colour contrast between text and background for
            readability.
          </li>
          <li>
            Support for reduced-motion preferences, so animations are minimised
            for visitors who request it.
          </li>
          <li>
            ARIA labels where additional context is helpful for assistive
            technologies.
          </li>
          <li>Descriptive alternative text for meaningful images.</li>
          <li>Clear, associated labels for form fields.</li>
        </ul>

        <h2 className="mb-3 mt-10 text-2xl font-semibold text-navy-900">
          Known limitations
        </h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          Despite our efforts, some parts of the website may not yet be fully
          accessible. Certain third-party content, embedded resources, or
          document previews may not meet every accessibility criterion, and we
          are continually working to identify and resolve such issues. We view
          accessibility as a process of ongoing improvement and prioritise fixes
          as we become aware of them.
        </p>

        <h2 className="mb-3 mt-10 text-2xl font-semibold text-navy-900">
          Feedback
        </h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          We welcome your feedback on the accessibility of this website. If you
          encounter a barrier or have a suggestion, please contact us at{' '}
          <a
            href={`mailto:${company.publicContact.email}`}
            className="font-medium text-navy-800 underline decoration-gold-400 underline-offset-4 hover:text-gold-700"
          >
            {company.publicContact.email}
          </a>
          . We will do our best to respond and to address accessibility concerns
          promptly.
        </p>
      </Section>
    </>
  );
}
