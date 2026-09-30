import { test, expect } from '@playwright/test'

test("login", async ({ page }) => {

    await page.goto('https://qa-cart.com/');

    const username = page.locator("//input[@id='username']")
    await username.fill("arjun.rajesh")
    await expect(page.locator("//input[@id='username']")).toHaveValue("arjun.rajesh")

    const password = page.locator("//input[@id='password']")
    await password.fill("Arjun123$")
    await expect(page.locator("//input[@id='password']")).toHaveValue("Arjun123$")

    const loginbtn = page.locator("//button[normalize-space()='Log in']")
    await loginbtn.click()

    const logoutbtn = page.locator('a[href*="customer-logout"]')
    await expect(logoutbtn).toBeVisible()

    const addressbtn = page.locator('a[href*="edit-address"]')
    await addressbtn.click()
    await expect(page.locator("h2").filter({ hasText: "Billing address" })).toBeVisible()

    const addressaddlink = page.locator('a[href*="edit-address/billing"]')
    await addressaddlink.click()
    await expect(page.locator("h2").filter({ hasText: "Billing address" })).toBeVisible()

    await page.locator("#billing_first_name").fill("Arjun")
    await page.locator("#billing_last_name").fill("Rajesh")
    await page.locator("#billing_address_1").fill("test address 1")
    await page.locator("#billing_address_2").fill("test address 2")
    await page.locator("#billing_city").fill("kolenchery")
    await page.locator("#billing_postcode").fill("682311")

    await expect(page.locator('#billing_email')).toContainText("arjun.rajesh@spiderworks.in")

    await page.locator("button[name='save_address']").click()

    await expect(page.locator(".woocommerce-message")).toContainText("Address changed successfully")

    


})