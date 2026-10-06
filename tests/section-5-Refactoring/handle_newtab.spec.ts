import { test, expect } from '@playwright/test';
const loginData = {
    user: 'anuradha.learn@gmail.com',
    password: 'Play@1234#$',
    baseUrl: 'https://qa-cart.com/',
};

const testData = {

    product: {
        name: 'Assorted Coffee',
        expectedUrl: /assorted-coffee/
    }

};
test.beforeEach(async ({ page }) => {

    await page.goto(loginData.baseUrl);

    await page.getByRole('textbox', {
        name: 'Username or email address'
    }).fill(loginData.user);

    await page.getByRole('textbox', {
        name: 'Password'
    }).fill(loginData.password);

    await page.getByRole('button', {
        name: 'Log in'
    }).click();

    await expect(
        page.getByLabel('Account pages')
            .getByRole('link', { name: 'Log out' })
    ).toBeVisible();

});

test('View product details in new tab', async ({ page }) => {
    await test.step('Navigate to DemoShop', async () => {

        await page.getByRole('link', {
            name: 'DemoShop'
        }).click();

        await expect(page).toHaveURL(/shop/);

    })
})