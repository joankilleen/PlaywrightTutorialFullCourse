
//Include Playwright Modules
const { test, expect } = require('@playwright/test');

test('Validate Youtube playlist', async( {page} )=>{
  //Open Youtube
  page.goto('https://www.youtube.com/');

  //Accept cookies
  await expect(page.getByRole('button', { name: 'Accept the use of cookies and' })).toBeVisible();
  page.getByRole('button', { name: 'Accept the use of cookies and' }).click();

  //Enter Search text and search
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('cypress by testers talk');
  await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeEnabled();
  await page.getByRole('button', { name: 'Search', exact: true }).click();

  //Verify search results
  await expect(page.getByRole('link', { name: 'Cypress by Testers Talk' })).toBeVisible();

  //Open Link and verify
  await page.getByRole('link', { name: 'Cypress by Testers Talk' }).click();
  await expect(page).toHaveTitle(/.*Tutorial.*/);
})