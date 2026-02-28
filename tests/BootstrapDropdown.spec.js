const {test, expect} = require('@playwright/test')

test('Bootstrap Dropdown', async({page})=> {

    await page.goto("https://www.jquery-az.com/a-jquery-hierarchy-select-dropdown-plug-in-for-bootstrap/")

    await page.locator('.multiselect').click(); //Click on dropdown

    //1)
   //const options = await page.locator('ul>li label input');
   //await expect(options).toHaveCount(11);

   //2)
 //  const options = await page.$$('ul>li label input');
  // await expect(options.length).toBe(11);

    //3) Select option from dropdown

    const options = await page.$$('ul>li label')

    for(let option of options)
    {
        const value = await option.textContent();
        if(value.includes('Angular')|| value.includes('Java'))
        {
           await option.click();
        }


    }


})