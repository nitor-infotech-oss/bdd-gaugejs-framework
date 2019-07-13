import Page from "./page";
import Logger from '../common/logger.lib';
const {Builder, By, Key, until} = require('selenium-webdriver');

export default class RealWorldDashboardPage extends Page {

    constructor(driver) { 
            super(driver);		
        }

    get newArticleLink() {return this.driver.findElement(By.xpath("//a[contains(.,'New Article')]"));}
    get globalFeedLink() {return this.driver.findElement(By.linkText("Global Feed"));}

    async waitForDashboardPageToLoad(time){
		await this.driver.wait(until.elementIsVisible(this.newArticleLink), time);
	}
}