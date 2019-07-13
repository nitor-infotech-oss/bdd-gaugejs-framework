import Page from "./page";
import Logger from '../common/logger.lib';
const {Builder, By, Key, until} = require('selenium-webdriver');

export default class RealWorldLoginPage extends Page {

    constructor(driver) { 
            super(driver);		
        }

    get username() {return this.driver.findElement(By.xpath("//input[@placeholder='Email']"));}
	get password() {return this.driver.findElement(By.xpath("//input[@placeholder='Password']"));}
	get loginBtn()  {return this.driver.findElement(By.xpath("//button[contains(.,'Sign in')]"));}

    async login(username, password) {
        await this.username.sendKeys(username);
        await this.password.sendKeys(password);
        await this.loginBtn.click();
        await this.driver.sleep(10000);
    }
}