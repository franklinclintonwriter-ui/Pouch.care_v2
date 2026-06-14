import {
  ArrowRight,
  ShieldCheck,
  Scale,
  TrendingUp,
  Target,
  Compass,
  CheckCircle2,
} from 'lucide-react';
import { Hero } from '@/components/sections/hero';
import { Section } from '@/components/layout/section';
import { SectionHeading } from '@/components/layout/section-heading';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { StatsCard } from '@/components/cards/stats-card';
import { BusinessDivisionCard } from '@/components/cards/business-division-card';
import { LeadershipCard } from '@/components/cards/leadership-card';
import { PostCard } from '@/components/cards/post-card';
import { GovernanceCard } from '@/components/cards/governance-card';
import { Timeline } from '@/components/sections/timeline';
import { CTASection } from '@/components/sections/cta-section';
import { Button } from '@/components/ui/button';
import { StatusBadge } from '@/components/ui/status-badge';
import { Container } from '@/components/layout/container';
import { stats } from '@/data/stats';
import { sortedDivisions } from '@/data/divisions';
import { boardMembers } from '@/data/leadership';
import { timeline } from '@/data/timeline';
import { sortedNews } from '@/data/news';
import { sortedInsights } from '@/data/insights';
import { documents, resolveDocumentStatus } from '@/data/documents';
import { company } from '@/data/company';

