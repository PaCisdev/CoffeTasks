import { test, expect } from '@playwright/test';
import { searchForProduct, selectProduct, addToCart, verifyCart } from './helpers/cartHelpers.ts';
import {chromium, Page} from "playwright";

test.describe('3. Adding Items to Cart:', async () => {
  
  test('card should updates correctly with the selected item', async ({ page }) => {  

    // Search for products and select a product
    await searchForProduct(page, 'electronics');
    await selectProduct(page);

    // Add the product to the cart
    await addToCart(page);

    // Verify that the cart updates correctly with the selected item
    await verifyCart(page);
  });
});