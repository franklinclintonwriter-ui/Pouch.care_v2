import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('loads with hero, headline and key CTAs', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Pouch Care International Ltd\./);
    await expect(
      page.getByRole('heading', {
        level: 1,
        name: /Verified, Diversified Enterprise/i,
      }),
    ).toBeVisible();
    await expect(
      page.getByRole('link', { name: /Explore our divisions/i }),
    ).toBeVisible();
  });

  test('renders the verified incorporation reference', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText(/C-202769\/2025/).first()).toBeVisible();
  });

  test('has exactly one H1', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toHaveCount(1);
  });
});
