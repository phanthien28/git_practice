import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage';

// test('login success', async ({page}) => {
//     const loginPage = new LoginPage(page);
//     await loginPage.goto();
//     await loginPage.login("standard_user", "secret_sauce");
//     //await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
//     await expect(page).toHaveTitle('Swag Labs');
//     await page.close();
// });

// test('login fail', async ({page}) => {
//     const loginPage = new LoginPage(page);
//     await loginPage.goto();
//     await loginPage.login("standard_user", "wrong_password");
//     await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();
//     await page.close(); 
// });

test.describe('login with standard user', () => {
    test('login success', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login("standard_user", "secret_sauce");
        await expect(page).toHaveTitle('Swag Labs');
        await page.close();
    });

    test('login fail', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login("long_username", "wrong_password");
        await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();
        await page.close(); 
    });
});