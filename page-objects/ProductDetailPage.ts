import {expect, type Page, type Locator } from '@playwright/test';

export class ProductDetailPage{
    readonly page: Page;
    readonly addToCartButton: Locator;

    constructor(page){
        this.page = page;
        this.addToCartButton = page.locator('button[id="add-to-cart"]');
    }

    async goto(){
        await this.page.goto('https://www.saucedemo.com/inventory-item.html?id=4');
    }

    async addToCart() {
        await this.addToCartButton.waitFor({ state: 'visible' });
        await this.addToCartButton.click();
    }

}