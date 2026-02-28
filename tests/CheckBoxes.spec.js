const{test, expect}    = require('@playwright/test')

test('Handle check box', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

// Single checkbox
    await page.locator("//input[@id='sunday' and @type='checkbox']").check();
  //  await page.check("//input[@id='sunday' and @type='checkbox']");

    await expect(await page.locator("//input[@id='sunday' and @type='checkbox']")).toBeChecked();
    await expect(await page.locator("//input[@id='sunday' and @type='checkbox']").isChecked()).toBeTruthy();
    await expect(await page.locator("//input[@id='monday' and @type='checkbox']").isChecked()).toBeFalsy();

    //Multiple checkbox
    const checkboxLocators = [
        "//input[@id='sunday' and @type='checkbox']",
        "//input[@id='monday' and @type='checkbox']",
        "//input[@id='friday' and @type='checkbox']"
    ]

    for(const locator of checkboxLocators)
    {
        await page.locator(locator).check(); //Select multiple checkbox
    }

    for(const locator of checkboxLocators) //Unselect multiple checkbox
    {
       if(await page.locator(locator).isChecked()) 
       {
        await page.locator(locator).uncheck(); //Unselect multiple checkbox
       }
    }


    await page.pause();
})