'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Award, Landmark, MapPin } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { VerificationBadge } from '@/components/brand/verification-badge';
import { PremiumBackground } from '@/components/ui/premium-background';
import { company } from '@/data/company';

const badges = [
  { icon: ShieldCheck, label: 'Verified Incorporation', sub: 'C-202769/2025' },
  { icon: Award, label: 'Trade License', sub: 'Export / Import' },
  { icon: Landmark, label: 'Private Limited', sub: 'Limited by shares' },
  { icon: MapPin, label: 'Bangladesh Registered', sub: 'RJSC · 2025' },
];

export function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] },
        };

  return (
    <section className="relative isolate overflow-hidden bg-gradient-navy text-ivory">
      <PremiumBackground variant="navy" />
      <Container className="relative pb-20 pt-16 sm:pb-28 sm:pt-24">
        <motion.div {...fade(0)} className="max-w-4xl">
          <VerificationBadge
            tone="navy"
            label="Verified Bangladeshi Enterprise"
            sublabel={`Incorporated ${company.incorporationDateLabel} · ${company.certificateNumber}`}
          />
        </motion.div>

        <motion.h1
          {...fade(0.08)}
          className="mt-7 max-w-4xl text-balance font-serif text-4xl font-semibold leading-[1.05] sm:text-6xl"
        >
          Building a Verified, Diversified Enterprise for Technology, Trade,
          Commerce, Agriculture, and{' '}
          <span className="text-gradient-gold">Strategic Growth.</span>
        </motion.h1>

        <motion.p
          {...fade(0.16)}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-ivory/75"
        >
          {company.legalName} is a Bangladesh-incorporated private limited
          company developing a diversified business ecosystem across digital
          services, trading, e-commerce, IT/ITES, agriculture, consultancy, and
          commercial operations.
        </motion.p>

        <motion.div
          {...fade(0.24)}
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <Button href="/business" variant="gold" size="lg">
            Explore our divisions
            <ArrowRight className="size-4" />
          </Button>
          <Button
            href="/verification"
            variant="outline"
            size="lg"
            className="border-white/20 text-ivory hover:border-gold-300 hover:text-ivory"
          >
            <ShieldCheck className="size-4" />
            Verify the company
          </Button>
        </motion.div>

        <motion.ul
          {...fade(0.32)}
          className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {badges.map((b) => (
            <li
              key={b.label}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 backdrop-blur"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-gold-500/15 text-gold-300">
                <b.icon className="size-4" aria-hidden="true" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-sm font-semibold text-ivory">
                  {b.label}
                </span>
                <span className="text-xs text-ivory/55">{b.sub}</span>
              </span>
            </li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
