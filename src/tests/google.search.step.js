import LoginPage from '../ui_page_objects/login.page';
import GoogleHomePage from '../ui_page_objects/googlehome.page';
import DataReader from '../common/data.readers.lib';
import Logger from '../common/logger.lib';

var fs =  require('fs');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
expect = chai.expect;
chai.Should();

var assert = require("assert");

gauge.step("Search term <term> and expect <expTerm> as first result on google page", function (term,expTerm,done) {
    try{
		var homeUrl = process.env.GOOGLE_BASE_URI;
		browser = gauge.dataStore.scenarioStore.get("browser");
		var homeObj = new GoogleHomePage(browser);
		homeObj.open(homeUrl).then(() => {
			homeObj.search(term).then(() =>{
				Logger.logDebug("Page loaded:");
				homeObj.getFirstSearchResult().then((text)=>{
					expect(expTerm).to.equal(text);
				done();
        }).catch(function(e){Logger.logError(e); done(e);});
			}).catch(function(e){Logger.logError(e); done(e);});
		}).catch(function(e){Logger.logError(e); done(e);});
	}catch(e){
		Logger.logError(e);
		done(e);
	}

});

gauge.step("Login to member portal with credentials <userfile>", function(userfile,done){
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

});

gauge.step("Login to member portal with <username> and <password>", function(username,password,done){
	console.log("in next step");
	var loginObj = new LoginPage(gauge.dataStore.scenarioStore.get("browser"));
	loginObj.signIn(username,password).then(function(){
	   Logger.logInfo("In Member Portal");
	   done();
	}).catch(function(e){Logger.logError(e); done(e);});
});

gauge.step("Check trademark label is <trademarkLabel>", function(trademarkLabel,done){
	var dasboardPageObj = new DashboardPage(gauge.dataStore.scenarioStore.get("browser"));
	dasboardPageObj.waitForTrademarkLoad(5000).then(function(){
		dasboardPageObj.trademark.getValue().then(function(val){
			Logger.logInfo(val);
			try {
					assert(val).to.equal(trademarkLabel);
				} catch (e) {
					Logger.logError(e);
					dasboardPageObj.close();
					done(e);
				}
			done();
		}).catch(function(e){Logger.logError(e); done(e);});
	}).catch(function(e){Logger.logError(e); done(e);});
});
