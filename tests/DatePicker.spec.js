const{test , expect }= require('@playwright/test');

test('Date Picker', async({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/');
    
    //await page.fill("//input[@id='datepicker']", '02/10/2026');

    //Date Picker
    const year = "2021";
    const month = "September";
    const date = "14";

    await page.locator("//input[@id='datepicker']").click();

    while(true){
        const currenYear = await page.locator("//span[@class='ui-datepicker-year']").textContent();
        const currentMonth = await page.locator("//span[@class='ui-datepicker-month']").textContent();

        if(currenYear == year && currentMonth == month)
        {
            break;
        }

   // await page.locator("//a[contains(@class,'ui-datepicker-next')]/span").click(); //Next button

    await page.locator("//a[contains(@class,'ui-datepicker-prev')]/span").click(); //Prev button

    }

    //Date selection using loop

  /*  const dates = await page.$$("//a[contains(@class,'ui-state-default')]");

    for(const dt of dates){

        if(await dt.textContent()== date)
        {
            dt.click();
            break;
        }
    }
*/
    //Date selection - without loop

    await page.locator(`//a[contains(@class,'ui-state-default') and text()='${date}']`).click();
    await page.pause();
})