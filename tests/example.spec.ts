import { test, expect } from '@playwright/test';

// These are customized 
test('jb has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Home page - jbplayapp/);
});

test('jb microsoft link', async ({ page }) => {
  await page.goto('/');

  // Click the get started link.
  await page.getByRole('link', { name: 'building Web apps with ASP.NET Core' }).click();
});

test('check privacy policy', async ({ page }) => {
  await page.goto('/');

  // Click the get started link.
  await page.locator('.navbar-collapse >> text=Privacy').click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Privacy Policy' })).toBeVisible();
});