export default function HomePage() {
  const featuredDoc = documents[0]!;

  return (
    <>
      <Hero />

      {/* Premium statistics */}
      <Section>
        <ScrollReveal>
          <SectionHeading
            eyebrow="At a glance"
            title="A verified foundation, built for scale"
            description="Pouch Care International Ltd. combines a verified legal foundation with a diversified operating mandate — a disciplined platform for long-term growth."
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

      {/* Business divisions */}
      <Section tone="muted">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Business divisions"
              title="Seven divisions, one disciplined enterprise"
              description="A diversified ecosystem aligned to our legal objects — designed so each division can reinforce the others."
            />
          </ScrollReveal>
          <Button href="/business" variant="outline" className="shrink-0">
            View all divisions
            <ArrowRight className="size-4" />
          </Button>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sortedDivisions.map((division, i) => (
            <ScrollReveal key={division.slug} delay={(i % 3) * 0.06}>
              <BusinessDivisionCard division={division} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Mission & purpose */}
      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Purpose & mission"
              title="Transparent by principle, diversified by design"
            />
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              {company.missionStatement}
            </p>
            <div className="mt-8 space-y-4">
              {[
                {
                  icon: Target,
                  title: 'Mission',
                  body: 'Create durable value across multiple sectors while operating to international standards of governance.',
                },
                {
                  icon: Compass,
                  title: 'Vision',
                  body: company.visionStatement,
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
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

          <ScrollReveal delay={0.1}>
            <div className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-gold-700">
                Legal objects
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Authorised business activities under our Memorandum of
                Association.
              </p>
              <ul className="mt-5 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {company.objects.map((obj) => (
                  <li
                    key={obj}
                    className="flex items-start gap-2 text-sm text-navy-800"
                  >
                    <CheckCircle2
                      className="mt-0.5 size-4 shrink-0 [color:hsl(var(--emerald))]"
                      aria-hidden="true"
                    />
                    {obj}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Legal verification preview */}
      <Section tone="navy">
        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal>
              <SectionHeading
                invert
                eyebrow="Verification Center"
                title="Trust you can independently verify"
                description="We publish public-safe document metadata and redacted previews — never sensitive personal data. Credibility, built on transparency that respects privacy."
              />
              <ul className="mt-7 space-y-3">
                {[
                  'Public-safe document registry with verification status',
                  'Redacted previews — sensitive fields are masked',
                  'Raw scans treated as private source files, never published',
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
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/verification" variant="gold">
                  Open Verification Center
                  <ArrowRight className="size-4" />
                </Button>
                <Button
                  href="/documents"
                  variant="outline"
                  className="border-white/20 text-ivory hover:border-gold-300 hover:text-ivory"
                >
                  Browse documents
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-300">
                    Featured record
                  </span>
                  <StatusBadge status={resolveDocumentStatus(featuredDoc)} />
                </div>
                <h3 className="mt-4 font-serif text-xl font-semibold text-ivory">
                  {featuredDoc.title}
                </h3>
                <p className="mt-2 text-sm text-ivory/70">
                  {featuredDoc.publicSummary}
                </p>
                <dl className="mt-5 grid grid-cols-2 gap-4 border-t border-white/10 pt-5">
                  {featuredDoc.disclosedFields.slice(0, 4).map((f) => (
                    <div key={f.label}>
                      <dt className="text-[11px] uppercase tracking-wide text-ivory/50">
                        {f.label}
                      </dt>
                      <dd className="text-sm font-semibold text-ivory">
                        {f.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </Section>

      {/* Corporate timeline */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Corporate timeline"
              title="Our journey — verified milestones and a clear roadmap"
              description="Completed milestones are document-backed. Forward-looking items are presented as roadmap, not results."
            />
            <Button href="/about" variant="link" className="mt-6">
              Read the full company story
              <ArrowRight className="size-4" />
            </Button>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Timeline items={timeline} />
          </ScrollReveal>
        </div>
      </Section>

      {/* Leadership preview */}
      <Section tone="muted">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Leadership"
              title="Led with accountability"
              description="Public-safe profiles of the board and executive leadership guiding the company."
            />
          </ScrollReveal>
          <Button href="/leadership" variant="outline" className="shrink-0">
            Meet the leadership
            <ArrowRight className="size-4" />
          </Button>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {boardMembers.map((leader, i) => (
            <ScrollReveal key={leader.slug} delay={i * 0.08}>
              <LeadershipCard leader={leader} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Governance & investor readiness */}
      <Section>
        <ScrollReveal>
          <SectionHeading
            align="center"
            eyebrow="Governance & investor readiness"
            title="Structured for credibility and growth"
            description="A compliance-first posture and a transparent disclosure model — the groundwork for partnerships and future investment."
          />
        </ScrollReveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            {
              icon: 'Scale',
              title: 'Corporate governance',
              description:
                'Board oversight, documented processes, and a privacy-first public disclosure policy.',
            },
            {
              icon: 'ShieldCheck',
              title: 'Compliance philosophy',
              description:
                'Operating each division on documented standards with audit-ready records.',
            },
            {
              icon: 'TrendingUp',
              title: 'Investor readiness',
              description:
                'A clear snapshot, roadmap, and corporate documents — careful, claim-free language.',
            },
          ].map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.06}>
              <GovernanceCard {...card} />
            </ScrollReveal>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/governance" variant="primary">
            <Scale className="size-4" />
            Governance
          </Button>
          <Button href="/investor-relations" variant="outline">
            <TrendingUp className="size-4" />
            Investor Relations
          </Button>
        </div>
      </Section>

      {/* Newsroom + Insights */}
      <Section tone="muted">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Newsroom & insights"
              title="Latest updates and perspectives"
            />
          </ScrollReveal>
          <div className="flex gap-3">
            <Button href="/newsroom" variant="outline" size="sm">
              Newsroom
            </Button>
            <Button href="/insights" variant="outline" size="sm">
              Insights
            </Button>
          </div>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sortedNews.slice(0, 1).map((post) => (
            <ScrollReveal key={post.slug}>
              <PostCard
                href={`/newsroom/${post.slug}`}
                title={post.title}
                excerpt={post.excerpt}
                category={post.category}
                dateLabel={post.dateLabel}
                readingTime={post.readingTime}
              />
            </ScrollReveal>
          ))}
          {sortedInsights.slice(0, 2).map((post, i) => (
            <ScrollReveal key={post.slug} delay={(i + 1) * 0.06}>
              <PostCard
                href={`/insights/${post.slug}`}
                title={post.title}
                excerpt={post.excerpt}
                category={post.category}
                dateLabel={post.dateLabel}
                readingTime={post.readingTime}
              />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <CTASection
        title="Let's build something verifiable together"
        description="Whether you are a partner, supplier, customer, or future investor — start a conversation with a company built on transparency."
      />
    </>
  );
}
