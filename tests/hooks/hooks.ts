import { After, AfterAll, Before, BeforeAll ,AfterStep} from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext } from '@playwright/test';

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () {
    browser = await chromium.launch({headless: !!process.env.CI || true, });
});

Before(async function () {
    context = await browser.newContext();
    this.page = await context.newPage();
});

After(async function () {
    await this.page.close();
    await context.close();
});

AfterAll(async function () {
    await browser.close();
});

AfterStep(async function ({result,pickle}) {
    if (result.status === 'FAILED') {
        const screenshotPath = `tests/CucumberReports/screenshots/${pickle.name}.png`;
        const screenshot = await this.page.screenshot({ path: screenshotPath,type:'png', fullPage: true });
        this.attach(screenshot, 'image/png');
    }
});