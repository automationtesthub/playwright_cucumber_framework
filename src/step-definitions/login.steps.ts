import { Given, When, Then } from '@cucumber/cucumber';


Given('the user is on the login page',async function () {

   // browser =chromium.launch();
   // page = await browser.newPage();
   
  
  
});

When('the user enters valid credentials', async function () {
  
  
  await this.loginpage.login(this.data.username,this.data.password);

});

Then('the user should be redirected to the dashboard', async function () {
 
  await this.homepage.verifyLogout();

});

When('the user enters invalid credentials', async function () {
 
   await this.loginpage.login("admin","admi1223");
});

Then('an error message should be displayed', async function () {
 
  await this.loginpage.isErrorMsgDisplayed();
  
});


When('the user leaves the username and password fields empty', async function () {

  await this.loginpage.login("","");
  await this.loginpage.isErrorMsgDisplayed();
    
});

When('the user enters {string} and {string}', async function (uid: string, pwd: string) {
  
  await this.loginpage.login(uid,pwd);
});

Then('the login result should be as expected', async function () {
 
  await this.loginpage.isErrorMsgDisplayed();
});
