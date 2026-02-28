const{test, expect}= require('@playwright/test')

test('Select Dropdwon', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Multiple ways to select dropdwon
     
  /*  await page.locator("//select[@id='country']").selectOption({label:'France'}); //label, visible text
    await page.locator("//select[@id='country']").selectOption('France'); //Visble text
    await page.locator("//select[@id='country']").selectOption({value:'france'}); //by value
    await page.locator("//select[@id='country']").selectOption({index:3}); //By index
    await page.selectOption("//select[@id='country']",'France'); //by text

*/

//Assertion
// 1) Check number of options in dropdwon
//    const options = await page.locator("//select[@id='country']/option")
//    await expect(options).toHaveCount(10);

//2) check number of option in dropdwon - Approach 2
//        const options = await page.locator("//select[@id='country']/option")
//        console.log("Number of Options :", options.length);
//        await expect(options.length).toBe(10);

//3) Check presence of value in dropdown - Approach 1

    // const content =  await page.locator("//select[@id='country']").textContent();
    // await expect(content.includes('India')).toBeTruthy();

//4) Check presence of value in dropdown using loop

const options = await page.$$("//select[@id='country']/option")
let status = false;

for(const option of options)
{
// console.log(await  option.textContent());
  let value = await option.textContent();
//   if(value.includes('India')|| value.includes('France')) //Check presence of value in a dropdown
//     {
//         status=true;
//         break;
//     }  

    if(value.includes('India'))
    {
        await page.selectOption("//select[@id='country']", value);
        break;
    }
}
    await page.pause();
//expect(status).toBeTruthy(); //Assertion used to check presence of value in a dropdown

})