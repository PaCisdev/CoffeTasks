import { test, expect } from '@playwright/test';
import { searchForProduct, applyFilters, verifySearchResults } from './helpers/productsHelpers.ts';
import {chromium, Page} from "playwright";

const filters = {
  minPrice: 10, // Set a non-null value for minPrice
  maxPrice: 100 // You can also set maxPrice if needed
};

test.describe(' 2.Product Search and Filter', async () => {
  test('Should displayed products match the search criteria and filters applied.', async ({ page }) => {
    
    // Search for products related to "electronics"
    await searchForProduct(page, 'electronics');

    // Apply filters to narrow down search results
    const minPrice = 100; // Example minimum price
    const maxPrice = 500; // Example maximum price
    await applyFilters(page, { minPrice, maxPrice });

    // Verify displayed products match search criteria and applied filters
    await verifySearchResults(page, 'electronics', { minPrice, maxPrice });
  });
});
