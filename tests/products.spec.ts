import{test, expect} from '@playwright/test';
import { ProductPage } from '../page-objects/ProductPage';
import { LoginPage } from '../page-objects/LoginPage';

test('add to cart', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");

    const productPage = new ProductPage(page);
    await productPage.addToCart();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.close();
});

test('add to cart 1', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");

    const productPage = new ProductPage(page);
    await productPage.addToCart1();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await page.close();
});

test('click product image', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");

    const productPage = new ProductPage(page);
    await productPage.clickProductImage();
    await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=4');
    await page.close();
});

// test('remove from cart', async ({page}) => {
//     const loginPage = new LoginPage(page);
//     await loginPage.goto();
//     await loginPage.login("standard_user", "secret_sauce");

//     const productPage  = new ProductPage(page);
//     await productPage.addToCart();
//     await expect(page.locator('span[class="shopping_cart_badge"]')).toHaveText('1');
//     await productPage.removeFromCart();
//     await expect(page.locator('a[class="shopping_cart_link"]')).toBeVisible();
//     await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
//     await page.close();
// });

//test

//test1