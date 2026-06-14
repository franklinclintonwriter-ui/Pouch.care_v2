import { ShieldCheck } from 'lucide-react';
import { Section } from '@/components/layout/section';
import { SectionHeading } from '@/components/layout/section-heading';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { GovernanceCard } from '@/components/cards/governance-card';
import { CTASection } from '@/components/sections/cta-section';
import { PageHero } from '@/components/sections/page-hero';
import { SEOJsonLd } from '@/components/seo/json-ld';
import { Icon } from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { company } from '@/data/company';
import { boardMembers } from '@/data/leadership';
import { documents } from '@/data/documents';
import { buildMetadata, breadcrumbJsonLd } from '@/lib/seo';

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Governance', path: '/governance' },
];

export const metadata = buildMetadata({
  title: 'Corporate Governance',
  description:
    'Board structure, compliance philosophy and a privacy-first public disclosure policy at Pouch Care International Ltd. — a verified private limited company.',
  path: '/governance',
});

const principles = [
  {
    icon: 'Scale',
    title: 'Board oversight',
    description:
      'The board provides strategic direction and governance oversight across the company’s diversified divisions.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Compliance-first culture',
    description:
      'Every division operates on documented processes and audit-ready records, to international standards.',
  },
  {
    icon: 'Users',
    title: 'Accountable leadership',
    description:
      'Clear roles and responsibilities, with execution led by management and overseen by the board.',
  },
  {
    icon: 'FileText',
    title: 'Documented decisions',
    description:
      'Corporate records and constitutional documents anchor how the company is structured and run.',
  },
  {
    icon: 'Building2',
    title: 'Corporate integrity',
    description:
      'Operating as a registered private limited company with verifiable legal personality.',
  },
  {
    icon: 'Scale',
    title: 'Privacy by principle',
    description:
      'Transparent disclosure that protects sensitive personal data through redaction and masking.',
  },
];

const companyFacts = [
  { label: 'Company type', value: company.companyType },
  { label: 'Incorporated under', value: company.incorporatedUnder },
  { label: 'Certificate number', value: company.certificateNumber },
  { label: 'Registrar', value: company.registrar },
];

const placeholders = [
  {
    icon: 'FileText',
    title: 'Annual returns',
    description:
      'Statutory annual returns and filings will be published here as the company matures and reporting cycles begin.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Audit & accountability',
    description:
      'Independent audit and accountability reporting is planned and will be disclosed as operations scale.',
  },
];

export default function GovernancePage() {
  return (
    <>
      <SEOJsonLd data={breadcrumbJsonLd(breadcrumbs)} />

      <PageHero
        eyebrow="Governance"
        title="Governed for credibility, built for accountability"
        description="A compliance-first posture, documented decision-making and a privacy-respecting disclosure model — the groundwork for trusted partnerships and future investment."
        breadcrumbs={[{ name: 'Governance', path: '/governance' }]}
      />

      {/* Governance principles */}
      <Section>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Governance principles"
            title="The principles that guide how we operate"
            description="A consistent framework for oversight, compliance and accountability across every division."
          />
        </ScrollReveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((card, i) => (
            <ScrollReveal key={`${card.title}-${i}`} delay={(i % 3) * 0.06}>
              <GovernanceCard {...card} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Board structure */}
      <Section tone="muted">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Board structure"
              title="Leadership accountable to clear roles"
              description="Public-safe profiles of the board members who set direction and oversee governance. No private personal data is published."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <ul className="space-y-4">
              {boardMembers.map((member) => (
                <li
                  key={member.slug}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-sm font-semibold text-navy-700">
                    {member.initials}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-navy-900">
                      {member.name}
                    </h3>
                    <p className="mt-0.5 text-sm font-medium text-gold-700">
                      {member.role}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {member.summary}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </Section>

      {/* Private limited company summary */}
      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Corporate status"
              title="A verified private limited company"
              description="Pouch Care International Ltd. holds verifiable corporate legal personality as a private company limited by shares."
            />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              The company’s structure and constitution define its scope of
              business and internal governance rules, providing a stable,
              accountable foundation for long-term value creation.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-gold-50 text-gold-700">
                  <Icon name="Building2" className="size-5" />
                </span>
                <Badge variant="emerald">Verified</Badge>
              </div>
              <dl className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
                {companyFacts.map((fact) => (
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

      {/* Compliance philosophy */}
      <Section tone="navy">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <SectionHeading
              invert
              eyebrow="Compliance philosophy"
              title="Credibility earned through documented action"
              description="We believe trust is built, not claimed. Each division runs on documented standards and audit-ready records, so our conduct can be verified rather than assumed."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <ul className="space-y-3">
              {[
                'Documented processes and records across operating divisions',
                'Operating to international standards from a Bangladeshi foundation',
                'Forward-looking ambitions framed as roadmap, never as results',
                'Confidentiality-first handling of counterparty information',
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-ivory/80"
                >
                  <ShieldCheck
                    className="mt-0.5 size-5 shrink-0 text-gold-300"
                    aria-hidden="true"
                  />
                  <span className="text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </Section>

      {/* Planned reporting placeholders */}
      <Section>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Statutory reporting"
            title="Planned disclosures as the company matures"
            description="As reporting cycles begin, statutory and accountability records will be published here."
          />
        </ScrollReveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {placeholders.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.06}>
              <div className="flex h-full flex-col rounded-2xl border border-dashed border-border bg-secondary/40 p-7">
                <span className="flex size-11 items-center justify-center rounded-xl bg-navy-50 text-navy-700">
                  <Icon name={item.icon} className="size-5" />
                </span>
                <div className="mt-5 flex items-center gap-2">
                  <h3 className="text-base font-semibold text-navy-900">
                    {item.title}
                  </h3>
                  <Badge variant="outline">Planned</Badge>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <p className="mt-4 text-xs font-medium text-muted-foreground">
                  Planned — will be published as the company matures.
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Document governance */}
      <Section tone="muted">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Document governance"
            title="A transparent, public-safe document registry"
            description="Corporate documents are maintained with public-safe summaries and metadata. Raw scans are treated as private source files and never published."
          />
        </ScrollReveal>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {documents.map((doc, i) => (
            <ScrollReveal key={doc.id} delay={(i % 3) * 0.06}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-700">
                  {doc.category}
                </span>
                <h3 className="mt-2 text-base font-semibold text-navy-900">
                  {doc.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {doc.publicSummary}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </ul>
        <div className="mt-8">
          <Button href="/verification" variant="outline">
            <Icon name="ShieldCheck" className="size-4" />
            Open Verification Center
          </Button>
        </div>
      </Section>

      {/* Privacy-first disclosure policy */}
      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Disclosure policy"
              title="Privacy-first public disclosure"
              description="We disclose what builds trust while rigorously protecting sensitive personal data."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <ul className="space-y-3">
              {[
                'No national ID (NID) numbers or personal identifiers published',
                'No personal signatures or witness information disclosed',
                'No official seals or QR verification codes reproduced publicly',
                'Sensitive fields are masked; only public-safe data is shared',
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3.5 text-sm text-navy-800 shadow-soft"
                >
                  <ShieldCheck
                    className="mt-0.5 size-4 shrink-0 [color:hsl(var(--emerald))]"
                    aria-hidden="true"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </Section>

      <CTASection
        eyebrow="Governance & trust"
        title="Govern with us, transparently"
        description="Explore our verified records or start a conversation about partnership with a company built on accountability."
        primary={{ label: 'Start an inquiry', href: '/contact' }}
        secondary={{ label: 'Verification Center', href: '/verification' }}
      />
    </>
  );
}
