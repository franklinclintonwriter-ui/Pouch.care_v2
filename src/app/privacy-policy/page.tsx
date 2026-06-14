import { ShieldCheck } from 'lucide-react';
import { Section } from '@/components/layout/section';
import { PageHero } from '@/components/sections/page-hero';
import { SEOJsonLd } from '@/components/seo/json-ld';
import { company } from '@/data/company';
import { buildMetadata, breadcrumbJsonLd } from '@/lib/seo';

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Privacy Policy', path: '/privacy-policy' },
];

export const metadata = buildMetadata({
  title: 'Privacy Policy',
  description:
    'How Pouch Care International Ltd. handles website data and protects sensitive personal information — including our privacy-first approach to redacted public document disclosure.',
  path: '/privacy-policy',
});

const LAST_UPDATED = '14 June 2026';

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEOJsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="We take a privacy-first approach to information. This policy explains what we collect, how we use it, and how we protect sensitive data."
        breadcrumbs={breadcrumbs}
      />

      <Section size="narrow">
        <p className="text-sm font-medium text-muted-foreground">
          Last updated: {LAST_UPDATED}
        </p>

        <p className="mb-4 mt-6 leading-relaxed text-muted-foreground">
          This Privacy Policy describes how {company.legalName} (&ldquo;Pouch
          Care&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;)
          handles information in connection with this website. As a
          compliance-first enterprise, we are committed to protecting personal
          information and to publishing only public-safe data. We do not sell
          personal information.
        </p>

        <h2 className="mb-3 mt-10 text-2xl font-semibold text-navy-900">
          Information we collect
        </h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          We aim to collect as little information as possible. The information
          we may collect falls into two categories:
        </p>
        <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
          <li>
            <strong>Website usage data.</strong> Standard technical information
            generated when you visit the site, such as general device and
            browser details and aggregated, privacy-respecting analytics about
            how pages are used.
          </li>
          <li>
            <strong>Voluntary inquiry data.</strong> Information you choose to
            submit through a contact or business inquiry form — for example your
            name, organisation, email address and the content of your message.
            You are never required to share more than you wish to.
          </li>
        </ul>

        <h2 className="mb-3 mt-10 text-2xl font-semibold text-navy-900">
          How we use information
        </h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          We use the limited information we collect only for legitimate business
          purposes, including:
        </p>
        <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
          <li>
            Responding to inquiries you send us and following up where
            appropriate.
          </li>
          <li>Operating, maintaining and improving the website.</li>
          <li>
            Understanding aggregate usage trends so we can present information
            more clearly.
          </li>
          <li>
            Meeting legal, regulatory and compliance obligations applicable to a
            Bangladeshi private limited company.
          </li>
        </ul>

        <div className="mt-10 rounded-2xl border border-gold-200 bg-gold-50/60 p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-gold-700" aria-hidden="true" />
            <h2 className="text-2xl font-semibold text-navy-900">
              Privacy-first document disclosure
            </h2>
          </div>
          <p className="mb-4 mt-4 leading-relaxed text-muted-foreground">
            Transparency does not require exposing private data. Where we
            publish previews of corporate documents for verification purposes,
            those previews are deliberately <strong>redacted</strong>. The
            original, raw scans are treated as private source files and are{' '}
            <strong>not published</strong> on this website.
          </p>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            In particular, the following categories of sensitive information are{' '}
            <strong>never published</strong> in public document previews:
          </p>
          <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground">
            <li>National ID (NID) and passport numbers</li>
            <li>Personal phone numbers and personal email addresses</li>
            <li>Handwritten signatures and seals or stamps</li>
            <li>QR codes and machine-readable verification codes</li>
            <li>Home and residential addresses</li>
            <li>Witness names and witness details</li>
            <li>
              Tax identification numbers (e.g. TIN/BIN) and similar identifiers
            </li>
          </ul>
          <p className="leading-relaxed text-muted-foreground">
            Only public-safe corporate facts — such as the legal name, company
            type and certificate number — are surfaced for verification. This
            ensures we can demonstrate legitimacy while protecting the personal
            data of individuals connected to the company.
          </p>
        </div>

        <h2 className="mb-3 mt-10 text-2xl font-semibold text-navy-900">
          Data security
        </h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          We apply reasonable technical and organisational measures to protect
          information against unauthorised access, loss or misuse. Sensitive
          source documents are kept separate from public-facing materials and
          are access-controlled. While no method of transmission or storage can
          be guaranteed to be completely secure, we work to safeguard
          information consistent with its sensitivity.
        </p>

        <h2 className="mb-3 mt-10 text-2xl font-semibold text-navy-900">
          Cookies and analytics
        </h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          We keep cookies and tracking to a minimum. Where analytics are used,
          they are intended to be privacy-respecting and focused on aggregate,
          non-identifying usage patterns rather than individual profiling. Most
          browsers allow you to control or disable cookies through their
          settings.
        </p>

        <h2 className="mb-3 mt-10 text-2xl font-semibold text-navy-900">
          Your rights
        </h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          Subject to applicable law, you may request access to, correction of,
          or deletion of personal information you have provided to us, and you
          may ask questions about how your information is handled. To make such
          a request, please contact us using the details below. We will respond
          to reasonable requests in line with our legal obligations.
        </p>

        <h2 className="mb-3 mt-10 text-2xl font-semibold text-navy-900">
          Contact
        </h2>
        <p className="mb-4 leading-relaxed text-muted-foreground">
          If you have any questions about this Privacy Policy or our handling of
          information, please contact us at{' '}
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
