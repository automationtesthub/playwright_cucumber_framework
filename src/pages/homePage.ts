import { Page,expect } from '@playwright/test';

export class HomePage {

 page: Page;

 constructor(page: Page) {
    this.page = page;   
  }

  loc_lnk_logout = "//a[text()='Logout']";
  loc_lnk_New_Lead = "//a[text()='New Lead']";
  loc_lnk_leads = "//a[text()='Leads']";
    
 

async clickLogout(): Promise<void>
  {
    await this.page.click(this.loc_lnk_logout);   
  }  

  async verifyLogout(): Promise<void>
  {
       await expect(this.page.locator(this.loc_lnk_logout)).toBeVisible();
  } 

async clickNewLead(): Promise<void>
  {
    await this.page.click(this.loc_lnk_New_Lead);   
  } 
  
async clickLeads(): Promise<void>
  {
    await this.page.click(this.loc_lnk_leads);   
  }    





    
}


