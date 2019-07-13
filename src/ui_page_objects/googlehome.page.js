import Page from "./page";
import Logger from '../common/logger.lib';
const {Builder, By, Key, until} = require('selenium-webdriver');

export default class GoogleHomePage extends Page {
	constructor(driver) {
		super(driver);
	}

	get searchField() {return this.driver.findElement(By.name("q"));}
	get searchBtn() {return this.driver.findElement(By.xpath("//input[@value='Google Search']")); }
	get firstSearchResult() {return this.driver.findElement(By.css("h3.LC20lb"));}

	async search(term) {
		await this.searchField.sendKeys(term);
		await this.driver.wait(until.elementIsVisible(this.searchBtn), 20000);
		await this.searchBtn.click();
	}

	async waitForSearchResultsToLoad(term,time){
		await this.driver.wait(until.titleContains(term), time);
	}

}
