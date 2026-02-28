const {test,expect} = require('@playwright/test')
//test -> is a  test
// expect -> Is a assertion 
test.only('Home Page' , async({page})=> {

//page- > Page is a fixture and it is automaed so many function.
    await page.goto('https://www.demoblaze.com/');

    const pageTitle = page.title();
    console.log('Page Title is : ' , pageTitle);

    await expect(page).toHaveTitle('STORE');

    const pageURL =page.url();
    console.log('Page URL is : ' , pageURL);

    await expect(page).toHaveURL('https://www.demoblaze.com/');

   // await page.close();
    await page.pause();
})