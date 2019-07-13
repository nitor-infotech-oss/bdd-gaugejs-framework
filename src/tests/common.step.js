'use strict';
import Logger from '../common/logger.lib';
const {Builder, By, Key, until, Capabilities} = require('selenium-webdriver');
let chromeCapabilities = Capabilities.chrome();

step("Open <browserName> Browser", async function (browserName) {
	let chromeOptions = {
    	'args': ['--start-maximized']
	};
	if (process.env.HEADLESS == "true") {
		chromeOptions = { 'args': ['--headless', '--start-maximized'] };
	}
	chromeCapabilities.set('chromeOptions', chromeOptions);
    let driver = await new Builder().forBrowser('chrome').withCapabilities(chromeCapabilities).build();
	gauge.dataStore.scenarioStore.put("driver", driver);
	Logger.logDebug("Driver Initialized");
});

step("Close Browser", async function () {
	let driver = gauge.dataStore.scenarioStore.get("driver");
	await driver.quit();
});
