import Page from "./page";
import Logger from '../common/logger.lib';
const {Builder, By, Key, until} = require('selenium-webdriver');

export default class RealWorldDashboardPage extends Page {

    constructor(driver) { 
            super(driver);		
        }

    get newArticleLink() {return this.driver.findElement(By.xpath("//a[contains(.,'New Article')]"));}
    get globalFeedLink() {return this.driver.findElement(By.linkText("Global Feed"));}
    get readMoreLink() {return this.driver.findElement(By.xpath("//span[contains(text(), 'Read more')]"));}
    get titleTextBox() {return this.driver.findElement(By.xpath("//input[@placeholder='Article Title']"));}
    get aboutTextBox() {return this.driver.findElement(By.xpath("//input[@placeholder='What's this article about?']"));}
    get contentsTextBox() {return this.driver.findElement(By.xpath("//textarea[@placeholder='Write your article (in markdown)']"));}
    get tagsTextBox() {return this.driver.findElement(By.xpath("//input[@placeholder='Enter tags']"));}
    get publishButton() {return this.driver.findElement(By.tagName("button"));}

    async waitForDashboardPageToLoad(time){
		await this.driver.wait(until.elementIsVisible(this.newArticleLink), time);
	}

    async waitForFeedsToLoad(time) {
        await this.driver.wait(until.elementIsVisible(this.readMoreLink), time);
    }

    async publishNewArticle(title, about, contents, tags) {
        await this.titleTextBox.sendKeys(title);
        await this.aboutTextBox.sendKeys(about);
        await this.contentsTextBox.sendKeys(contents);
        await this.tagsTextBox.sendKeys(tags);
        await this.publishButton.click();
        await this.driver.sleep(5000);
    }
}