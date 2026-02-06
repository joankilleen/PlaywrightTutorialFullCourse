const { test, expect } = require('@playwright/test');

test('How to select from a dropdown combo box', async( {page} )=>{
  //Open Facebook  and accept cookies
  page.goto('https://www.facebook.com');

  //accept cookies
  await page.getByRole('button', { name: 'Allow all cookies' }).click();

  //go to sign up page
  await page.getByTestId('open-registration-form-button').click();

  //accept cookies again
  await page.getByRole('button', { name: 'Allow all cookies' }).click();

  const monthDropdown = page.locator('#month');
  // validate preselected month and select
  await expect(monthDropdown).toHaveValue('2');
  await monthDropdown.selectOption('7');

  //select day
  const dayDropDown = page.locator('#day');
  await dayDropDown.selectOption('10');

  //select year
  const yearDropdown = page.locator('#year');
  await yearDropdown.selectOption('1966');

  //select click box
  await page.getByRole('radio', { name: 'Female' }).check();




})