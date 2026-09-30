import { test, expect } from '@playwright/test';

test('fill automation playground field', async ({ page }) => {

    await page.goto('https://www.anuradhaagarwal.com/automationplayground');

    await page.locator('input[name="first-name"]').fill("arjun")
    await expect(page.locator('input[name="first-name"]')).toHaveValue("arjun")

    await page.locator('#input_comp-ml6m6ugi').fill("arjun.rajesh@spiderworks.in")
    await expect(page.locator('#input_comp-ml6m6ugi')).toHaveValue("arjun.rajesh@spiderworks.in")

    // await page.locator('#textarea_comp-ml6mbi00').fill("test feedbak")
    // await expect(page.locator('#textarea_comp-ml6mbi00')).toHaveValue('test feedbak')

    const feedbackarea = page.locator('#textarea_comp-ml6mbi00')
    await feedbackarea.fill("test feedbak")
    await expect(feedbackarea).toHaveValue('test feedbak')

    // const feedbackarea = page.locator('#textarea_comp-ml6mbi00')
    // feedbackarea.pressSequentially("test feedbak", { delay: 80 })
    // await expect(feedbackarea).toHaveValue('test feedbak')

}) 