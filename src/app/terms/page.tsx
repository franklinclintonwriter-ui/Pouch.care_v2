import { Section } from '@/components/layout/section';
import { PageHero } from '@/components/sections/page-hero';
import { SEOJsonLd } from '@/components/seo/json-ld';
import { company } from '@/data/company';
import { buildMetadata, breadcrumbJsonLd } from '@/lib/seo';

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Terms of Use', path: '/terms' },
];

export const metadata = buildMetadata({
  title: 'Terms of Use',
  description:
    'The terms governing use of the Pouch Care International Ltd. website, including disclaimers on investment advice, forward-looking statements and limitation of liability.',
  path: '/terms',
});

const LAST_UPDATED = '14 June 2026';

export default function TermsPage() {
  return (
    <>
      <SEOJsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        description="These terms govern your access to and use of this website. Please read them carefully."
        breadcrumbs={breadcrumbs}
      />

      <Section size="narrow">
        <p className="text-sm font-medium text-muted-foreground">
          Last updated: {LAST_UPDATED}
        </p>

        <h2 className="mb-3 mt-10 text-2xl font-semibold text-navy-900">
          Acceptance of terms
        </h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          By accessing or using this website, you agree to be bound by these
          Terms of Use and by our Privacy Policy. If you do not agree with these
          terms, please do not use the website.
        </p>

        <h2 className="mb-3 mt-10 text-2xl font-semibold text-navy-900">
          About the company
        </h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          This website is operated by {company.legalName}, a private company
          limited by shares incorporated in Bangladesh, registered under
          Certificate of Incorporation No. {company.certificateNumber}.
          References to &ldquo;we&rdquo;, &ldquo;us&rdquo; and &ldquo;our&rdquo;
          refer to {company.legalName}.
        </p>

        <h2 className="mb-3 mt-10 text-2xl font-semibold text-navy-900">
          Use of the website
        </h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          You agree to use this website only for lawful purposes and in a manner
          that does not infringe the rights of, or restrict or inhibit the use
          of the website by, any third party. You must not attempt to gain
          unauthorised access to the website, its systems or its underlying
          data, nor use the website to distribute malicious code or to harvest
          information.
        </p>

        <h2 className="mb-3 mt-10 text-2xl font-semibold text-navy-900">
          Intellectual property
        </h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          Unless otherwise stated, the content on this website — including text,
          graphics, logos, branding and design — is the property of{' '}
          {company.legalName} or its licensors and is protected by applicable
          intellectual property laws. You may view and print content for your
          own informational, non-commercial use, but you may not reproduce,
          republish or distribute it without our prior written permission.
        </p>

        <h2 className="mb-3 mt-10 text-2xl font-semibold text-navy-900">
          No investment or financial advice
        </h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          The content on this website is provided for general informational
          purposes only. Nothing on this website constitutes investment,
          financial, legal, tax or other professional advice, and nothing on
          this website is an offer or solicitation to buy or sell any securities
          or financial instruments. No statement on this website should be
          construed as a guarantee of any outcome, return or performance. You
          should obtain independent professional advice before making any
          decision based on information found here.
        </p>

        <h2 className="mb-3 mt-10 text-2xl font-semibold text-navy-900">
          Forward-looking statements
        </h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          This website may contain forward-looking statements regarding the
          company&rsquo;s plans, roadmap, intentions and aspirations. Such
          statements describe goals and plans only — they are not commitments,
          promises or guarantees, and they are not statements of existing
          revenue, clients, partnerships, offices or certifications. Roadmap
          items are subject to change and may not be realised. Actual outcomes
          may differ materially from any plans described here.
        </p>

        <h2 className="mb-3 mt-10 text-2xl font-semibold text-navy-900">
          Accuracy of information
        </h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          We aim to keep the information on this website accurate and up to
          date, but we make no warranty that it is complete, current or
          error-free. The website is provided on an &ldquo;as is&rdquo; and
          &ldquo;as available&rdquo; basis. We may update, change or remove
          content at any time without notice.
        </p>

        <h2 className="mb-3 mt-10 text-2xl font-semibold text-navy-900">
          Third-party links
        </h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          This website may contain links to third-party websites or resources.
          These links are provided for convenience only. We do not control and
          are not responsible for the content, policies or practices of any
          third-party site, and the inclusion of a link does not imply our
          endorsement.
        </p>

        <h2 className="mb-3 mt-10 text-2xl font-semibold text-navy-900">
          Limitation of liability
        </h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          To the fullest extent permitted by applicable law, {company.legalName}{' '}
          shall not be liable for any direct, indirect, incidental,
          consequential or special loss or damage arising out of or in
          connection with your use of, or inability to use, this website or any
          content on it. Nothing in these terms excludes or limits liability
          that cannot be excluded or limited under applicable law.
        </p>

        <h2 className="mb-3 mt-10 text-2xl font-semibold text-navy-900">
          Governing law
        </h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          These Terms of Use are governed by and construed in accordance with
          the laws of Bangladesh. Any disputes arising in connection with these
          terms or the website shall be subject to the jurisdiction of the
          competent courts of Bangladesh.
        </p>

        <h2 className="mb-3 mt-10 text-2xl font-semibold text-navy-900">
          Changes to these terms
        </h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          We may revise these Terms of Use from time to time. The most current
          version will always be posted on this page, and your continued use of
          the website after any changes constitutes acceptance of the revised
          terms.
        </p>

        <h2 className="mb-3 mt-10 text-2xl font-semibold text-navy-900">
          Contact
        </h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          If you have any questions about these Terms of Use, please contact us
          at{' '}
          <a
            href={`mailto:${company.publicContact.email}`}
            className="font-medium text-navy-800 underline decoration-gold-400 underline-offset-4 hover:text-gold-700"
          >
            {company.publicContact.email}
          </a>
          .
        </p>
      </Section>
    </>
  );
}
