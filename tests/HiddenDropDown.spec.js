const{test, expect}= require('@playwright/test')

test('Handle Hidden Dropdown', async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.locator("//input[@placeholder='Username']").fill('Admin');
    await page.locator("//input[@placeholder='Password']").fill('admin123');
    await page.locator("//button[@type='submit']").click();

    await page.locator("//span[text()='PIM']").click();

    await page.locator("(//div[contains(@class,'oxd-select-text--after')])[3]").click();

    //Waiting for option
    await page.waitForTimeout(5000);

    const options = await page.$$("//div[@role='option']//span");

    for(const option of options)
    {
        const jobTitle = await option.textContent();
        console.log(jobTitle);

        if(jobTitle.includes('QA Lead'))
        {
           await option.click();
            break;
        }
    }



    await page.pause();
})