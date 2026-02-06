import { test, expect } from '@playwright/test';

test('Using css locators', async ({ page }) => {
  await page.goto('https://github.com/login');
  await page.locator('css=#login_field').fill('nonsense');
  await page.locator('#password');
});

test('Using XPath selectors', async({page})=>{
    await page.goto('https://github.com/login');
    await page.locator("xpath=//input[@id='login_field']").fill('nonsense');
    await page.locator("xpath=//input[@id='password']");

});