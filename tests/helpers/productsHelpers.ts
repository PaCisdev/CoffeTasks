import { Page , expect} from '@playwright/test';

// Command to search for products by keyword
export async function searchForProduct(page: Page, keyword: string) {

    await page.fill('input#search-input', keyword); // Assuming there's an input field with id "search-input" for search
    await page.click('button#search-button'); // Assuming there's a button with id "search-button" to initiate search

    // Optionally, wait for search results to load
    await page.waitForSelector('.product-list'); // Assuming there's a container with class "product-list" for displaying search results
}

// Command to apply filters to narrow down search results
export async function applyFilters(page: Page, filters: { minPrice?: number, maxPrice?: number }) {

    if (filters.minPrice !== undefined) {
        await page.fill('input#min-price', filters.minPrice.toString()); // Assuming there's an input field with id "min-price" for minimum price
    }
    if (filters.maxPrice !== undefined) {
        await page.fill('input#max-price', filters.maxPrice.toString()); // Assuming there's an input field with id "max-price" for maximum price
    }
    await page.click('button#apply-filters'); // Assuming there's a button with id "apply-filters" to apply filters
    
    // Optionally, wait for filtered results to load
    await page.waitForSelector('.filtered-product-list'); // Assuming there's a container with class "filtered-product-list" for displaying filtered results
}

// Command to verify search results based on keyword and filters
export async function verifySearchResults(page: Page, keyword: string, filters: { minPrice?: number, maxPrice?: number }) {

    // Verify search keyword is present in displayed products
    const productTitles = await page.$$eval('.product-list .product-title', (elements: Element[]) => elements.map(element => element.textContent));
    expect(productTitles.every(title => title.toLowerCase().includes(keyword.toLowerCase()))).toBeTruthy();

    // Verify filters are applied correctly
    if (filters.minPrice !== undefined && filters.maxPrice !== undefined) {
        const productPrices = await page.$$eval('.product-list .product-price', (elements: Element[]) => elements.map(element => parseFloat(element.textContent.replace('$', ''))));
        expect(productPrices.every(price => price >= filters.minPrice && price <= filters.maxPrice)).toBeTruthy();
    }
}
