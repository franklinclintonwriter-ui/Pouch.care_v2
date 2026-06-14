import { describe, it, expect } from 'vitest';
import { primaryNav, footerNav, topLevelLinks } from './nav';
import { isValidSlug } from '@/lib/validation';

describe('navigation data', () => {
  it('every primary nav group has a label and a destination or menu', () => {
    primaryNav.forEach((group) => {
      expect(group.label.length).toBeGreaterThan(0);
      expect(Boolean(group.href) || Boolean(group.columns)).toBe(true);
    });
  });

  it('all nav links are internal absolute paths', () => {
    const links = [
      ...topLevelLinks.map((l) => l.href),
      ...footerNav.flatMap((c) => c.items.map((i) => i.href)),
      ...primaryNav.flatMap(
        (g) => g.columns?.flatMap((c) => c.items.map((i) => i.href)) ?? [],
      ),
    ];
    links.forEach((href) => {
      expect(href.startsWith('/')).toBe(true);
    });
  });

  it('mega menu featured links point to valid routes', () => {
    primaryNav.forEach((group) => {
      if (group.featured) {
        expect(group.featured.href.startsWith('/')).toBe(true);
      }
    });
  });

  it('isValidSlug accepts route-like segments used in nav', () => {
    expect(isValidSlug('investor-relations')).toBe(true);
  });
});
