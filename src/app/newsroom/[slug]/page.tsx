import { notFound } from 'next/navigation';
import { CalendarDays, Clock, User, ArrowLeft } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { PageHero } from '@/components/sections/page-hero';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { PostCard } from '@/components/cards/post-card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/layout/section-heading';
import { SEOJsonLd } from '@/components/seo/json-ld';
import { news, getNewsBySlug, sortedNews } from '@/data/news';
import { buildMetadata, breadcrumbJsonLd, articleJsonLd } from '@/lib/seo';

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getNewsBySlug(params.slug);
  if (!post)
    return buildMetadata({
      title: 'Newsroom',
      description: '',
      path: '/newsroom',
    });
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/newsroom/${post.slug}`,
    type: 'article',
    publishedTime: post.date,
    authors: [post.author],
    keywords: [post.category, 'Pouch Care news'],
    image: post.image,
  });
}

export default function NewsArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getNewsBySlug(params.slug);
  if (!post) notFound();

  const related = sortedNews.filter((n) => n.slug !== post.slug).slice(0, 3);

  return (
    <>
      <SEOJsonLd
        data={[
          breadcrumbJsonLd([
            { name: 'Home', path: '/' },
            { name: 'Newsroom', path: '/newsroom' },
            { name: post.title, path: `/newsroom/${post.slug}` },
          ]),
          articleJsonLd({
            title: post.title,
            description: post.excerpt,
            path: `/newsroom/${post.slug}`,
            datePublished: post.date,
            author: post.author,
          }),
        ]}
      />

      <PageHero
        eyebrow="Newsroom"
        title={post.title}
        description={post.excerpt}
        breadcrumbs={[
          { name: 'Newsroom', path: '/newsroom' },
          { name: post.title, path: `/newsroom/${post.slug}` },
        ]}
      >
        <div className="flex flex-wrap items-center gap-4 text-sm text-ivory/70">
          <Badge variant="gold">{post.category}</Badge>
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-4" aria-hidden="true" />
            {post.dateLabel}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-4" aria-hidden="true" />
            {post.readingTime}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <User className="size-4" aria-hidden="true" />
            {post.author}
          </span>
        </div>
      </PageHero>

      <Section>
        <Container size="narrow">
          {post.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.image}
              alt={post.title}
              className="mb-10 aspect-[16/9] w-full rounded-2xl object-cover shadow-elevated"
            />
          ) : null}
          <article className="prose-enterprise">
            {post.body.map((para, i) => (
              <p
                key={i}
                className="mb-5 text-base leading-relaxed text-navy-800 first:text-lg first:text-navy-900"
              >
                {para}
              </p>
            ))}
          </article>

          <div className="mt-10 border-t border-border pt-6">
            <Button href="/newsroom" variant="link">
              <ArrowLeft className="size-4" />
              Back to Newsroom
            </Button>
          </div>
        </Container>
      </Section>

      {related.length > 0 ? (
        <Section tone="muted">
          <SectionHeading
            eyebrow="More from the newsroom"
            title="Related updates"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <ScrollReveal key={p.slug} delay={(i % 3) * 0.06}>
                <PostCard
                  href={`/newsroom/${p.slug}`}
                  title={p.title}
                  excerpt={p.excerpt}
                  category={p.category}
                  dateLabel={p.dateLabel}
                  readingTime={p.readingTime}
                  image={p.image}
                />
              </ScrollReveal>
            ))}
          </div>
        </Section>
      ) : null}
    </>
  );
}
