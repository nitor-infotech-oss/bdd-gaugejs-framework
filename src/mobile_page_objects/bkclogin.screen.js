import Logger from '../common/logger.lib';
import Screen from './screen';

export default class BKCLoginScreen extends Screen {
	constructor(client) { 
		super(client);
		this.username = 'android.widget.EditText';
		this.passwordLbl = 'new UiSelector().className("android.widget.EditText").index(4)';
		this.password = 'new UiSelector().className("android.widget.EditText").index(4)';
		this.loginBtn = 'new UiSelector().text("Sign In")';
	}
	
		
	signIn(username,password) {
		console.log("username:" + username);
		console.log("password:" + password);
		return this.client.setValue('android=' + this.username,username).then(()=>{
			console.log("Entered value in username");
			return this.client.setValue('android=' + this.password,password).then(()=>{
				console.log("Entered value in password");
				Logger.logDebug("Entered Password");
				return this.client.click('android=' + this.loginBtn);
			});
		});
		
		
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