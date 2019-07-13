import Page from "./page";
import Logger from '../common/logger.lib';
const {Builder, By, Key, until} = require('selenium-webdriver');

export default class RealWorldHomePage extends Page {

    constructor(driver) { 
            super(driver);		
        }

    get loginLink() {return this.driver.findElement(By.linkText("Sign in"));}
    get signUpLink() {return this.driver.findElement(By.linkText("Sign up"));}

}