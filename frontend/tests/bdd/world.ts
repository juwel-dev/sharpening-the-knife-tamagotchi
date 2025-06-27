import { Browser, chromium } from "@playwright/test";
import { After, Before, setDefaultTimeout, world } from "@cucumber/cucumber";

let browser: Browser;
setDefaultTimeout(5 * 1000);

Before(async () => {
  browser = await chromium.launch({ headless: true });

  const context = await browser.newContext();
  world.page = await context.newPage();
});

After(async () => {
  await browser.close();
});
