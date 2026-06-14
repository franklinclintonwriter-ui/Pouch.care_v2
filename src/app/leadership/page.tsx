import { ArrowRight, Scale, ShieldCheck, Compass } from 'lucide-react';
import { Section } from '@/components/layout/section';
import { SectionHeading } from '@/components/layout/section-heading';
import { PageHero } from '@/components/sections/page-hero';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { Button } from '@/components/ui/button';
import { LeadershipCard } from '@/components/cards/leadership-card';
import { CTASection } from '@/components/sections/cta-section';
import { SEOJsonLd } from '@/components/seo/json-ld';
import { boardMembers } from '@/data/leadership';
import { buildMetadata, breadcrumbJsonLd } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Leadership',
  description:
    'Meet the board and executive leadership of Pouch Care International Ltd. — public-safe profiles of the people guiding strategy, governance, and disciplined execution.',
  path: '/leadership',
});

const principles = [
  {
    icon: Scale,
    title: 'Board oversight',
    body: 'Strategic direction and accountability are set at board level, with documented governance and a clear separation between oversight and execution.',
  },
  {
    icon: ShieldCheck,
    title: 'Privacy-first disclosure',
    body: 'We publish public-safe leadership information only — never private identifiers, personal contact details, or home addresses.',
  },
  {
    icon: Compass,
    title: 'Long-term stewardship',
    body: 'Leadership is measured by durable value creation and verified action, not short-term claims.',
  },
];

export default function LeadershipPage() {
  const chairman = boardMembers[0];

  return (
    <>
      <SEOJsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Leadership', path: '/leadership' },
        ])}
      />

      <PageHero
        eyebrow="Leadership"
        title="Led with accountability and long-term discipline"
        description="The board and executive leadership of Pouch Care International Ltd. guide the company with a compliance-first philosophy and a commitment to transparent, verified action."
        breadcrumbs={[{ name: 'Leadership', path: '/leadership' }]}
      />

      <Section>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Board overview"
            title="The people setting our direction"
            description="Our board provides strategic direction and governance oversight across the company's diversified divisions. The profiles below are public-safe and contain no private personal data."
          />
        </ScrollReveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {boardMembers.map((leader, i) => (
            <ScrollReveal key={leader.slug} delay={i * 0.08}>
              <LeadershipCard leader={leader} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {chairman ? (
        <Section tone="muted">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Founder & Chairman's message"
              title="A word from our leadership"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <figure className="mt-10 rounded-2xl border border-border bg-card p-8 shadow-soft sm:p-12">
              <blockquote className="border-l-4 border-gold-400 pl-6 sm:pl-8">
                <p className="text-balance font-serif text-2xl font-medium leading-relaxed text-navy-900 sm:text-3xl">
                  &ldquo;{chairman.message}&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-7 pl-6 sm:pl-8">
                <span className="block text-base font-semibold text-navy-900">
                  {chairman.name}
                </span>
                <span className="mt-0.5 block text-sm text-gold-700">
                  {chairman.role}
                </span>
              </figcaption>
            </figure>
          </ScrollReveal>
        </Section>
      ) : null}

      <Section>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Executive vision"
            title="The priorities shaping our enterprise"
            description="Across the board, leadership stays focused on a clear set of professional priorities that guide how the company is built and governed."
          />
        </ScrollReveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {boardMembers.map((leader, i) => (
            <ScrollReveal key={leader.slug} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-soft">
                <h3 className="text-base font-semibold text-navy-900">
                  {leader.name}
                </h3>
                <p className="mt-0.5 text-sm text-gold-700">{leader.role}</p>
                <ul className="mt-5 space-y-2.5">
                  {leader.focusAreas.map((area) => (
                    <li
                      key={area}
                      className="flex items-start gap-2.5 text-sm text-navy-800"
                    >
                      <span
                        className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold-500"
                        aria-hidden="true"
                      />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <ScrollReveal>
          <SectionHeading
            align="center"
            eyebrow="Governance principles"
            title="Leadership grounded in transparent governance"
            description="Our leadership operates within a documented governance framework built on oversight, privacy, and long-term stewardship."
          />
        </ScrollReveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {principles.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-soft">
                <span className="flex size-11 items-center justify-center rounded-xl bg-gold-50 text-gold-700">
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button href="/governance" variant="primary">
            <Scale className="size-4" />
            Explore our governance
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </Section>

      <CTASection
        eyebrow="Connect with leadership"
        title="Start a conversation with a company built on transparency"
        description="For partnership, governance, or investor inquiries, reach our leadership through a verified business channel."
      />
    </>
  );
}
