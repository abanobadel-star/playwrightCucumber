import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from '@playwright/test';


Given(/^I navigate to "([^"]*)"$/, async function (url: string) {
  await this.page.goto(url);
});
When('i enter {string} in the search box', async function (string) {
   await this.page.fill('textarea[name="q"]', string);
   await this.page.keyboard.press('Enter');

});

Then(/^the page title should contain "([^"]*)"$/, async function (title: string) {
  const pageTitle = await this.page.title();
  expect(pageTitle).toContain(title);
});
