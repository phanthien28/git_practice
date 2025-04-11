import {expect, type Page, type Locator } from "@playwright/test";

export class LoginPage {
    private page: Page;
    private usernameInput: Locator;
    private passwordInput: Locator;
    private loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        //tags elements by id, class, name, text, etc.
        this.usernameInput = page.getByPlaceholder('Username');
        this.passwordInput = page.getByPlaceholder('Password');
        //CSS Selector
        this.loginButton = page.locator('input[type="submit"]');

        //XPath Selector
        // this.usernameInput = page.locator('//input[@placeholder="Username"]');
        // this.passwordInput = page.locator('//input[@placeholder="Password"]');
        // this.loginButton = page.locator('//input[@id="login-button"]');
    } 

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);   
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}