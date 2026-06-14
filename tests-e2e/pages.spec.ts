import { test, expect } from '@playwright/test';

const businessSlugs = [
  'trading-import-export',
  'digital-marketing',
  'technology-ites',
  'ecommerce',
  'agriculture',
  'consultancy',
  'contracting',
];

test.describe('Business division pages', () => {
  for (const slug of businessSlugs) {
    test(`/business/${slug} loads with content`, async ({ page }) => {
      const res = await page.goto(`/business/${slug}`);
      expect(res?.status()).toBeLessThan(400);
      await expect(page.locator('h1')).toBeVisible();
      await expect(page.getByText(/Legal basis/i).first()).toBeVisible();
    });
  }
});

test.describe('Leadership pages', () => {
  test('leadership overview lists board members', async ({ page }) => {
    await page.goto('/leadership');
    await expect(
      page.getByRole('link', { name: /Abdullah Al Mamun/i }).first(),
    ).toBeVisible();
  });

  for (const slug of ['abdullah-al-mamun', 'md-oliullah']) {
    test(`/leadership/${slug} loads`, async ({ page }) => {
      const res = await page.goto(`/leadership/${slug}`);
      expect(res?.status()).toBeLessThan(400);
      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('blockquote')).toBeVisible();
    });
  }
});

test.describe('Newsroom & insights dynamic routes', () => {
  test('news article renders', async ({ page }) => {
    await page.goto('/newsroom');
    await page
      .getByRole('link', { name: /incorporated as a private limited company/i })
      .first()
      .click();
    await expect(page).toHaveURL(/\/newsroom\//);
    await expect(page.locator('article p').first()).toBeVisible();
  });

  test('insight article renders', async ({ page }) => {
    await page.goto('/insights/building-a-verified-enterprise-in-bangladesh');
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('article p').first()).toBeVisible();
  });
});

test.describe('Sitemap routes', () => {
  test('HTML sitemap page works', async ({ page }) => {
    await page.goto('/sitemap');
    await expect(page.locator('h1')).toContainText(/sitemap/i);
  });

  test('sitemap.xml is served', async ({ request }) => {
    const res = await request.get('/sitemap.xml');
    expect(res.status()).toBe(200);
    expect(res.headers()['content-type']).toContain('xml');
  });

  test('robots.txt is served', async ({ request }) => {
    const res = await request.get('/robots.txt');
    expect(res.status()).toBe(200);
  });
});
