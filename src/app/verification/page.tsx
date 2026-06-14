import {
  ShieldCheck,
  ShieldAlert,
  Building2,
  CalendarCheck,
  FileText,
  Landmark,
  BadgeCheck,
} from 'lucide-react';
import { Section } from '@/components/layout/section';
import { SectionHeading } from '@/components/layout/section-heading';
import { PageHero } from '@/components/sections/page-hero';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { DocumentCard } from '@/components/documents/document-card';
import { DocumentRegistryTable } from '@/components/documents/document-registry-table';
import { StatusBadge } from '@/components/ui/status-badge';
import { Timeline } from '@/components/sections/timeline';
import { CTASection } from '@/components/sections/cta-section';
import { SEOJsonLd } from '@/components/seo/json-ld';
import { Button } from '@/components/ui/button';
import {
  documents,
  documentCategories,
  getDocumentBySlug,
  resolveDocumentStatus,
} from '@/data/documents';
import { company } from '@/data/company';
import { timeline } from '@/data/timeline';
import { buildMetadata, breadcrumbJsonLd } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Verification Center',
  description:
    'Verify Pouch Care International Ltd. — incorporation status, constitution, and licensing. A public-safe verification dashboard with redacted previews and masked sensitive fields.',
  path: '/verification',
  keywords: [
    'Pouch Care verification',
    'company verification Bangladesh',
    'C-202769/2025',
    'verify private limited company',
  ],
});

const verificationTimeline = timeline.filter((t) => t.status === 'completed');

export default function VerificationPage() {
  const incorporation = getDocumentBySlug('certificate-of-incorporation')!;
  const moa = getDocumentBySlug('memorandum-and-articles-of-association')!;
  const license = getDocumentBySlug('trade-license-export-import')!;

  const statusCards = [
    {
      doc: incorporation,
      icon: Landmark,
      label: 'Incorporation',
      value: company.certificateNumber,
      note: `Incorporated ${company.incorporationDateLabel}`,
    },
    {
      doc: license,
      icon: FileText,
      label: 'Trade License',
      value: 'Export / Import',
      note: 'Issued by 4 No Haluaghat Union Parishad',
    },
    {
      doc: moa,
      icon: BadgeCheck,
      label: 'MOA / AOA',
      value: 'Constitution',
      note: 'Diversified objects, limited by shares',
    },
  ];

  const identityFacts = [
    { icon: Building2, label: 'Legal name', value: company.legalName },
    { icon: BadgeCheck, label: 'Company type', value: company.companyType },
    {
      icon: CalendarCheck,
      label: 'Incorporated',
      value: company.incorporationDateLabel,
    },
    {
      icon: ShieldCheck,
      label: 'Certificate no.',
      value: company.certificateNumber,
    },
  ];

  return (
    <>
      <SEOJsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Verification', path: '/verification' },
        ])}
      />

      <PageHero
        eyebrow="Verification Center"
        title="Independently verify our corporate standing"
        description="A public-safe verification dashboard for Pouch Care International Ltd. — incorporation, constitution, and licensing, with redacted previews that protect sensitive data."
        breadcrumbs={[{ name: 'Verification', path: '/verification' }]}
      >
        <div className="flex flex-wrap gap-3">
          <Button href="#documents" variant="gold">
            <FileText className="size-4" />
            View documents
          </Button>
          <Button
            href="/contact?type=verification"
            variant="outline"
            className="border-white/20 text-ivory hover:border-gold-300 hover:text-ivory"
          >
            Request official verification
          </Button>
        </div>
      </PageHero>

      {/* Legal identity summary */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Legal identity"
              title="Company legal identity summary"
              description={company.summary}
            />
            <dl className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {identityFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gold-50 text-gold-700">
                    <fact.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                      {fact.label}
                    </dt>
                    <dd className="mt-0.5 text-sm font-semibold text-navy-900">
                      {fact.value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="h-full rounded-2xl border border-emerald/30 bg-emerald/5 p-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald/10 px-3 py-1 text-xs font-semibold [color:hsl(var(--emerald))]">
                <ShieldCheck className="size-4" aria-hidden="true" />
                Verified foundation
              </span>
              <h3 className="mt-5 font-serif text-xl font-semibold text-navy-900">
                Registered with the RJSC, Bangladesh
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {company.legalName} is registered with the {company.registrar},
                incorporated under {company.incorporatedUnder} as a{' '}
                {company.companyType.toLowerCase()}.
              </p>
              <ul className="mt-5 space-y-2.5 text-sm text-navy-800">
                {[
                  'Distinct corporate legal personality',
                  'Diversified, document-backed legal objects',
                  'Privacy-first public disclosure model',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <ShieldCheck
                      className="mt-0.5 size-4 shrink-0 [color:hsl(var(--emerald))]"
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Status cards */}
      <Section tone="muted" className="!pt-0">
        <div className="pt-16 sm:pt-20">
          <SectionHeading
            eyebrow="Status"
            title="Verification status overview"
            description="Live status of the company’s key records. Licensing status reflects the current renewal cycle."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {statusCards.map((card, i) => (
              <ScrollReveal key={card.label} delay={i * 0.06}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <div className="flex items-center justify-between">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                      <card.icon className="size-5" aria-hidden="true" />
                    </span>
                    <StatusBadge status={resolveDocumentStatus(card.doc)} />
                  </div>
                  <p className="mt-5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {card.label}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-navy-900">
                    {card.value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {card.note}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Privacy warning */}
      <Section className="!pb-0">
        <div className="flex items-start gap-4 rounded-2xl border border-gold-300/50 bg-gold-50 p-5">
          <ShieldAlert
            className="mt-0.5 size-5 shrink-0 text-gold-700"
            aria-hidden="true"
          />
          <p className="text-sm leading-relaxed text-gold-900">
            <strong className="font-semibold">
              Public previews are redacted.
            </strong>{' '}
            For privacy and security, document previews mask all sensitive
            fields — personal identifiers, contact details, signatures, seals
            and QR codes are never shown. To confirm authenticity, request an
            official verification.
          </p>
        </div>
      </Section>

      {/* Document preview cards */}
      <Section id="documents">
        <SectionHeading
          eyebrow="Public-safe documents"
          title="Document preview cards"
          description="Open a redacted preview of each record, or request an official copy through a verified channel."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {documents.map((doc, i) => (
            <ScrollReveal key={doc.id} delay={(i % 3) * 0.06}>
              <DocumentCard doc={doc} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Registry table */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Registry"
          title="Document registry"
          description="A consolidated, sortable-by-design overview of all corporate records."
        />
        <div className="mt-10">
          <DocumentRegistryTable docs={documents} />
        </div>
      </Section>

      {/* Verification timeline + categories */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Verification timeline"
              title="Verified milestones"
              description="Document-backed milestones in the company’s verification history."
            />
            <div className="mt-8">
              <Timeline items={verificationTimeline} />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <SectionHeading
              as="h3"
              eyebrow="Categories"
              title="Document categories"
            />
            <ul className="mt-8 space-y-3">
              {documentCategories.map((cat) => (
                <li
                  key={cat.category}
                  className="rounded-xl border border-border bg-card p-4 shadow-soft"
                >
                  <p className="text-sm font-semibold text-navy-900">
                    {cat.category}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {cat.description}
                  </p>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </Section>

      <CTASection
        eyebrow="Official verification"
        title="Request official verification"
        description="Verified counterparties can request official documentation and confirmation of corporate standing through a secure channel."
        primary={{
          label: 'Request official verification',
          href: '/contact?type=verification',
        }}
        secondary={{ label: 'Browse documents', href: '/documents' }}
      />
    </>
  );
}
