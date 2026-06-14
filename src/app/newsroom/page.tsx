import { Section } from '@/components/layout/section';
import { SectionHeading } from '@/components/layout/section-heading';
import { PageHero } from '@/components/sections/page-hero';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { PostCard } from '@/components/cards/post-card';
import { CTASection } from '@/components/sections/cta-section';
import { SEOJsonLd } from '@/components/seo/json-ld';
import { sortedNews } from '@/data/news';
import { buildMetadata, breadcrumbJsonLd } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Newsroom',
  description:
    'Official news and announcements from Pouch Care International Ltd. — corporate updates from a verified, diversified Bangladeshi enterprise.',
  path: '/newsroom',
});

export default function NewsroomPage() {
  return (
    <>
      <SEOJsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Newsroom', path: '/newsroom' },
        ])}
      />

      <PageHero
        eyebrow="Newsroom"
        title="Official news and corporate announcements"
        description="The latest updates from Pouch Care International Ltd. — milestones, announcements, and developments across our divisions, reported with careful, claim-free language."
        breadcrumbs={[{ name: 'Newsroom', path: '/newsroom' }]}
      />

      <Section>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Latest updates"
            title="What's new at Pouch Care"
            description="Browse our most recent corporate news and announcements."
          />
        </ScrollReveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sortedNews.map((post, i) => (
            <ScrollReveal key={post.slug} delay={(i % 3) * 0.06}>
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
        </div>
      </Section>

      <CTASection
        eyebrow="Media & press"
        title="Have a media or press inquiry?"
        description="For interviews, statements, or further information about our announcements, reach our team through a verified business channel."
      />
    </>
  );
}
