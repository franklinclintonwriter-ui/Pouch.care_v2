import { test, expect } from '@playwright/test';

test.describe('Contact form', () => {
  test('validates required fields before submission', async ({ page }) => {
    await page.goto('/contact');
    // Submit empty form.
    await page.getByRole('button', { name: /send inquiry/i }).click();

    await expect(page.getByText(/please enter your name/i)).toBeVisible();
    await expect(page.getByText(/please enter your email/i)).toBeVisible();
    await expect(page.getByText(/please add a short message/i)).toBeVisible();
  });

  test('rejects an invalid email', async ({ page }) => {
    await page.goto('/contact');
    await page.getByLabel(/full name/i).fill('Test User');
    await page.getByLabel(/email address/i).fill('not-an-email');
    await page.getByLabel(/^message/i).fill('This is a valid length message.');
    await page.getByRole('button', { name: /send inquiry/i }).click();
    await expect(page.getByText(/valid email address/i)).toBeVisible();
  });

  test('accepts a valid submission and shows confirmation', async ({
    page,
  }) => {
    await page.goto('/contact');
    await page.getByLabel(/full name/i).fill('Test User');
    await page.getByLabel(/email address/i).fill('test@example.com');
    await page
      .getByLabel(/^message/i)
      .fill('We would like to discuss a partnership opportunity.');
    await page.getByRole('button', { name: /send inquiry/i }).click();
    await expect(page.getByText(/your inquiry is noted/i)).toBeVisible();
  });
});
