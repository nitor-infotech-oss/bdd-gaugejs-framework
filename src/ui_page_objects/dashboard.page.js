import Page from "./page";
import Logger from '../common/logger.lib';

export default class DashboardPage extends Page {
	constructor(browser) { 
		super(browser);		
	}
	get trademark() {return this.browser.element("div.rmq-693ce4c1.rmq-17546ec2 div span");} 
	get defaultPlan() {return this.browser.element("div.carePlansContainer div div div div:nth-child(2) div");}
	get logoutLink() {return this.browser.element("=Logout");}
	get userAvatar() {return this.browser.element("i.thin-0701_user_profile_avatar_man_male");} 
		
	logout(){
        return this.userAvatar.click().then(() => {
			return this.logoutLink.click();
		});	
	}
	
	waitForDefaultPlanLoad(time){
		Logger.logInfo("Wait for default plan load");
		return this.browser.waitUntil(() => {
			Logger.logInfo("Waiting for - " + time);
			return this.defaultPlan.getText().then((str) => {
				Logger.logInfo("Value" + JSON.stringify(str) + "Length" + str.length);
				return str.length > 0;			
			}).catch(function(e){Logger.logError(e)});
			
		}, time).catch(function(e){Logger.logError(e)});	
	}
	
	waitForTrademarkLoad(time){
		return this.browser.waitUntil(() => {
			return this.trademark.getText().then(function(str){
				Logger.logDebug("Value" + JSON.stringify(str) + "Length" + str.length);
				return str.length > 0;			
			});
			
		}, time);	
	}
	
}