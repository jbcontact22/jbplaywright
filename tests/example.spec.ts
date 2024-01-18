import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('jb has title', async ({ page }) => {
  await page.goto('http://localhost:5067/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Home Page/);
});

test('jb microsoft link', async ({ page }) => {
  await page.goto('http://localhost:5067/');

  // Click the get started link.
  await page.getByRole('link', { name: 'building Web apps with ASP.NET Core' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
