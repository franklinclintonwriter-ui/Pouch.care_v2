import Link from 'next/link';
import { ShieldCheck, Mail, MapPin } from 'lucide-react';
import { Container } from './container';
import { ResponsiveLogo } from '@/components/brand/responsive-logo';
import { footerNav } from '@/data/nav';
import { company } from '@/data/company';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 overflow-hidden bg-navy-950 text-ivory/80">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(193,146,42,0.12),transparent_45%)]"
      />
      <Container className="relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_3fr]">
          <div className="max-w-sm">
            <ResponsiveLogo href="/" invert />
            <p className="mt-5 text-sm leading-relaxed text-ivory/65">
              {company.legalName} is a Bangladesh-incorporated private limited
              company building a diversified, compliance-first enterprise across
              technology, trade, commerce, and agriculture.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs">
              <ShieldCheck
                className="size-4 text-gold-300"
                aria-hidden="true"
              />
              <span>Certificate No. {company.certificateNumber}</span>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-ivory/65">
              <li className="flex items-start gap-2.5">
                <Mail
                  className="mt-0.5 size-4 shrink-0 text-gold-300"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${company.publicContact.email}`}
                  className="hover:text-ivory"
                >
                  {company.publicContact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin
                  className="mt-0.5 size-4 shrink-0 text-gold-300"
                  aria-hidden="true"
                />
                <span>{company.publicContact.addressLine}</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {footerNav.map((col) => (
              <div key={col.heading}>
                <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-300">
                  {col.heading}
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="text-sm text-ivory/65 transition-colors hover:text-ivory"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-ivory/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.legalName}. All rights reserved.
          </p>
          <p className="max-w-xl text-ivory/45">
            Public previews of legal documents are redacted for privacy and
            security. Sensitive personal data is never published.
          </p>
        </div>
      </Container>
    </footer>
  );
}
