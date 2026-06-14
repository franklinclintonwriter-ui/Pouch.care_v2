import { Section } from '@/components/layout/section';
import { SectionHeading } from '@/components/layout/section-heading';
import { PageHero } from '@/components/sections/page-hero';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { Badge } from '@/components/ui/badge';
import { PostCard } from '@/components/cards/post-card';
import { CTASection } from '@/components/sections/cta-section';
import { SEOJsonLd } from '@/components/seo/json-ld';
import { sortedInsights, insightCategories } from '@/data/insights';
import { buildMetadata, breadcrumbJsonLd } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Insights',
  description:
    'Perspectives and analysis from Pouch Care International Ltd. on governance, transparency, and building a diversified, compliance-first enterprise.',
  path: '/insights',
});

export default function InsightsPage() {
  return (
    <>
      <SEOJsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Insights', path: '/insights' },
        ])}
      />

      <PageHero
        eyebrow="Insights"
        title="Perspectives on building a transparent enterprise"
        description="Analysis and thinking from Pouch Care International Ltd. on governance, diversification, and the discipline of building a verifiable business for the long term."
        breadcrumbs={[{ name: 'Insights', path: '/insights' }]}
      />

      <Section>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Explore by topic"
            title="Ideas across our areas of focus"
            description="Our insights span the themes that shape how we build — from governance to growth across our divisions."
          />
        </ScrollReveal>
        <div className="mt-8 flex flex-wrap gap-2.5">
          {insightCategories.map((category) => (
            <Badge key={category} variant="outline">
              {category}
            </Badge>
          ))}
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sortedInsights.map((post, i) => (
            <ScrollReveal key={post.slug} delay={(i % 3) * 0.06}>
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
        eyebrow="Stay informed"
        title="Want to discuss our perspective?"
        description="Reach out to explore partnerships or share a perspective with a company built on transparency and disciplined execution."
      />
    </>
  );
}
