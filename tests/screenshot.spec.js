import {test,expect} from '@playwright/test';

test.skip('page screenshot', async ({page}) =>{

    await page.goto("https://www.demoblaze.com/");
    await page.screenshot({ path: 'tests/screenshots/' + Date.now + 'HomePage.png'})
})

test('Full page screenshot', async ({page}) =>{
    
    await page.goto("https://www.demoblaze.com/");
    await page.screenshot({ path: 'tests/screenshots/' + Date.now + 'FullPage.png', fullPage:true})
})

test.only('Element screenshot', async ({page}) =>{
    
    await page.goto("https://www.demoblaze.com/");
    await page.locator("(//img[contains(@class,'card-img-top')])[2]").screenshot({ path: 'tests/screenshots/' + Date.now + 'NokiaLumia.png'})

})