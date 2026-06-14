import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Section } from '@/components/layout/section';
import { SectionHeading } from '@/components/layout/section-heading';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { InvestorCard } from '@/components/cards/investor-card';
import { Timeline } from '@/components/sections/timeline';
import { CTASection } from '@/components/sections/cta-section';
import { PageHero } from '@/components/sections/page-hero';
import { SEOJsonLd } from '@/components/seo/json-ld';
import { Icon } from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { company } from '@/data/company';
import { sortedDivisions } from '@/data/divisions';
import { timeline } from '@/data/timeline';
import { documents } from '@/data/documents';
import { buildMetadata, breadcrumbJsonLd } from '@/lib/seo';

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Investor Relations', path: '/investor-relations' },
];

export const metadata = buildMetadata({
  title: 'Investor Relations',
  description:
    'Company snapshot, business verticals, legal status and growth roadmap for Pouch Care International Ltd. — careful, claim-free language for prospective partners.',
  path: '/investor-relations',
});

const snapshot = [
  {
    icon: 'Building2',
    label: 'Legal status',
    value: 'Private Limited',
    note: company.companyType,
  },
  {
    icon: 'CalendarCheck',
    label: 'Incorporated',
    value: '2025',
    note: `Incorporated ${company.incorporationDateLabel}`,
  },
  {
    icon: 'ShieldCheck',
    label: 'Certificate',
    value: company.certificateNumber,
    note: 'Verified, document-backed incorporation',
  },
  {
    icon: 'LayoutGrid',
    label: 'Divisions',
    value: '7 divisions',
    note: 'Diversified business verticals aligned to legal objects',
  },
];

export default function InvestorRelationsPage() {
  return (
    <>
      <SEOJsonLd data={breadcrumbJsonLd(breadcrumbs)} />

      <PageHero
        eyebrow="Investor relations"
        title="A verified foundation and a disciplined growth roadmap"
        description="An early-stage, diversified enterprise presented with careful, claim-free language. Forward-looking statements are framed as targets and roadmap — not as current results."
        breadcrumbs={[
          { name: 'Investor Relations', path: '/investor-relations' },
        ]}
      />

      {/* Company snapshot */}
      <Section>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Company snapshot"
            title="Verifiable structural facts"
            description="Public-safe, document-backed facts about the company — no claims of revenue, clients, funding, offices or operations."
          />
        </ScrollReveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {snapshot.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 0.06}>
              <InvestorCard
                icon={item.icon}
                label={item.label}
                value={item.value}
                note={item.note}
              />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Business verticals */}
      <Section tone="muted">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Business verticals"
            title="A diversified mandate across seven divisions"
            description="Each vertical is authorised under the company’s legal objects. Activities are being built methodically — presented as planned scope, not existing scale."
          />
        </ScrollReveal>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sortedDivisions.map((division, i) => (
            <ScrollReveal key={division.slug} delay={(i % 3) * 0.06}>
              <Link
                href={`/business/${division.slug}`}
                className="group flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft transition-colors hover:border-gold-300"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                  <Icon name={division.icon} className="size-5" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-navy-900">
                    {division.name}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {division.tagline}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </ul>
      </Section>

      {/* Legal status */}
      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Legal status"
              title="A verified private limited company"
              description="Pouch Care International Ltd. is a Bangladesh-incorporated private company limited by shares, holding verifiable corporate legal personality."
            />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              The company’s legal foundation, broad objects and privacy-first
              disclosure model provide a stable platform for disciplined growth.
              We make no claims of revenue, clients, funding, offices or
              international operations.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <Badge variant="emerald">Verified</Badge>
              <dl className="mt-5 grid gap-x-6 gap-y-5 sm:grid-cols-2">
                {[
                  { label: 'Legal name', value: company.legalName },
                  { label: 'Company type', value: company.companyType },
                  {
                    label: 'Incorporated under',
                    value: company.incorporatedUnder,
                  },
                  { label: 'Jurisdiction', value: company.jurisdiction },
                  {
                    label: 'Certificate number',
                    value: company.certificateNumber,
                  },
                  {
                    label: 'Date of incorporation',
                    value: company.incorporationDateLabel,
                  },
                ].map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 text-sm font-semibold text-navy-900">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Growth roadmap */}
      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Growth roadmap"
              title="A clear, phased path forward"
              description="Completed milestones are document-backed. Future phases are presented as targets and roadmap — not as achieved results."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Timeline items={timeline} />
          </ScrollReveal>
        </div>
      </Section>

      {/* Governance link */}
      <Section tone="navy">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <SectionHeading
              invert
              eyebrow="Governance"
              title="Built for accountability"
              description="Our governance model pairs board oversight with a compliance-first culture and a privacy-respecting disclosure policy — the groundwork for trusted partnerships."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/governance" variant="gold">
                <Icon name="Scale" className="size-4" />
                Explore governance
              </Button>
              <Button
                href="/verification"
                variant="outline"
                className="border-white/20 text-ivory hover:border-gold-300 hover:text-ivory"
              >
                Verification Center
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Corporate documents */}
      <Section>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Corporate documents"
            title="Verifiable corporate records"
            description="Public-safe corporate documents available through the Verification Center."
          />
        </ScrollReveal>
        <ul className="mt-10 grid gap-4">
          {documents.map((doc, i) => (
            <ScrollReveal key={doc.id} delay={i * 0.05}>
              <li>
                <Link
                  href="/verification"
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card px-6 py-5 shadow-soft transition-colors hover:border-gold-300"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gold-50 text-gold-700">
                      <Icon name="FileText" className="size-5" />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-navy-900">
                        {doc.title}
                      </h3>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {doc.category} · {doc.referenceLabel}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="size-5 shrink-0 text-gold-700 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </Section>

      {/* Future reports placeholder */}
      <Section tone="muted">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Future reports"
            title="Structured reporting as we mature"
            description="A formal corporate and investor reporting cadence is planned and will be published here as operations scale."
          />
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <div className="mt-10 flex max-w-2xl flex-col rounded-2xl border border-dashed border-border bg-card p-7 shadow-soft">
            <span className="flex size-11 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
              <Icon name="TrendingUp" className="size-5" />
            </span>
            <div className="mt-5 flex items-center gap-2">
              <h3 className="text-base font-semibold text-navy-900">
                Investor reports
              </h3>
              <Badge variant="outline">Planned</Badge>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Planned — periodic reports will be published here as the company
              matures and a formal reporting cadence is introduced.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      <CTASection
        eyebrow="Partnership & investment"
        title="Explore a partnership with us"
        description="We welcome conversations with prospective partners and future investors. Reach out through our verified inquiry channel."
        primary={{ label: 'Partnership inquiry', href: '/contact' }}
        secondary={{ label: 'Verification Center', href: '/verification' }}
      />
    </>
  );
}
