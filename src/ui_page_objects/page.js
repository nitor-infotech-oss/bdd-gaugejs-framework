export default class Page {
     constructor(browser) {
        this._browser = browser;
	 }
	 get browser(){
		 return this._browser;
	 }
	 open(url) {
          return this._browser
                     .url(url);
     }

     close(done) {
          return this._browser
                     .end()
                     .call(done);
     }
}
