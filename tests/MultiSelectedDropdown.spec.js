const{test, expect}=require('@playwright/test')

test('Multi selected Dropdwon', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');
    //Select multiple option from multi select dropdown
    await page.selectOption("//select[@id='colors']",['Blue','Red','Yellow'])
    await page.pause();
})