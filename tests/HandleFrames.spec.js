const{test,expect }= require('@playwright/test');

test.skip('Handle Frame', async({page})=>{

    await page.goto("https://ui.vision/demo/webtest/frames/");

    //total frames
    const allFrames = page.frames();
    console.log("Total number of frames : ", allFrames.length);

    //Apprach 1 : Using name and url

    // const frame = await page.frame('name'); //If name is present
     const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'}); //if url is present
     await frame1.locator("//input[@name='mytext1']").fill('Sachin')

    //Appraoch 2 : Using from locator

    const inputbox = await page.frameLocator("//frame[@src='frame_2.html']").locator("//input[@name='mytext2']");
    await inputbox.fill('Frame2');
    await page.pause();
})

test('Handle Inner Frame', async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");

    //total frames
    const allFrames = page.frames();
    console.log("Total number of frames : ", allFrames.length);

    const frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});

    const inputbox = await page.frameLocator("//frame[@src='frame_3.html']").locator("//input[@name='mytext3']");
    await inputbox.fill('Frame3');

    const childframe = await frame3.childFrames();
    await childframe[0].locator("(//div[contains(@class,'vd3tt')])[1]").check();

    await page.pause();
})