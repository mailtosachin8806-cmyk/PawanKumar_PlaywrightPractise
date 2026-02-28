const{test, expect}= require('@playwright/test');

test.skip("Mouse Hover", async({page})=> {

    await page.goto("https://demo.opencart.com/");

    const desktop = await page.locator("//a[text()='Desktops']");
    const macbook = await page.locator("//a[text()='Mac (1)']");

    //Mouse hover
    await desktop.hover();
    await macbook.hover();
    const button = await page.locator("");
    
    //Right click
    await button.click({button : 'right'});


    await page.pause();

})

test("Mouse Double Click", async({page})=> {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const btnCopy  = await page.locator("//button[text()='Copy Text']");

    //Double click
    await btnCopy.dblclick();

    const f2textbox = await page.locator("//input[@id='field2']");

    //await expect(f2textbox).toHaveText("Hello World!");
    await page.pause();

})