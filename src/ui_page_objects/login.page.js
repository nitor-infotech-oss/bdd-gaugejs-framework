import Page from "./page";
import Logger from '../common/logger.lib';

export default class LoginPage extends Page {
	constructor(browser) { 
		super(browser);		
	}
	
	get username() {return this.browser.element("input[type='email'].inputMaterial");}
	get password() {return this.browser.element("input[type='password'].inputMaterial");}
	get loginBtn()  {return this.browser.element("button");}
		
	signIn(username,password){
		this.username.setValue(username);
		return this.password.setValue(password).then(() => {
            this.loginBtn.click();
			return this.waitForHealthOverviewPage(10000);
        });	
	}
	
	waitForHealthOverviewPage(time){
		return this.browser.waitUntil(() => {
			return this.browser.url().then((url) => {
				Logger.logDebug(url);
				return url.value.indexOf('health-overview') > -1;
			});
		}, time);	
	}
	
}