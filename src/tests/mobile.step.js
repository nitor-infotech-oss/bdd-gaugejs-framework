/* 'use strict';
import BKCHomeScreen from '../mobile_page_objects/bkchome.screen';
import BKCLoginScreen from '../mobile_page_objects/bkclogin.screen';

var webdriverio = require('webdriverio');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
expect = chai.expect;
chai.Should();

var assert = require("assert");

gauge.step("Open app screen and go to login page", function (done) {
	var client = gauge.dataStore.scenarioStore.get("client");	
	client.init().then(()=>{
		var bkcHomeScreen = new BKCHomeScreen(client);
		bkcHomeScreen.waitForHomePage(10000).then(()=>{
			bkcHomeScreen.openLoginPage().then(()=>{
				console.log("Login page opened");
				var bkcLoginScreen = new BKCLoginScreen(gauge.dataStore.scenarioStore.get("client"));
				bkcLoginScreen.signIn("abc@sk5.com","Orbita11").then(()=>{
					console.log("BKC Signed In");
					done();
				});
				
			});
		});		
	});
	
});


 */