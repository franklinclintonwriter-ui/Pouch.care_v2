import { ShieldAlert, ArrowRight } from 'lucide-react';
import { Section } from '@/components/layout/section';
import { SectionHeading } from '@/components/layout/section-heading';
import { PageHero } from '@/components/sections/page-hero';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { DocumentCard } from '@/components/documents/document-card';
import { DocumentRegistryTable } from '@/components/documents/document-registry-table';
import { CTASection } from '@/components/sections/cta-section';
import { SEOJsonLd } from '@/components/seo/json-ld';
import { Button } from '@/components/ui/button';
import { documents, documentCategories } from '@/data/documents';
import { buildMetadata, breadcrumbJsonLd } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Licenses & Legal Documents',
  description:
    'Public-safe registry of Pouch Care International Ltd. legal documents — incorporation, constitution and licensing — with redacted previews and masked sensitive fields.',
  path: '/documents',
  keywords: [
    'Pouch Care documents',
    'trade license',
    'certificate of incorporation',
    'legal documents Bangladesh',
  ],
});

export default function DocumentsPage() {
  return (
    <>
      <SEOJsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Documents', path: '/documents' },
        ])}
      />
      <PageHero
        eyebrow="Licenses & legal documents"
        title="A transparent, public-safe document registry"
        description="Browse our corporate documents with verification status and redacted previews. Sensitive personal data is never published."
        breadcrumbs={[{ name: 'Documents', path: '/documents' }]}
      />

      {/* Privacy notice */}
      <Section className="!pb-0">
        <div className="flex items-start gap-4 rounded-2xl border border-gold-300/50 bg-gold-50 p-5">
          <ShieldAlert
            className="mt-0.5 size-5 shrink-0 text-gold-700"
            aria-hidden="true"
          />
          <p className="text-sm leading-relaxed text-gold-900">
            <strong className="font-semibold">Privacy notice.</strong> All
            public previews are redacted for privacy and security. We never
            publish personal identifiers (NID/passport), personal contact
            details, signatures, seals, QR codes, or unredacted scans. Raw
            documents are treated as private source files.
          </p>
        </div>
      </Section>

      {/* Document cards */}
      <Section>
        <SectionHeading
          eyebrow="Document library"
          title="Corporate records"
          description="Each record shows public-safe metadata. Open a redacted preview or request an official copy through a verified channel."
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
          description="A consolidated view of all records and their current verification status."
        />
        <div className="mt-10">
          <DocumentRegistryTable docs={documents} />
        </div>

        {/* Categories */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {documentCategories.map((cat) => (
            <div
              key={cat.category}
              className="rounded-2xl border border-border bg-card p-5 shadow-soft"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-gold-700">
                {cat.category}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {cat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Button href="/verification" variant="primary">
            Go to Verification Center
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </Section>

      <CTASection
        eyebrow="Need an official copy?"
        title="Request verified documents through a secure channel"
        description="We share official documentation with verified counterparties on request — protecting privacy while confirming authenticity."
        primary={{
          label: 'Request verification',
          href: '/contact?type=verification',
        }}
        secondary={{ label: 'Verification Center', href: '/verification' }}
      />
    </>
  );
}
