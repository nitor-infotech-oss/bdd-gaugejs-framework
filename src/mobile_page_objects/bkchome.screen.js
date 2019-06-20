import Logger from '../common/logger.lib';
import Screen from './screen';

export default class BKCHomeScreen extends Screen {
	constructor(client) { 
		super(client);
		this.signInLink = 'new UiSelector().textContains("Sign In Now").className("android.widget.TextView")';
	}
	
		
	openLoginPage() {
		return this.client.click('android=' + this.signInLink);
	}

	waitForHomePage(time){
		return this.client.waitUntil(() => {
			return this.client.getText('android=' + this.signInLink).then((txt) => {
				Logger.logDebug(txt);
				return txt.indexOf('Sign') > -1;
			});
		}, time);	
	}
}