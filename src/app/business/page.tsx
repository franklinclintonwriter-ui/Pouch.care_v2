import { ArrowRight, Layers, Workflow, Network } from 'lucide-react';
import { Section } from '@/components/layout/section';
import { SectionHeading } from '@/components/layout/section-heading';
import { PageHero } from '@/components/sections/page-hero';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { Button } from '@/components/ui/button';
import { BusinessDivisionCard } from '@/components/cards/business-division-card';
import { CTASection } from '@/components/sections/cta-section';
import { SEOJsonLd } from '@/components/seo/json-ld';
import { sortedDivisions } from '@/data/divisions';
import { company } from '@/data/company';
import { buildMetadata, breadcrumbJsonLd } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Business Divisions',
  description:
    'Explore the diversified divisions of Pouch Care International Ltd. — a verified, compliance-first enterprise operating across technology, trade, commerce, agriculture, and advisory.',
  path: '/business',
});

const connections = [
  {
    icon: Layers,
    title: 'A shared foundation',
    body: 'Every division operates under the same legal objects, governance philosophy, and privacy-first disclosure standards — a single, disciplined operating culture across the group.',
  },
  {
    icon: Workflow,
    title: 'Complementary capabilities',
    body: 'Trading and e-commerce, technology and digital services, agriculture and advisory — each division can supply, enable, or distribute for the others, reducing dependence on any single market.',
  },
  {
    icon: Network,
    title: 'Compounding value',
    body: 'Diversification is designed, not accidental. Capabilities built in one division become reusable infrastructure for the next, helping the enterprise scale with resilience.',
  },
];

export default function BusinessPage() {
  return (
    <>
      <SEOJsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Business', path: '/business' },
        ])}
      />

      <PageHero
        eyebrow="Business divisions"
        title="One diversified enterprise, built across complementary sectors"
        description="Pouch Care International Ltd. develops a deliberately diversified business ecosystem — uniting technology, trade, commerce, agriculture, and advisory under a single, verified, compliance-first foundation."
        breadcrumbs={[{ name: 'Business', path: '/business' }]}
      />

      <Section>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Our divisions"
            title="A portfolio designed for durable, balanced growth"
            description={company.summary}
          />
        </ScrollReveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sortedDivisions.map((division, i) => (
            <ScrollReveal key={division.slug} delay={(i % 3) * 0.06}>
              <BusinessDivisionCard division={division} />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <ScrollReveal>
          <SectionHeading
            align="center"
            eyebrow="How our divisions connect"
            title="Diversified by design, not by chance"
            description="Our divisions are structured to reinforce one another — sharing standards, capabilities, and infrastructure so the whole enterprise is stronger than the sum of its parts."
          />
        </ScrollReveal>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {connections.map((item, i) => (
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
          <Button href="/about" variant="outline">
            Learn about the company
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </Section>

      <CTASection
        eyebrow="Work with our divisions"
        title="Partner with a diversified, verifiable enterprise"
        description="Whether you are a supplier, customer, or collaborator, our divisions are open to disciplined, transparent partnerships built for the long term."
      />
    </>
  );
}
