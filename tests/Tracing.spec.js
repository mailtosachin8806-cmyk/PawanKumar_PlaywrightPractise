import{test, expect} from '@playwright/test'

//Playwright Trace Viewer is a GUI tool that helps you explore recorded Playwright traces after the script has run. 
// Traces are a great way for debugging your tests when they fail on CI. 

/*
Available options to record a trace:

'on-first-retry' - Record a trace only when retrying a test for the first time.
'on-all-retries' - Record traces for all test retries.
'off' - Do not record a trace.
'on' - Record a trace for each test. (not recommended as it's performance heavy)
'retain-on-failure' - Record a trace for each test, but remove it from successful test runs.
You can also use trace: 'retain-on-failure' if you do not enable retries but still want traces for failed tests.
*/



test('test', async({page}) => {

    await page.goto('https://www.demoblaze.com/');
    //Login
    await page.locator("//a[text()='Log in']").click();
    await page.locator("//input[@id='loginusername']").fill('Sachin0014');
    await page.locator("//input[@id='loginpassword']").fill('Sachin0014');
    await page.locator("//button[text()='Log in']").click();
    await page.locator("//a[text()='Log out']").click();
})