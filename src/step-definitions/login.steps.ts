import { Given, When, Then } from '@cucumber/cucumber';
import { Browser, chromium, expect,Page } from '@playwright/test';

////let page: Page;
//let browser: Browser;

import { Before, After } from '@cucumber/cucumber';

let browser: Browser;
let page: Page;
let context: any;


Before(async function () {
    this.browser = await chromium.launch({
        channel: 'chrome', // Launch Google Chrome
        headless: false
    });

    this.context = await this.browser.newContext();

    this.page = await this.context.newPage();
});

After(async function () {
    await this.page.close();
    await this.context.close();
    await this.browser.close();
});

Given('the user is on the login page', function () {

   // browser =chromium.launch();
   // page = await browser.newPage();
    this.page.goto('http://localhost:100');
  
});

When('the user enters valid credentials', async function () {
  
  await this.page.locator('//input[@name="user_name"]').fill('admin');
  await this.page.locator('//input[@name="user_password"]').fill('admin');
  await this.page.locator('//input[@name="Login"]').click();

});

Then('the user should be redirected to the dashboard', async function () {
  await expect(this.page.locator("//a[text()='Logout']")).toBeVisible();
});

When('the user enters invalid credentials', async function () {
  await this.page.locator('//input[@name="user_name"]').fill('admin');
  await this.page.locator('//input[@name="user_password"]').fill('admi1223');
  await this.page.locator('//input[@name="Login"]').click();
});

Then('an error message should be displayed', async function () {
  await expect(this.page.locator("//*[contains(text(), 'You must specify a valid username and password.')]")).toBeVisible();
});


When('the user leaves the username and password fields empty', async function () {
  await this.page.locator('//input[@name="user_name"]').fill('');
  await this.page.locator('//input[@name="user_password"]').fill('');
  await this.page.locator('//input[@name="Login"]').click();
    await expect(this.page.locator("//*[contains(text(), 'You must specify a valid username and password.')]")).toBeVisible();
});

When('the user enters {string} and {string}', async function (uid: string, pwd: string) {
  await this.page.locator('//input[@name="user_name"]').fill(uid);
  await this.page.locator('//input[@name="user_password"]').fill(pwd);
  await this.page.locator('//input[@name="Login"]').click();
});

Then('the login result should be as expected', async function () {
  await expect(this.page.locator("//*[contains(text(), 'You must specify a valid username and password.')]")).toBeVisible();
});
