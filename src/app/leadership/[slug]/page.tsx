import { notFound } from 'next/navigation';
import { Quote, Target, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Section } from '@/components/layout/section';
import { SectionHeading } from '@/components/layout/section-heading';
import { PageHero } from '@/components/sections/page-hero';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { CTASection } from '@/components/sections/cta-section';
import { SEOJsonLd } from '@/components/seo/json-ld';
import { leaders, getLeaderBySlug } from '@/data/leadership';
import { buildMetadata, breadcrumbJsonLd } from '@/lib/seo';
import { SITE_URL } from '@/lib/site';

export function generateStaticParams() {
  return leaders.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const leader = getLeaderBySlug(params.slug);
  if (!leader)
    return buildMetadata({
      title: 'Leadership',
      description: '',
      path: '/leadership',
    });
  return buildMetadata({
    title: `${leader.name} — ${leader.role}`,
    description: leader.summary,
    path: `/leadership/${leader.slug}`,
    keywords: [leader.name, leader.role, 'Pouch Care leadership'],
  });
}

export default function LeaderPage({ params }: { params: { slug: string } }) {
  const leader = getLeaderBySlug(params.slug);
  if (!leader) notFound();

  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: leader.name,
    jobTitle: leader.role,
    worksFor: {
      '@type': 'Organization',
      name: 'Pouch Care International Ltd.',
      url: SITE_URL,
    },
  };

  return (
    <>
      <SEOJsonLd
        data={[
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Leadership', path: '/leadership' },
            { name: leader.name, path: `/leadership/${leader.slug}` },
          ]),
          personJsonLd,
        ]}
      />

      <PageHero
        eyebrow={leader.shortRole}
        title={leader.name}
        description={leader.summary}
        breadcrumbs={[
          { name: 'Leadership', path: '/leadership' },
          { name: leader.name, path: `/leadership/${leader.slug}` },
        ]}
      >
        <div className="flex items-center gap-4">
          <span
            className="flex size-16 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-xl font-semibold text-gold-300"
            aria-hidden="true"
          >
            {leader.initials}
          </span>
          <div>
            <p className="text-sm font-semibold text-ivory">{leader.role}</p>
            <p className="text-sm text-ivory/60">Board member</p>
          </div>
        </div>
      </PageHero>

      {/* Message */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <ScrollReveal>
            <SectionHeading
              eyebrow={leader.isBoardMember ? 'Leadership message' : 'Message'}
              title={`A message from the ${leader.role}`}
            />
            <figure className="mt-7 rounded-2xl border-l-4 border-gold-500 bg-secondary/40 p-7">
              <Quote className="size-8 text-gold-500/50" aria-hidden="true" />
              <blockquote className="mt-4 font-serif text-lg leading-relaxed text-navy-900">
                {leader.message}
              </blockquote>
              <figcaption className="mt-5 text-sm font-semibold text-navy-800">
                {leader.name}
                <span className="font-normal text-muted-foreground">
                  {' '}
                  · {leader.role}
                </span>
              </figcaption>
            </figure>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="space-y-6">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-gold-50 text-gold-700">
                    <Target className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-semibold text-navy-900">
                    Focus areas
                  </h3>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {leader.focusAreas.map((area) => (
                    <li
                      key={area}
                      className="flex items-start gap-2.5 text-sm text-navy-800"
                    >
                      <CheckCircle2
                        className="mt-0.5 size-4 shrink-0 [color:hsl(var(--emerald))]"
                        aria-hidden="true"
                      />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                    <ShieldCheck className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-semibold text-navy-900">
                    Responsibilities
                  </h3>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {leader.responsibilities.map((r) => (
                    <li
                      key={r}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <span
                        className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gold-500"
                        aria-hidden="true"
                      />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Privacy note */}
      <Section className="!pt-0">
        <div className="rounded-2xl border border-border bg-secondary/40 p-5 text-sm text-muted-foreground">
          This profile is presented in a public-safe format. In line with our
          privacy policy, we do not publish private personal identifiers,
          contact details, or home addresses for any individual.
        </div>
      </Section>

      <CTASection
        eyebrow="Get in touch"
        title="Connect with our leadership team"
        description="For partnership, governance, or corporate inquiries, reach our team through a verified channel."
        primary={{ label: 'Contact us', href: '/contact' }}
        secondary={{ label: 'View governance', href: '/governance' }}
      />
    </>
  );
}
