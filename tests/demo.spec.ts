import {test, expect} from '@playwright/test';

test('login success', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    
    const usernameInput = page.getByPlaceholder('Username');
    const passwordInput = page.getByPlaceholder('Password');
    const loginbtn = page.locator('#login-button');

    await usernameInput.fill("standard_user");   
    await passwordInput.fill("secret_sauce");
    await loginbtn.click();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.close();
  });