const{test, expect}= require('@playwright/test');

test('Handling Table', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    const table =  await page.locator("//table[@id='productTable']");

    //Count the total number of rows and column
    const columns = await page.locator("//table[@id='productTable']/thead/tr/th");
    console.log('Number of column :',await columns.count());
    expect(await columns.count()).toBe(4);

    const rows = await page.locator("//table[@id='productTable']/tbody/tr");
    console.log('Number of rows : ', await rows.count());
    expect(await rows.count()).toBe(5);

    //2) select check box foor product 2

  /*  const machedRow = rows.filter({
        has : page.locator('td'),
        hasText: 'Laptop'

    })
    await machedRow.locator('input').check();
*/

// 3) Select multiple product by re-usuable function

    await selectProduct(rows,page,'Wireless Earbuds')
    await selectProduct(rows,page,'Smartphone')
    await selectProduct(rows,page,'Tablet ')

    // 4) print all the product details usinh=g loops

   /* for(let i=0;i< await rows.count(); i++)
    {
        const row = rows.nth(i);
        const tds =await row.locator('td');

        for(let j=0; j<await tds.count()-1; j++)
        {
            const tableData= await tds.nth(j).textContent();
            console.log(tableData);
        }

    }
*/
    //5) extract all the data from table
    
    const pages  = await page.locator("//ul[@id='pagination']/li/a");
    console.log('Number of pages in Table :', await pages.count());

    for(let p=0; p< await pages.count(); p++)
    {
        if(p>0)
        {
            await pages.nth(p).click();
        }

         for(let i=0;i< await rows.count(); i++)
    {
        const row = rows.nth(i);
        const tds =await row.locator('td');

        for(let j=0; j<await tds.count()-1; j++)
        {
            const tableData= await tds.nth(j).textContent();
            console.log(tableData);
        }

    }
    }






    await page.pause();







})

async function selectProduct(rows,page,producrname)
{
    const machedRow = rows.filter({
        has : page.locator('td'),
        hasText: producrname

    })
    await machedRow.locator('input').check();
}