const{test, expect} = require('@playwright/test')

test.skip('Handle alert with OK', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enabling dialogue window handler
  /* By default, dialogs are auto-dismissed by Playwright, 
  so you don't have to handle them. However, 
  you can register a dialog handler before the action that triggers the dialog 
  to either dialog.accept() or dialog.dismiss()
   */
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept();
    })

    await page.locator("//button[@id='alertBtn']").click();
    await page.waitForTimeout(3000);
})


test.skip('Prompt Dailoge alert with OK and CANCEL', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept(); //Close by using ok button
       // await dialog.dismiss(); //Close by using cancel button
    })

    await page.locator("//button[@id='confirmBtn']").click();
    await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!');
    await page.waitForTimeout(3000);

})


test('Prompt Dialoge', async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept('John'); //Close by using ok button
       // await dialog.dismiss(); //Close by using cancel button
    })

    await page.locator("//button[@id='promptBtn']").click();
    await expect(page.locator("//p[@id='demo']")).toHaveText('Hello John! How are you today?');
    await page.waitForTimeout(3000);

})