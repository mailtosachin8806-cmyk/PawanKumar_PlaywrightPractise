const{test, expect, chromium} = require('@playwright/test');

test.skip('Handle Pages/Windows', async() => {

/* Each BrowserContext can have multiple pages. 
A Page refers to a single tab or a popup window within a browser context. 
It should be used to navigate to URLs and interact with the page content.
*/

    const browser  = await chromium.launch()
    const context   = await browser.newContext()

    const page1 = await context.newPage()
    const page2 = await context.newPage()

    const allPages = context.pages()
    console.log("No of Pages created: ", allPages.length)

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page1).toHaveTitle("OrangeHRM")

    await page2.goto("https://www.orangehrm.com/")
    await expect(page2).toHaveTitle("Human Resources Management Software | HRMS | OrangeHRM")

})

test('Handle Multiple Windows', async() => {
    const browser  = await chromium.launch()
    const context   = await browser.newContext()

    const page1 = await context.newPage()
    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page1).toHaveTitle("OrangeHRM")

    const pagePromise = context.waitForEvent('page')
    await page1.locator("//a[text()='OrangeHRM, Inc']").click();

    const newPage = await pagePromise
    await expect(newPage).toHaveTitle("Human Resources Management Software | HRMS | OrangeHRM")

    // await newPage.waitForTimeout(3000);
    // await page1.waitForTimeout(5000);

    await page1.locator("//input[@placeholder='Username']").fill('Admin');
    await page1.locator("//input[@placeholder='Password']").fill('admin123');
    await page1.locator("//button[@type='submit']").click();

    await page1.locator("//span[text()='PIM']").click();
   // await page1.pause();
    await browser.close();
})