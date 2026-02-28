import{test, expect} from '@playwright/test'

let page;

test('Record Video', async({browser})=>{

    page = await  browser.newPage();
    await page.goto('https://www.demoblaze.com/');
    //Login
    await page.locator("//a[text()='Log in']").click();
    await page.locator("//input[@id='loginusername']").fill('Sachin0014');
    await page.locator("//input[@id='loginpassword']").fill('Sachin0014');
    await page.locator("//button[text()='Log in']").click();
    await page.locator("//a[text()='Log out']").click();
    
})

test.afterAll('close browser', async()=>{
    await page.close();
})