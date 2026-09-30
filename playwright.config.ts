import { defineConfig, expect} from '@playwright/test';
export default({
    testdir: './tests',
    timeout: 40 * 1000,
    expect: {
     timeout: 40 * 1000,
    },
    reporter: 'html',
    use:{
        browsername: 'chromium',
        headless: false,
    }
})