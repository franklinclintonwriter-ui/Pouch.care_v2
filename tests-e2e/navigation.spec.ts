import { test, expect } from '@playwright/test';

test.describe('Desktop navigation', () => {
  test.use({ viewport: { width: 1280, height: 900 } });

  test('mega menu reveals and links navigate', async ({ page }) => {
    await page.goto('/');
    // Scope to the primary navigation (the footer also has a "Business" toggle).
    const primary = page.getByRole('navigation', { name: 'Primary' });
    await primary.getByRole('button', { name: /^Business$/ }).hover();
    const tradingLink = page.getByRole('link', {
      name: /Trading, Import & Export/i,
    });
    await expect(tradingLink.first()).toBeVisible();
    await tradingLink.first().click();
    await expect(page).toHaveURL(/\/business\/trading-import-export/);
    await expect(page.locator('h1')).toContainText(/Trading, Import & Export/i);
  });

  test('direct contact link works', async ({ page }) => {
    await page.goto('/');
    await page
      .getByRole('navigation', { name: 'Primary' })
      .getByRole('link', { name: /^Contact$/ })
      .click();
    await expect(page).toHaveURL(/\/contact/);
  });
});

test.describe('Mobile navigation', () => {
  test.use({ viewport: { width: 390, height: 844 }, hasTouch: true });

  test('drawer opens and navigates', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('button', { name: /open menu/i }).click();
    const dialog = page.getByRole('dialog', { name: /site menu/i });
    await expect(dialog).toBeVisible();
    // Expand the Company group and follow a link.
    await dialog.getByRole('button', { name: /^Company$/ }).click();
    await dialog.getByRole('link', { name: /^About$/ }).click();
    await expect(page).toHaveURL(/\/about/);
  });
});
