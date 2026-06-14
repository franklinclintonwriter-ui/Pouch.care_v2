import { Home, Search } from 'lucide-react';
import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { PremiumBackground } from '@/components/ui/premium-background';

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden bg-gradient-navy text-ivory">
      <PremiumBackground variant="navy" />
      <Container className="relative py-24 text-center">
        <p className="text-gradient-gold font-serif text-7xl font-semibold sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 text-2xl font-semibold sm:text-3xl">
          This page could not be found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-ivory/70">
          The page you’re looking for may have moved or no longer exists.
          Explore our company, divisions, or verification center instead.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/" variant="gold" size="lg">
            <Home className="size-4" />
            Back to home
          </Button>
          <Button
            href="/verification"
            variant="outline"
            size="lg"
            className="border-white/20 text-ivory hover:border-gold-300 hover:text-ivory"
          >
            <Search className="size-4" />
            Verification Center
          </Button>
        </div>
      </Container>
    </section>
  );
}
