'use strict';

var _users = require('../db_query_objects/users.db');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
expect = chai.expect;
chai.Should();

var assert = require("assert");

gauge.step("Get unregistered users", function (done) {
	var userDbObj = new _users2.default();
	userDbObj.getUnregisteredUsers().then(function () {
		done();
	});
});