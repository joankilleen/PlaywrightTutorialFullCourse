
//Include Playwright Modules
const { test, expect } = require('@playwright/test');

test('Validate Youtube playlist', async( {page} )=>{
    await page.goto('https://www.youtube.com');
    
    await page.getByRole('combobox', { name: 'Search' }).click();

})