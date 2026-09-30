import { test, expect } from '@playwright/test'

test("login", async ({ page }) => {

    await page.goto('https://qa-cart.com/');

    const username = page.locator("//input[@id='username']")
    await username.fill("arjun.rajesh")
    await expect(page.locator("//input[@id='username']")).toHaveValue("arjun.rajesh")

    const password = page.locator("//input[@id='password']")
    await password.fill("Arjun123$")
    await expect(page.locator("//input[@id='password']")).toHaveValue("Arjun123$")

    const loginbtn =page.locator("//button[normalize-space()='Log in']")
    await loginbtn.click()

    const logoutbtn =page.locator('a[href*="customer-logout"]')
    await expect(logoutbtn).toBeVisible()


})