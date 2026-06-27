import { Given, When, Then } from '@cucumber/cucumber';


Given('the user click on new lead link', async function () {
  
  await this.homepage.clickNewLead();
  

});

Then('fill the mandatory fields and click on save button', async function () {
   
  await this.leadpage.createlead(this.data.lastname,this.data.company);

});

