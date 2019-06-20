'use strict';
import Logger from '../common/logger.lib';
var webdriverio = require('webdriverio');
var FirefoxProfile = require('firefox-profile');
var ffProf = new FirefoxProfile();
ffProf.setPreference('browser.newtab.url', '');

var options = {
	desiredCapabilities: {
		browserName: 'chrome'
	},
	waitforTimeout: 30000
};

var browser = null;
var client = null;

gauge.step("Open <browserName> Browser", function (browserName,done) {
	options.desiredCapabilities.browserName = browserName;
	if (browserName == "MSIE") options.desiredCapabilities.version = "10.0";
	if (browserName == "firefox") options.desiredCapabilities.firefox_profile = ffProf;
	Logger.logInfo(options);
	browser = webdriverio.remote(options).init().windowHandleMaximize();
	gauge.dataStore.scenarioStore.put("browser", browser);
	done();
});

gauge.step("Close Browser", function (done) {
	browser.end().then(function () {
		done();
	});
});

gauge.step("Open BCKC App on <mobileOS>", function (done) {
	var bkcOptions = {
		desiredCapabilities: {
			platformName: 'Android',
			platformVersion: '6',
			deviceName: 'Nexus_6_API_24',
			app: 'https://rink.hockeyapp.net/api/2/apps/cf6305937d5340508227d2994a7934c8/app_versions/82?format=apk&avtoken=c99bce3a5be5ba8af4516fe646594947943751eb'                         // device name
		},
		host: 'localhost',                                  // localhost
		port: 4723                                          // port for appium
	};
	client = webdriverio.remote(bkcOptions);
	gauge.dataStore.scenarioStore.put("client", client);
	
});