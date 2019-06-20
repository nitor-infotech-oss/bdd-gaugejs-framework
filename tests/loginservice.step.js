'use strict';

var _login = require('../rest_service_objects/login.service');

var _login2 = _interopRequireDefault(_login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
expect = chai.expect;
chai.Should();

var assert = require("assert");

gauge.step("Do login with rest call", function (done) {
	var loginObj = new _login2.default();
	var baseUrl = "https://qa2-greyhound-webapi.healthmine.com/api";
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