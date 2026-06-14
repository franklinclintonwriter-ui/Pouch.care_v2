import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { PremiumBackground } from '@/components/ui/premium-background';

interface CTASectionProps {
  eyebrow?: string;
  title: string;
  description: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}

export function CTASection({
  eyebrow = 'Partner with us',
  title,
  description,
  primary = { label: 'Start an inquiry', href: '/contact' },
  secondary = { label: 'Verification Center', href: '/verification' },
}: CTASectionProps) {
  return (
    <section className="py-20">
      <Container>
        <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-navy px-6 py-14 text-center text-ivory sm:px-12 sm:py-20">
          <PremiumBackground variant="navy" />
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
            {eyebrow}
          </p>
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold leading-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ivory/75">
            {description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={primary.href} variant="gold" size="lg">
              {primary.label}
              <ArrowRight className="size-4" />
            </Button>
            <Button
              href={secondary.href}
              variant="outline"
              size="lg"
              className="border-white/20 text-ivory hover:border-gold-300 hover:text-ivory"
            >
              {secondary.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
