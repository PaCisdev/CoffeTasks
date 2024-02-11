import { test, expect } from '@playwright/test';
import { login, navigateToSignupPage, registerNewUser } from './helpers/authHelpers.ts';
import {chromium, Page} from "playwright";

test.describe('1.User Registration and Login:', () => {
    test('successful registration should allow to login in the page.', async ({ page }) => {
    // Navigate to signup page
    await navigateToSignupPage(page);

    // Create new user account
     const username = 'testuser';
     const email = 'test@example.com';
     const password = 'Test1234';
     await registerNewUser(page, username, email, password);

    // Verify successful registration and redirect to login page
    expect(page.url()).toContain('/login');

    await login(page, username,password);

    // Confirm successful login and redirection to homepage
    expect(page.url()).toContain('/homepage');
});
});
