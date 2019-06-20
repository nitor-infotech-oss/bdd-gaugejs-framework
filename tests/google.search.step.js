'use strict';

var _login = require('../ui_page_objects/login.page');

var _login2 = _interopRequireDefault(_login);

var _googlehome = require('../ui_page_objects/googlehome.page');

var _googlehome2 = _interopRequireDefault(_googlehome);

var _dataReaders = require('../common/data.readers.lib');

var _dataReaders2 = _interopRequireDefault(_dataReaders);

var _logger = require('../common/logger.lib');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = require('fs');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
expect = chai.expect;
chai.Should();

var assert = require("assert");

gauge.step("Search term <term> and expect <expTerm> as first result on google page", function (term, expTerm, done) {
	try {
		var homeUrl = process.env.GOOGLE_BASE_URI;
		browser = gauge.dataStore.scenarioStore.get("browser");
		var homeObj = new _googlehome2.default(browser);
		homeObj.open(homeUrl).then(function () {
			homeObj.search(term).then(function () {
				_logger2.default.logDebug("Page loaded:");
				homeObj.getFirstSearchResult().then(function (text) {
					expect(expTerm).to.equal(text);
					done();
				}).catch(function (e) {
					_logger2.default.logError(e);done(e);
				});
			}).catch(function (e) {
				_logger2.default.logError(e);done(e);
			});
		}).catch(function (e) {
			_logger2.default.logError(e);done(e);
		});
	} catch (e) {
		_logger2.default.logError(e);
		done(e);
	}
});

gauge.step("Login to member portal with credentials <userfile>", function (userfile, done) {
	console.log("start reading file:" + userfile);
	var contentsObj;
	var readerObj = new _dataReaders2.default();
	contentsObj = readerObj.readContentsToJson(process.env.test_data_path + userfile, 0);
	_logger2.default.logDebug("Excel contents:" + contentsObj);
	var username = contentsObj.username;
	var password = contentsObj.password;
	console.log("in next step");
	var loginObj = new _login2.default(gauge.dataStore.scenarioStore.get("browser"));
	loginObj.signIn(username, password).then(function () {
		_logger2.default.logInfo("In Member Portal");
		done();
	}).catch(function (e) {
		_logger2.default.logError(e);done(e);
	});
});

gauge.step("Login to member portal with <username> and <password>", function (username, password, done) {
	console.log("in next step");
	var loginObj = new _login2.default(gauge.dataStore.scenarioStore.get("browser"));
	loginObj.signIn(username, password).then(function () {
		_logger2.default.logInfo("In Member Portal");
		done();
	}).catch(function (e) {
		_logger2.default.logError(e);done(e);
	});
});

gauge.step("Check trademark label is <trademarkLabel>", function (trademarkLabel, done) {
	var dasboardPageObj = new DashboardPage(gauge.dataStore.scenarioStore.get("browser"));
	dasboardPageObj.waitForTrademarkLoad(5000).then(function () {
		dasboardPageObj.trademark.getValue().then(function (val) {
			_logger2.default.logInfo(val);
			try {
				assert(val).to.equal(trademarkLabel);
			} catch (e) {
				_logger2.default.logError(e);
				dasboardPageObj.close();
				done(e);
			}
			done();
		}).catch(function (e) {
			_logger2.default.logError(e);done(e);
		});
	}).catch(function (e) {
		_logger2.default.logError(e);done(e);
	});
});