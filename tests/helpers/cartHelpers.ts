import { Page, expect } from '@playwright/test';

// Command to search for products by keyword
export async function searchForProduct(page: Page, keyword: string) {
    // Implement search functionality here
    // Example:
    await page.fill('input#search-input', keyword);
    await page.click('button#search-button');
    await page.waitForSelector('.product-list');
}

// Command to select a product from the search results and navigate to its details page
export async function selectProduct(page: Page) {
    // Implement selecting a product functionality here
    // Example:
    const productLinks = await page.$$('.product-list .product-link');
    await productLinks[0].click(); // Clicking the first product for demonstration purposes
}

// Command to add the selected product to the shopping cart
export async function addToCart(page: Page) {
    // Implement adding the product to the cart functionality here
    // Example:
    await page.click('button#add-to-cart');
    await page.waitForSelector('.cart-items');
}

// Command to verify that the cart updates correctly with the selected item
export async function verifyCart(page: Page) {
    // Implement cart verification functionality here
    // Example:
    const cartItemCount = await getCartItemCount(page);
    expect(cartItemCount).toBeGreaterThan(0);

    const cartTotalPrice = await getCartTotalPrice(page);
    expect(cartTotalPrice).toBeGreaterThan(0);
}

// Command to get the number of items in the cart
export async function getCartItemCount(page: Page): Promise<number> {
    // Implement getting the number of items in the cart functionality here
    // Example:
    const cartItems = await page.$$('.cart-items .cart-item');
    return cartItems.length;
}

// Command to get the total price of items in the cart
export async function getCartTotalPrice(page: Page): Promise<number> {
    // Implement getting the total price of items in the cart functionality here
    // Example:
    const cartTotalElement = await page.$('.cart-total');
    const cartTotalText = await cartTotalElement?.textContent();
    return parseFloat(cartTotalText!.replace('$', ''));
}

// Command to remove an item from the cart by its index
export async function removeItemFromCart(page: Page, index: number) {
    // Implement removing an item from the cart functionality here
    // Example:
    const cartItems = await page.$$('.cart-items .cart-item');
    if (index >= 0 && index < cartItems.length) {
        const removeButtons = await page.$$('.cart-items .cart-item .remove-button');
        await removeButtons[index].click();
        // Optionally wait for the cart to update
        await page.waitForSelector('.cart-items');
    }
}
