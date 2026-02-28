import {test , expect} from '@playwright/test';
 
let page;

test.beforeAll( async ({browser}) => {

    page = await browser.newPage();
    await page.goto('https://www.demoblaze.com/');
    //Login
    await page.locator("//a[text()='Log in']").click();
    await page.locator("//input[@id='loginusername']").fill('Sachin0014');
    await page.locator("//input[@id='loginpassword']").fill('Sachin0014');
    await page.locator("//button[text()='Log in']").click();
})

test.afterAll("Logout", async()=>{

    await page.locator("//a[text()='Log out']").click();
})

test('Home Page Test', async ()=>{

    const products = await page.$$("//a[@class='hrefch']");
    expect(products).toHaveLength(9);

})

test('Add to cart page', async()=>{

    await page.locator("//a[text()='Samsung galaxy s6']").click();
    await page.locator("//a[text()='Add to cart']").click();

    page.on('dialog', async dialog=> {
        expect(dialog.message()).toContain('Product added.')
       await dialog.accept();

    })

})