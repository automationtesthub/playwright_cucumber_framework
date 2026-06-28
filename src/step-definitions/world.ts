import { Browser, chromium, expect,Page } from '@playwright/test';

import { LoginPage } from '../pages/loginPage';
import { HomePage } from '../pages/homePage';
//import { LeadPage } from '../pages/leadPage';

////let page: Page;
//let browser: Browser;

import { Before, After, BeforeAll,Status } from '@cucumber/cucumber';
import { LeadPage } from '../pages/leadPage';
import { loadExcel, getExcelDataByTC } from '../utilities/excelReader';

let browser: Browser;
let page: Page;
let context: any;

let loginpage:LoginPage;
let homepage:HomePage;
let leadpage:LeadPage;

let TCName :string;
let data:any;


BeforeAll(async function ()
{
loadExcel('src/testdata/data.xlsx', 'data');

});

Before(async function (scenario) {
  
    this.TCName = scenario.pickle.name;
    try{
    this.data = await getExcelDataByTC(this.TCName);
    }catch(e)
    {
         console.error(e);
    }
    
    console.log("Scenario Name:", scenario.pickle.name);
     this.browser = await chromium.launch({
         channel: 'chrome', // Launch Google Chrome
         headless: false
    });

    this.context = await this.browser.newContext();

    this.page = await this.context.newPage();
    await this.page.goto('http://localhost:100');
     this.loginpage = new LoginPage(this.page);
      this.homepage = new HomePage(this.page);
      this.leadpage = new LeadPage(this.page);
});

After(async function ({result}) {

     if (result?.status === Status.FAILED) {
    const screenshot = await this.page.screenshot({
      fullPage: true
    });

    await this.attach(screenshot, "image/png");
  }
    await this.page.close();
    await this.context.close();
    await this.browser.close();
  
});