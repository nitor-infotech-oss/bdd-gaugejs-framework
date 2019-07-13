'use strict';

var _logger = require('../common/logger.lib');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require('selenium-webdriver'),
    Builder = _require.Builder,
    By = _require.By,
    Key = _require.Key,
    until = _require.until,
    Capabilities = _require.Capabilities;

var chromeCapabilities = Capabilities.chrome();

step("Open <browserName> Browser", async function (browserName) {
	var chromeOptions = {
		'args': ['--start-maximized']
	};
	if (process.env.HEADLESS == "true") {
		chromeOptions = { 'args': ['--headless', '--start-maximized'] };
	}
	chromeCapabilities.set('chromeOptions', chromeOptions);
	var driver = await new Builder().forBrowser('chrome').withCapabilities(chromeCapabilities).build();
	gauge.dataStore.scenarioStore.put("driver", driver);
	_logger2.default.logDebug("Driver Initialized");
});

step("Close Browser", async function () {
	var driver = gauge.dataStore.scenarioStore.get("driver");
	await driver.quit();
});