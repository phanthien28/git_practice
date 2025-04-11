import { expect, type Page, type Locator } from "@playwright/test";

export class CartPage{

    readonly page: Page;
    readonly title: Locator;


    constructor(page: Page) {
        this.page = page;
        this.title = page.getByTitle('Your Cart');
    }

    async goto(){
        await this.page.goto('https://www.saucedemo.com/cart.html');
    }
}