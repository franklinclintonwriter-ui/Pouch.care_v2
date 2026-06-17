import { Sparkles, Heart, Target, Compass, GraduationCap } from 'lucide-react';
import { Section } from '@/components/layout/section';
import { SectionHeading } from '@/components/layout/section-heading';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { EmptyState } from '@/components/ui/empty-state';
import { Icon } from '@/components/ui/icon';
import { PageHero } from '@/components/sections/page-hero';
import { CTASection } from '@/components/sections/cta-section';
import { ContactForm } from '@/components/forms/contact-form';
import { SEOJsonLd } from '@/components/seo/json-ld';
import { sortedDivisions } from '@/data/divisions';
import { buildMetadata, breadcrumbJsonLd } from '@/lib/seo';

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Careers', path: '/careers' },
];

export const metadata = buildMetadata({
  title: 'Careers at Pouch Care International Ltd.',
  description:
    'Build your career with a verified, diversified Bangladeshi enterprise. Explore our culture, divisions and planned opportunities, and register your interest for future roles.',
  path: '/careers',
});

const values: { icon: React.ReactNode; title: string; description: string }[] =
  [
    {
      icon: <Sparkles className="size-6" aria-hidden="true" />,
      title: 'Integrity first',
      description:
        'We operate with transparency and document-backed honesty. What we say publicly is what we can stand behind.',
    },
    {
      icon: <Icon name="ShieldCheck" className="size-6" />,
      title: 'Compliance mindset',
      description:
        'Governance and privacy are not afterthoughts. Everyone is empowered to do things the right way.',
    },
    {
      icon: <Icon name="Users" className="size-6" />,
      title: 'Collaboration',
      description:
        'We work across divisions, sharing knowledge so each team compounds the strengths of the whole group.',
    },
    {
      icon: <Heart className="size-6" aria-hidden="true" />,
      title: 'Care for outcomes',
      description:
        'We take pride in disciplined execution and lasting value over shortcuts and inflated claims.',
    },
    {
      icon: <Target className="size-6" aria-hidden="true" />,
      title: 'Ownership',
      description:
        'We hold ourselves accountable to clear scopes, measurable goals and honest reporting.',
    },
    {
      icon: <Compass className="size-6" aria-hidden="true" />,
      title: 'Long-term thinking',
      description:
        'We build for durability — sustainable practices and decisions that hold up over time.',
    },
  ];

export default function CareersPage() {
  return (
    <>
      <SEOJsonLd data={breadcrumbJsonLd(breadcrumbs)} />

      <PageHero
        eyebrow="Careers"
        breadcrumbs={breadcrumbs}
        title="Grow with a verified, diversified enterprise"
        description="Pouch Care International Ltd. is building across technology, trade, commerce, agriculture and advisory. As we grow, we are looking for principled people who value transparency and disciplined execution."
      />

      {/* Culture & values */}
      <Section>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Our culture"
            title="Values that shape how we work"
            description="A compliance-first, transparency-led culture where careful execution matters as much as ambition."
          />
        </ScrollReveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, i) => (
            <ScrollReveal key={value.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-gold-300/70 hover:shadow-elevated">
                <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-navy-50 text-navy-700">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-navy-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Departments */}
      <Section tone="muted">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Where you could work"
            title="Our divisions"
            description="Seven divisions, each grounded in a verified legal object. As teams take shape, opportunities will span all of these areas."
          />
        </ScrollReveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sortedDivisions.map((division, i) => (
            <ScrollReveal key={division.slug} delay={i * 0.04}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-gold-300/70 hover:shadow-elevated">
                <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-gold-50 text-gold-700">
                  <Icon name={division.icon} className="size-6" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900">
                  {division.shortName}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {division.tagline}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Future openings */}
      <Section>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Opportunities"
            title="Future openings"
            description="We are in an early, foundation-building phase. We are not actively recruiting yet — but we welcome your interest for upcoming roles."
          />
        </ScrollReveal>
        <ScrollReveal className="mt-10" delay={0.05}>
          <EmptyState
            title="No open roles right now"
            description="We are building our teams thoughtfully. As divisions mature, we will post roles here. Register your interest and we will reach out through a verified channel when relevant opportunities open."
            action={
              <Button href="/contact" variant="gold">
                Register interest
              </Button>
            }
          />
        </ScrollReveal>
      </Section>

      {/* Internships */}
      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <ScrollReveal>
            <Badge>Planned programme</Badge>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-navy-900 sm:text-4xl">
              Internships &amp; early-career pathways
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              We are planning a structured internship programme to nurture
              early-career talent across our divisions. The programme is in
              planning and not yet open for applications. Details, eligibility
              and timelines will be published here once finalised.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              In the meantime, students and graduates are welcome to register
              their interest so we can keep them informed.
            </p>
            <Button href="/contact" variant="outline" className="mt-6">
              Express interest in internships
            </Button>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
              <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-navy-50 text-navy-700">
                <GraduationCap className="size-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-navy-900">
                What we plan to offer
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <li>Mentorship from across our divisions (planned).</li>
                <li>Hands-on, real-project exposure (planned).</li>
                <li>
                  Structured learning in a compliance-first culture (planned).
                </li>
                <li>A transparent, documented experience (planned).</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Application / interest form */}
      <Section>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Stay in touch"
            title="Express your interest"
            description="Tell us a little about yourself and the areas you are interested in. We will keep your details on file and follow up through a verified channel when relevant roles open."
          />
        </ScrollReveal>
        <ScrollReveal className="mt-10" delay={0.05}>
          <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
            <p className="mb-6 rounded-xl bg-secondary/40 p-4 text-xs leading-relaxed text-muted-foreground">
              This is a demonstration form for illustrative purposes. Please do
              not submit sensitive personal data such as national ID, passport
              numbers, or other identifiers. We will respond through a verified
              channel.
            </p>
            <ContactForm defaultDepartment="Careers" />
          </div>
        </ScrollReveal>
      </Section>

      <CTASection
        eyebrow="Join us"
        title="Be part of what we are building"
        description="If our values resonate with you, register your interest and grow with a transparent, compliance-first enterprise."
        primary={{ label: 'Register interest', href: '/contact' }}
      />
    </>
  );
}
