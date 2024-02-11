E-commerce Website Testing with Playwright

Objective

The objective of this project is to validate the functionality of key features on an e-commerce website using TypeScript and Playwright. The focus will be on ensuring that the user registration and login process, product search and filtering, and adding items to the cart work as expected.

Scenario to Test

1. User Registration and Login:
Navigate to the e-commerce website's signup page.
Create a new user account by entering a unique username, email, and password. Handle any user input validations.
Verify successful registration and redirect to the login page.
Log in with the newly created credentials and confirm that the login is successful, and the user is directed to the homepage.
2. Product Search and Filter:
Use the search function to find products related to "electronics."
Apply filters to narrow down the search results to items within a specific range.
Verify that the displayed products match the search criteria and filters applied.
3. Adding Items to Cart:
Select a product from the search results and navigate to its details page.
Add the product to the shopping cart.
Verify that the cart updates correctly with the selected item.
Tasks

Task 1: Test Implementation
Implement automated tests in Playwright for the outlined scenarios.
Ensure the tests are modular and reusable.
Running the Tests

To run the automated tests:

Clone this repository to your local machine.
Install dependencies using

'npm install.'

Run the Playwright tests using

'npx playwright test.'

If you find any issues or have suggestions for improvement, please feel free to open an issue or submit a pull request. Contributions are welcome!

License

This project is licensed under the MIT License.