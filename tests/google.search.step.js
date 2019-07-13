'use strict';

var _googlehome = require('../ui_page_objects/googlehome.page');

var _googlehome2 = _interopRequireDefault(_googlehome);

var _logger = require('../common/logger.lib');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
expect = chai.expect;

step("Search term <term> and expect <expTerm> as first result on google page", async function (term, expTerm) {
	var homeUrl = process.env.GOOGLE_BASE_URI;
	var driver = gauge.dataStore.scenarioStore.get("driver");
	var homeObj = new _googlehome2.default(driver);
	await homeObj.open(homeUrl);
	_logger2.default.logDebug("URL opened:" + homeUrl);
	await homeObj.search(term);
	await homeObj.waitForSearchResultsToLoad(term, 20000);
	var actualTerm = await homeObj.firstSearchResult.getText();
	expect(actualTerm).to.have.string(expTerm);
});

step("Search various terms <term>", async function (term) {
	var homeUrl = process.env.GOOGLE_BASE_URI;
	var driver = gauge.dataStore.scenarioStore.get("driver");
	var homeObj = new _googlehome2.default(driver);
	await homeObj.open(homeUrl);
	await homeObj.search(term);
	await homeObj.waitForSearchResultsToLoad(term, 20000);
	var actualTerm = await homeObj.firstSearchResult.getText();
	expect(actualTerm).to.not.be.null;
});

/* gauge.step("Login to member portal with credentials <userfile>", function(userfile,done){
	console.log("start reading file:" + userfile);
	var contentsObj;
	var readerObj = new DataReader();
	contentsObj = readerObj.readContentsToJson(process.env.test_data_path + userfile,0);
	Logger.logDebug("Excel contents:"+contentsObj);
	var username = contentsObj.username;
	var password = contentsObj.password;
	console.log("in next step");
	var loginObj = new LoginPage(gauge.dataStore.scenarioStore.get("browser"));
	loginObj.signIn(username,password).then(function(){
	   Logger.logInfo("In Member Portal");
	   done();
	}).catch(function(e){Logger.logError(e); done(e);});

}); */