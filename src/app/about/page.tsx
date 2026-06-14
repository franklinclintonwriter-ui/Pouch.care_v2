import Link from 'next/link';
import { ArrowRight, CheckCircle2, Target, Compass } from 'lucide-react';
import { Section } from '@/components/layout/section';
import { SectionHeading } from '@/components/layout/section-heading';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { StatsCard } from '@/components/cards/stats-card';
import { GovernanceCard } from '@/components/cards/governance-card';
import { Timeline } from '@/components/sections/timeline';
import { CTASection } from '@/components/sections/cta-section';
import { PageHero } from '@/components/sections/page-hero';
import { SEOJsonLd } from '@/components/seo/json-ld';
import { company } from '@/data/company';
import { stats } from '@/data/stats';
import { sortedDivisions } from '@/data/divisions';
import { timeline } from '@/data/timeline';
import { buildMetadata, breadcrumbJsonLd } from '@/lib/seo';

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
];

export const metadata = buildMetadata({
  title: 'About Pouch Care International Ltd.',
  description:
    'A verified, diversified Bangladeshi private limited company building across technology, trade, commerce, agriculture and advisory — transparent by principle.',
  path: '/about',
});

const principles = [
  {
    icon: 'ShieldCheck',
    title: 'Transparency first',
    description:
      'We publish public-safe, document-backed facts and present forward-looking ambitions as roadmap — never as results.',
  },
  {
    icon: 'Scale',
    title: 'Compliance by design',
    description:
      'Each division is built on documented processes and audit-ready records, operating to international standards from a Bangladeshi foundation.',
  },
  {
    icon: 'Users',
    title: 'Privacy-respecting disclosure',
    description:
      'We share what builds trust while protecting sensitive personal data — redaction and masking are default practice.',
  },
  {
    icon: 'TrendingUp',
    title: 'Disciplined growth',
    description:
      'Diversification with discipline: we scale priority divisions only against verified demand and sound governance.',
  },
];

export default function AboutPage() {
  return (
    <>
      <SEOJsonLd data={breadcrumbJsonLd(breadcrumbs)} />

      <PageHero
        eyebrow="About the company"
        title="A verified, diversified enterprise built on transparency"
        description={company.tagline}
        breadcrumbs={[{ name: 'About', path: '/about' }]}
      />

      {/* Summary + mission & vision */}
      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Who we are"
              title="Transparent by principle, diversified by design"
              description={company.summary}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="space-y-4">
              {[
                {
                  icon: Target,
                  title: 'Mission',
                  body: company.missionStatement,
                },
                {
                  icon: Compass,
                  title: 'Vision',
                  body: company.visionStatement,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gold-50 text-gold-700">
                    <item.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-navy-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Stats grid */}
      <Section tone="muted">
        <ScrollReveal>
          <SectionHeading
            eyebrow="At a glance"
            title="A verified foundation, built for scale"
            description="Structural facts about the company — no invented metrics, only verifiable foundations."
          />
        </ScrollReveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.id} delay={i * 0.06}>
              <StatsCard stat={stat} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Legal objects */}
      <Section>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Our legal objects"
            title="Authorised business activities"
            description="The activities the company is authorised to undertake under its Memorandum of Association."
          />
        </ScrollReveal>
        <ul className="mt-10 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {company.objects.map((obj, i) => (
            <ScrollReveal key={obj} delay={(i % 3) * 0.05}>
              <li className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3.5 text-sm text-navy-800 shadow-soft">
                <CheckCircle2
                  className="mt-0.5 size-4 shrink-0 [color:hsl(var(--emerald))]"
                  aria-hidden="true"
                />
                {obj}
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </Section>

      {/* Business divisions mini-grid */}
      <Section tone="muted">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Business divisions"
            title="Seven divisions, one disciplined enterprise"
            description="A diversified ecosystem aligned to our legal objects — each division designed to reinforce the others."
          />
        </ScrollReveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sortedDivisions.map((division, i) => (
            <ScrollReveal key={division.slug} delay={(i % 3) * 0.06}>
              <Link
                href={`/business/${division.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-colors hover:border-gold-300"
              >
                <h3 className="text-base font-semibold text-navy-900">
                  {division.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {division.tagline}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-700">
                  Explore division
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Corporate timeline */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Corporate timeline"
              title="Verified milestones and a clear roadmap"
              description="Completed milestones are document-backed. Forward-looking items are presented as roadmap, not results."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Timeline items={timeline} />
          </ScrollReveal>
        </div>
      </Section>

      {/* Values / principles */}
      <Section tone="muted">
        <ScrollReveal>
          <SectionHeading
            align="center"
            eyebrow="Our principles"
            title="The standards we hold ourselves to"
            description="Values that shape how we build, govern and disclose across every division."
          />
        </ScrollReveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.06}>
              <GovernanceCard {...card} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <CTASection
        title="Build something verifiable with us"
        description="Whether you are a partner, supplier, customer or future investor, start a conversation with a company built on transparency."
      />
    </>
  );
}
