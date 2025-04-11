import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage';
import { ProductPage } from '../page-objects/ProductPage';
import { CartPage } from '../page-objects/CartPage';

test('check cart', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");

    const productPage = new ProductPage(page);
    await productPage.clickCartButton();

    const cartPage = new CartPage(page);
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
    await expect(page.getByText('Your Cart')).toBeVisible();
    await page.close();
});

test('check cart 1', async ({page}) => {
    
});