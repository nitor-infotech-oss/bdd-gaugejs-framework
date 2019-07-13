import GoogleHomePage from '../ui_page_objects/googlehome.page';
import Logger from '../common/logger.lib';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
expect = chai.expect;

step("Search term <term> and expect <expTerm> as first result on google page", async function (term,expTerm) {
    let homeUrl = process.env.GOOGLE_BASE_URI;
		let driver = gauge.dataStore.scenarioStore.get("driver");
		let homeObj = new GoogleHomePage(driver);
		await homeObj.open(homeUrl);
		Logger.logDebug("URL opened:" + homeUrl);
		await homeObj.search(term);
		await homeObj.waitForSearchResultsToLoad(term, 20000);
		let actualTerm = await homeObj.firstSearchResult.getText();
		expect(actualTerm).to.have.string(expTerm);
	
});

step("Search various terms <term>", async function (term) {
    let homeUrl = process.env.GOOGLE_BASE_URI;
		let driver = gauge.dataStore.scenarioStore.get("driver");
		let homeObj = new GoogleHomePage(driver);
		await homeObj.open(homeUrl);
		await homeObj.search(term);
		await homeObj.waitForSearchResultsToLoad(term, 20000);
		let actualTerm = await homeObj.firstSearchResult.getText();
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

