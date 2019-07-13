export default class Page {
     constructor(driver) {
        this._driver = driver;
	 }
	 get driver(){
		return this._driver;
	 }
	 async open(url) {
          return await this._driver.get(url);
     }

     async close(done) {
          return await this._driver.quit();
     }
}
