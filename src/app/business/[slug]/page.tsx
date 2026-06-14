import { notFound } from 'next/navigation';
import {
  ArrowRight,
  Scale,
  CheckCircle2,
  ShieldCheck,
  Layers,
  Factory,
} from 'lucide-react';
import { Section } from '@/components/layout/section';
import { SectionHeading } from '@/components/layout/section-heading';
import { PageHero } from '@/components/sections/page-hero';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { Icon } from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CTASection } from '@/components/sections/cta-section';
import { SEOJsonLd } from '@/components/seo/json-ld';
import {
  divisions,
  getDivisionBySlug,
  sortedDivisions,
} from '@/data/divisions';
import { buildMetadata, breadcrumbJsonLd } from '@/lib/seo';

export function generateStaticParams() {
  return divisions.map((d) => ({ slug: d.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const division = getDivisionBySlug(params.slug);
  if (!division)
    return buildMetadata({
      title: 'Division',
      description: '',
      path: '/business',
    });
  return buildMetadata({
    title: division.name,
    description: division.summary,
    path: `/business/${division.slug}`,
    keywords: [division.name, division.shortName, 'Pouch Care', 'Bangladesh'],
  });
}

export default function DivisionPage({ params }: { params: { slug: string } }) {
  const division = getDivisionBySlug(params.slug);
  if (!division) notFound();

  const others = sortedDivisions
    .filter((d) => d.slug !== division.slug)
    .slice(0, 3);

  return (
    <>
      <SEOJsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Business', path: '/business' },
          { name: division.name, path: `/business/${division.slug}` },
        ])}
      />

      <PageHero
        eyebrow={division.shortName}
        title={division.name}
        description={division.heroStatement}
        breadcrumbs={[
          { name: 'Business', path: '/business' },
          { name: division.name, path: `/business/${division.slug}` },
        ]}
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/contact?type=business" variant="gold">
            Business inquiry
            <ArrowRight className="size-4" />
          </Button>
          <Button
            href="/business"
            variant="outline"
            className="border-white/20 text-ivory hover:border-gold-300 hover:text-ivory"
          >
            All divisions
          </Button>
        </div>
      </PageHero>

      {/* Executive summary + legal basis */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Executive summary"
              title={division.tagline}
              description={division.summary}
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
              <span className="flex size-11 items-center justify-center rounded-xl bg-gold-50 text-gold-700">
                <Scale className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-navy-900">
                Legal basis — MOA object
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {division.legalBasis}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Services + operating model */}
      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Services"
              title="What this division offers"
            />
            <ul className="mt-7 space-y-3">
              {division.services.map((service) => (
                <li
                  key={service}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-soft"
                >
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 [color:hsl(var(--emerald))]"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium text-navy-800">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <SectionHeading eyebrow="Operating model" title="How we operate" />
            <div className="mt-7 space-y-4">
              {division.operatingModel.map((model) => (
                <div
                  key={model.title}
                  className="rounded-xl border border-border bg-card p-5 shadow-soft"
                >
                  <h3 className="text-sm font-semibold text-navy-900">
                    {model.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {model.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Industries + compliance */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
                <Factory className="size-5" aria-hidden="true" />
              </span>
              <h2 className="text-2xl font-semibold text-navy-900">
                Industries served
              </h2>
            </div>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {division.industriesServed.map((industry) => (
                <Badge
                  key={industry}
                  variant="default"
                  className="px-3.5 py-1.5"
                >
                  {industry}
                </Badge>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-lg bg-emerald/10 [color:hsl(var(--emerald))]">
                <ShieldCheck className="size-5" aria-hidden="true" />
              </span>
              <h2 className="text-2xl font-semibold text-navy-900">
                Compliance & trust
              </h2>
            </div>
            <ul className="mt-6 space-y-3">
              {division.compliance.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-navy-800"
                >
                  <CheckCircle2
                    className="mt-0.5 size-4 shrink-0 [color:hsl(var(--emerald))]"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </Section>

      {/* Roadmap */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Future roadmap"
          title="A phased, disciplined build-out"
          description="Forward-looking phases are presented as roadmap, not current results."
        />
        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {division.roadmap.map((phase, i) => (
            <ScrollReveal key={phase.phase} delay={i * 0.06} as="div">
              <li className="relative h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-700">
                  {phase.phase}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-navy-900">
                  {phase.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {phase.description}
                </p>
              </li>
            </ScrollReveal>
          ))}
        </ol>
      </Section>

      {/* Case study placeholder */}
      <Section>
        <div className="rounded-2xl border border-dashed border-border bg-secondary/40 p-8 text-center sm:p-12">
          <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-navy-50 text-navy-500">
            <Layers className="size-6" aria-hidden="true" />
          </span>
          <h2 className="mt-5 text-xl font-semibold text-navy-900">
            {division.caseStudyPlaceholder.title}
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
            {division.caseStudyPlaceholder.description}
          </p>
        </div>
      </Section>

      {/* Other divisions */}
      <Section tone="muted">
        <SectionHeading eyebrow="Explore" title="Other divisions" />
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {others.map((d) => (
            <a
              key={d.slug}
              href={`/business/${d.slug}`}
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-gold-300/70 hover:shadow-elevated"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-navy-50 text-navy-700 group-hover:bg-gold-50 group-hover:text-gold-700">
                <Icon name={d.icon} className="size-5" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-navy-900">
                  {d.name}
                </span>
                <span className="block text-xs text-muted-foreground">
                  {d.tagline}
                </span>
              </span>
            </a>
          ))}
        </div>
      </Section>

      <CTASection
        title={`Partner with our ${division.shortName} division`}
        description="Start a business inquiry and our team will respond through a verified channel."
        primary={{ label: 'Business inquiry', href: '/contact?type=business' }}
        secondary={{ label: 'View all divisions', href: '/business' }}
      />
    </>
  );
}
