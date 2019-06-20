'use strict';

var _bkchome = require('../mobile_page_objects/bkchome.screen');

var _bkchome2 = _interopRequireDefault(_bkchome);

var _bkclogin = require('../mobile_page_objects/bkclogin.screen');

var _bkclogin2 = _interopRequireDefault(_bkclogin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var webdriverio = require('webdriverio');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
expect = chai.expect;
chai.Should();

var assert = require("assert");

gauge.step("Open app screen and go to login page", function (done) {
	var client = gauge.dataStore.scenarioStore.get("client");
	client.init().then(function () {
		var bkcHomeScreen = new _bkchome2.default(client);
		bkcHomeScreen.waitForHomePage(10000).then(function () {
			bkcHomeScreen.openLoginPage().then(function () {
				console.log("Login page opened");
				var bkcLoginScreen = new _bkclogin2.default(gauge.dataStore.scenarioStore.get("client"));
				bkcLoginScreen.signIn("abc@sk5.com", "Orbita11").then(function () {
					console.log("BKC Signed In");
					done();
				});
			});
		});
	});
});