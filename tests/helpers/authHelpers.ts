import { Page } from '@playwright/test';

export async function navigateToSignupPage(page: Page) {
    await page.goto('localhost:8080');
}

export async function registerNewUser(page: Page, username: string, email: string, password: string) {
    await page.fill('input#username', username);
    await page.fill('input#email', email);
    await page.fill('input#password', password);
    await page.click('button[type="submit"]');
}

export async function login(page: Page, username: string, password: string) {
    await page.fill('input#login-username', username);
    await page.fill('input#login-password', password);
    await page.click('button[type="submit"]');
}
