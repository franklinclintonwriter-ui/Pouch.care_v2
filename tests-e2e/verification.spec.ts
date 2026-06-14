import { test, expect } from '@playwright/test';

test.describe('Verification & documents', () => {
  test('verification page loads document cards and preview dialog', async ({
    page,
  }) => {
    await page.goto('/verification');
    await expect(page.locator('h1')).toContainText(
      /verify our corporate standing/i,
    );

    // Document cards present.
    await expect(
      page
        .getByRole('heading', { name: 'Certificate of Incorporation' })
        .first(),
    ).toBeVisible();

    // Open a redacted preview dialog.
    await page
      .getByRole('button', { name: /View redacted preview/i })
      .first()
      .click();
    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();
    await expect(dialog.getByText(/Redacted for privacy/i)).toBeVisible();

    // Close it.
    await dialog.getByRole('button', { name: /close dialog/i }).click();
    await expect(dialog).toBeHidden();
  });

  test('documents page renders the registry table', async ({ page }) => {
    await page.goto('/documents');
    const table = page.getByRole('table');
    await expect(table).toBeVisible();
    await expect(
      table.getByText(/Certificate of Incorporation/i).first(),
    ).toBeVisible();
    // Privacy notice is present.
    await expect(page.getByText(/public previews are redacted/i)).toBeVisible();
  });
});
