import { Mail, MapPin } from 'lucide-react';
import { Section } from '@/components/layout/section';
import { SectionHeading } from '@/components/layout/section-heading';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { Icon } from '@/components/ui/icon';
import { PageHero } from '@/components/sections/page-hero';
import { ContactForm } from '@/components/forms/contact-form';
import { SEOJsonLd } from '@/components/seo/json-ld';
import { company } from '@/data/company';
import { faqs } from '@/data/faqs';
import { buildMetadata, breadcrumbJsonLd } from '@/lib/seo';

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Contact', path: '/contact' },
];

export const metadata = buildMetadata({
  title: 'Contact Pouch Care International Ltd.',
  description:
    'Start a business, partnership or document-verification inquiry with Pouch Care International Ltd. We respond through verified channels with a privacy-first approach.',
  path: '/contact',
});

const departments: {
  icon: string;
  label: string;
  description: string;
}[] = [
  {
    icon: 'Briefcase',
    label: 'Business inquiry',
    description:
      'General business questions across our trading, digital, commerce, agriculture and advisory divisions.',
  },
  {
    icon: 'Users',
    label: 'Partnership inquiry',
    description:
      'Explore joint ventures, supply relationships and collaborative opportunities with the group.',
  },
  {
    icon: 'ShieldCheck',
    label: 'Document verification',
    description:
      'Request public-safe verification of our incorporation and corporate documents.',
  },
  {
    icon: 'Building2',
    label: 'Corporate contact',
    description:
      'Governance, media and other corporate matters routed to the right team.',
  },
];

export default function ContactPage(_props: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return (
    <>
      <SEOJsonLd data={breadcrumbJsonLd(breadcrumbs)} />

      <PageHero
        eyebrow="Contact"
        breadcrumbs={breadcrumbs}
        title="Start a conversation"
        description="Whether you have a business, partnership or document-verification inquiry, we are glad to hear from you. We respond through verified channels and handle your information with care."
      />

      {/* Form + contact info */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-start">
          <ScrollReveal>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
              <h2 className="text-2xl font-semibold text-navy-900">
                Send an inquiry
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                This is a demonstration form. Please do not include sensitive
                personal identifiers. We will follow up through a verified
                channel.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="space-y-6">
              {/* Email card */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gold-50 text-gold-700">
                    <Mail className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-navy-900">
                      Email us
                    </h3>
                    <a
                      href={`mailto:${company.publicContact.email}`}
                      className="mt-1 inline-block text-sm font-medium text-gold-700 underline-offset-4 hover:underline"
                    >
                      {company.publicContact.email}
                    </a>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      The fastest way to reach the right team.
                    </p>
                  </div>
                </div>
              </div>

              {/* Department cards */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <h3 className="text-base font-semibold text-navy-900">
                  Inquiry channels
                </h3>
                <ul className="mt-4 space-y-5">
                  {departments.map((dept) => (
                    <li key={dept.label} className="flex items-start gap-4">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-navy-50 text-navy-700">
                        <Icon name={dept.icon} className="size-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-navy-900">
                          {dept.label}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                          {dept.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Office / location */}
      <Section tone="muted">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Where we are"
            title="Our location"
            description="For privacy and security, our full registered address and direct lines are shared through a verified business inquiry channel."
          />
        </ScrollReveal>
        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-stretch">
          <ScrollReveal>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft sm:p-8">
              <div className="mb-4 flex size-11 items-center justify-center rounded-full bg-gold-50 text-gold-700">
                <MapPin className="size-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-navy-900">
                Registered office
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {company.publicContact.addressLine}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                {company.publicContact.note}
              </p>
            </div>
          </ScrollReveal>

          {/* Map placeholder */}
          <ScrollReveal delay={0.08}>
            <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl border border-border bg-gradient-navy text-center text-ivory">
              <div className="px-6">
                <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-white/10 text-gold-300">
                  <MapPin className="size-6" aria-hidden="true" />
                </div>
                <p className="text-sm font-medium text-ivory">
                  Bangladesh — location shared upon verified request
                </p>
                <p className="mt-1 text-xs text-ivory/60">
                  Map preview placeholder
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Questions"
            title="Frequently asked questions"
            description="Quick answers to common questions. For anything else, reach out through the form above."
          />
        </ScrollReveal>
        <div className="mx-auto mt-10 max-w-3xl space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.id}
              className="group rounded-2xl border border-border bg-card p-5 shadow-soft"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy-900">
                <span>{faq.question}</span>
                <span
                  className="text-gold-700 transition-transform group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
