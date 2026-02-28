const{test, expect } = require('@playwright/test')

test('Handle Radio Button', async({page})=> {

  await  page.goto("https://testautomationpractice.blogspot.com/");
  
  //Handle Radio Button

  await page.locator("//input[@id='male']").check();
  //now apply assertion
  await expect(await page.locator("//input[@id='male']")).toBeChecked();
  await expect(await page.locator("//input[@id='male']").isChecked()).toBeTruthy();

  await expect(await page.locator("//input[@id='female']").isChecked()).toBeFalsy();

  await page.waitForTimeout(5000);

})