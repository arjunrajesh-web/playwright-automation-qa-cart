import { test, expect } from '@playwright/test';

test("Load Homepage",async ({page}) => {

    await page.goto("https://qa-cart.com/")
    await expect(page).toHaveTitle("QA TEST AUTOMATION DEMO STORE BY ANURADHA AGARWAL")
})