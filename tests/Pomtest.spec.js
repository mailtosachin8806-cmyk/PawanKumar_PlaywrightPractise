import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';

test ('Login in Application', async({page})=> {

//Login Page
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login("Sachin0014","Sachin0014");
  //  await page.pause();
//Home Page
    const homepage = new HomePage(page);
    await homepage.addProductCart('Iphone 6 32gb');
    //await page.waitForTimeout(5000);
    await homepage.gotoCart();
    
//Cart Page

    const cartpage = new CartPage(page);
    await page.waitForTimeout(5000);
    const status =await cartpage.checkProductInCart('Iphone 6 32gb');
    expect(await status).toBe(true);
    //await page.pause();
})