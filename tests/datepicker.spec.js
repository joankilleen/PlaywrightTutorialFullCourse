//Include Playwright Modules
const { test, expect } = require('@playwright/test');

test('Select date in a datepicker which is in an iFrame', async( {page} )=>{
  //Open Youtube
  page.goto('https://jqueryui.com/datepicker/');

  const myFrame = page.frameLocator('[src*="default.html"]');
  const datepicker =myFrame.locator('.hasDatepicker');

  await datepicker.click();
  await datepicker.fill('01/01/1999');
  await datepicker.press('Escape');

  const selectedDate = await datepicker.inputValue();
  expect(selectedDate).toBe('01/01/1999');

  


})