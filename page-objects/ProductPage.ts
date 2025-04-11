import {expect, type Page, type Locator } from '@playwright/test';

export class ProductPage {
    readonly page: Page;
    readonly productImage: Locator;
    readonly productName: Locator;
    readonly productDescription: Locator;
    readonly productPrice: Locator;
    readonly addToCartButton: Locator;
    readonly addToCartButton1: Locator;
    readonly removeFromCartButton: Locator;
    readonly CartButton: Locator;

    readonly shoppingCartLink: Locator;
    readonly shoppingCartBadge: Locator;


    constructor(page: Page) {
        this.page = page;
        this.productImage = page.getByAltText('Sauce Labs Backpack');
        // this.productName = page.locator();
        // this.productDescription = page.locator();
        // this.productPrice = page.locator();
        this.addToCartButton = page.locator('button[id="add-to-cart-sauce-labs-backpack"]');
        this.addToCartButton1 = page.locator('button[id="add-to-cart-sauce-labs-bike-light"]');
        this.removeFromCartButton = page.locator('button[id="remove-sauce-labs-backpack"]');
        this.shoppingCartBadge = page.locator('span[class="shopping_cart_badge"]');
        this.shoppingCartLink = page.locator('a[class="shopping_cart_link"]');
        this.CartButton = page.locator('a[class="shopping_cart_link"]');
    }

    async goto(){
        await this.page.goto('https://www.saucedemo.com/inventory.html');
    }
    
    async addToCart() {
        await this.addToCartButton.waitFor({ state: 'visible' });
        await this.addToCartButton.click();
    }

    async addToCart1() {
        await this.addToCartButton1.waitFor({ state: 'visible' });
        await this.addToCartButton1.click();
    }

    async removeFromCart(){
        await this.removeFromCartButton.waitFor({ state: 'visible' });
        await this.removeFromCartButton.click();
    }

    async clickProductImage() {
        await this.productImage.click();
    }

    async clickCartButton() {
        await this.shoppingCartLink.waitFor({ state: 'visible' });
        await this.CartButton.click();
    }
}
