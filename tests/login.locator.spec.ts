import { test, expect } from '@playwright/test'

test("login", async ({ page }) => {

    await page.goto('https://qa-cart.com/');

    const username = page.getByLabel("Username or email address")
    await username.fill("arjun.rajesh")
    await expect(page.getByLabel("Username or email address")).toHaveValue("arjun.rajesh")

    const password = page.getByRole("textbox",{name:"password"})
    await password.fill("Arjun123$")
    await expect(page.getByRole("textbox",{name:"password"})).toHaveValue("Arjun123$")

    const loginbtn =page.getByRole("button",{name:"LOG IN"})
    await loginbtn.click()

    const logoutbtn =page.getByRole('link', { name: 'Log out' })
    await expect(logoutbtn).toBeVisible()


})