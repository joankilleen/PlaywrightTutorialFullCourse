import { test, expect } from '@playwright/test';

test('BakkappaN visibility of login button', async ({ page }) => {
  await page.goto('https://github.com/BakkappaN');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('lkjhkjk');
  await page.getByRole('textbox', { name: 'Username or email address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('kjgjhghjgjg');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('assdfg');
  await page.getByRole('main').click();
  await expect(page.getByRole('button', { name: 'Sign in', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
});