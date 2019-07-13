/* import LoginService from '../rest_service_objects/login.service';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
expect = chai.expect;
chai.Should();

var assert = require("assert");

gauge.step("Do login with rest call", function(done){
	var loginObj = new LoginService();
	var baseUrl = "";
	var authBody = {
		"username": "akana400@noreply.com",
		"password": "Orbita11",
		"clientId": 516
	};
    var token = loginObj.getAuthToken(baseUrl, authBody);
    console.log(token);
    expect(token).to.not.be.null;
	done();
});
 */