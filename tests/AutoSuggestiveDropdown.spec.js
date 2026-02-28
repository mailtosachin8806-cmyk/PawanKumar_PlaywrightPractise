const{test,expect}= require('@playwright/test')

test('Auto suggestive Dropdown', async({page})=> {

    await page.goto("https://www.redbus.in/");
    
    await page.locator("//input[@id='srcinput']").fill("Delhi");
    await page.waitForSelector("//div[contains(@class,'suggestion-item')]/div[1]");

     const fromCityOptions  = await page.$$("//div[contains(@class,'suggestion-item')]/div[1]");

    for(let option of fromCityOptions)
    {
      const value = await option.textContent();
     // console.log(value);

      if(value.includes('Delhi Airport'))
      {
        await option.click();
        break;
      }


    }

    await page.waitForTimeout(6000);
    await page.pause();
})