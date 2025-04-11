import {test, expect} from '@playwright/test';
import { LoginPage } from '../page-objects/LoginPage';
import { ProductPage } from '../page-objects/ProductPage';
import { ProductDetailPage } from '../page-objects/ProductDetailPage';

test('add to cart detail', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    const productPage = new ProductPage(page);
    await productPage.clickProductImage();

    const productDetailPage = new ProductDetailPage(page);
    await productDetailPage.addToCart();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=4');
    await page.close();
});