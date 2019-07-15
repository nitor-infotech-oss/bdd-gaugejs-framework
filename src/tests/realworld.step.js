'use strict';
import Logger from '../common/logger.lib';
import RealWorldHomePage from '../ui_page_objects/realworld_home.page';
import RealWorldLoginPage from '../ui_page_objects/realworld_login.page';
import RealWorldDashboardPage from '../ui_page_objects/realworld_dashboard.page';

const {Builder, By, Key, until} = require('selenium-webdriver');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
expect = chai.expect;

step("Login to realword angular with <username> and <password>", async function (username, password) {
    let homeUrl = process.env.ANGULAR_BASE_URI;
    let driver = gauge.dataStore.scenarioStore.get("driver");
    let homeObj = new RealWorldHomePage(driver);
    await homeObj.open(homeUrl);
    await homeObj.loginLink.click();
    let loginObj = new RealWorldLoginPage(driver);
    await loginObj.login(username, password);
    let dashboardPage = new RealWorldDashboardPage(driver);
    await dashboardPage.waitForDashboardPageToLoad(20000);
    expect(dashboardPage.newArticleLink.getText()).to.not.be.null;
});

step("Verify that global feed section is loading", async function () {
    let driver = gauge.dataStore.scenarioStore.get("driver");
    let dashboardPage = new RealWorldDashboardPage(driver);
    await dashboardPage.globalFeedLink.click();
    Logger.logDebug("Global Feed Clicked");
    await driver.sleep(5000);
    await dashboardPage.waitForFeedsToLoad(20000);
    expect(dashboardPage.readMoreLink.getText()).to.not.be.null;
});

step("Add articles with following details <table>", async function (table) {
    let driver = gauge.dataStore.scenarioStore.get("driver");
    const start = async () => {
        await asyncForEach(table.rows, async (article) => {
            Logger.logDebug(article.cells[0] + article.cells[1] + article.cells[2] + article.cells[3]);
            let dashboardPage = new RealWorldDashboardPage(driver);
            await driver.sleep(5000);
            Logger.logDebug(driver);
            Logger.logDebug(dashboardPage);
            await dashboardPage.newArticleLink.click();
            await dashboardPage.publishNewArticle(article.cells[0], article.cells[1], 
                                                article.cells[2], article.cells[3]);
            await driver.sleep(3000);
        });
    }
    start(driver);
});

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}