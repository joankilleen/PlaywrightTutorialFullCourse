
//Include Playwright Modules
const { test, expect } = require('@playwright/test');

test('Validate Youtube playlist', async( {page} )=>{
   page.goto('https://www.youtube.com/');

  //await expect(page.getByRole('button', { name: 'Accept the use of cookies and' })).toBeVisible();

  page.getByRole('button', { name: 'Accept the use of cookies and' }).click();
  await page.getByRole('combobox', { name: 'Search' }).click();

})