import { Given, When, Then } from "@cucumber/cucumber";



Given('user open website {string}', async function (string) {
   await this.page.goto(string);
});



When('user enter username {string}', async function (string) {
   await this.page.fill('input[id="user-name"]', string);
});


When('user enter password {string}', async function (string) {
    await this.page.fill('input[id="password"]', string);
});



When('user click on login button', async function () {
    await this.page.click('input[id="login-button"]');
});


Then('user should be logged in successfully', async function () {
    await this.page.waitForSelector('div[id="inventory_container"]', { state: 'visible' });
});