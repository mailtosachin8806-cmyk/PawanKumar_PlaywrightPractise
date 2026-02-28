const{test, expect}=require('@playwright/test')

test('Input Box', async({page})=> {

await page.goto('https://testautomationpractice.blogspot.com/');

 //Input box assert
 await expect(await page.locator("//input[@id='name']")).toBeEditable();
 await expect(await page.locator("//input[@id='name']")).toBeEmpty();
 await expect(await page.locator("//input[@id='name']")).toBeVisible();
 await expect(await page.locator("//input[@id='name']")).toBeEnabled();

// await page.locator("//input[@id='name']").fill("John");
 await page.fill("//input[@id='name']",'john')
 console.log(text);
 await page.pause();
 await page.waitForTimeout(6000);


})