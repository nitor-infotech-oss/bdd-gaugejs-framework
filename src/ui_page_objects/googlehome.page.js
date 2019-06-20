import Page from "./page";
import Logger from '../common/logger.lib';

export default class GoogleHomePage extends Page {
	constructor(browser) {
		super(browser);
	}

	get searchField() {return this.browser.element("#lst-ib");}
	get searchBtn() {return this.browser.element("input[value='Google Search']"); }
	get firstSearchResult() {return this.browser.element("h3.r a");}

	search(term) {
		return this.searchField.setValue(term).then(()=>{
			return this.searchBtn.click();
		}).catch((e)=>{Logger.logError(e);});
	}

	waitForSearchResultsToLoad(term,time){
		Logger.logInfo("Wait for search results");
		return this.browser.waitUntil(() => {
			return this.browser.url().then((url) => {
				Logger.logDebug(url);
				return url.value.indexOf(term) > -1;
			});
		}, time);
	}

	getFirstSearchResult(){
		return this.firstSearchResult.getText().then((txt) => {
			Logger.logDebug(txt);
			return txt;
		});
	}

}
