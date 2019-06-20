'use strict';

var _post = require('../rest_service_objects/post.service');

var _post2 = _interopRequireDefault(_post);

var _logger = require('../common/logger.lib');

var _logger2 = _interopRequireDefault(_logger);

var _dataReaders = require('../common/data.readers.lib');

var _dataReaders2 = _interopRequireDefault(_dataReaders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
expect = chai.expect;
chai.Should();

var assert = require("assert");

gauge.step("Get posts and verify that response is non-null", function (done) {
	var baseUrl = process.env.POST_BASE_URI;
	var postServ = new _post2.default(baseUrl);
	var responseObj = postServ.getPosts();
	_logger2.default.logInfo("Response is:" + responseObj.toString());
	expect(responseObj).to.not.be.null;
	done();
});

gauge.step("Get posts with <id> and verify that response is non-null", function (id, done) {
	_logger2.default.logInfo("Id is:" + id);
	var baseUrl = process.env.POST_BASE_URI;
	var postServ = new _post2.default(baseUrl);
	var responseObj = postServ.getPostById(id);
	_logger2.default.logInfo("Response is:" + responseObj.toString());
	expect(responseObj).to.not.be.null;
	done();
});

gauge.step("Add post from <file> and verify that response is non-null", function (file, done) {
	_logger2.default.logInfo("Data file is: " + file);
	var baseUrl = process.env.POST_BASE_URI;
	var postServ = new _post2.default(baseUrl);
	var readerObj = new _dataReaders2.default();
	var contentsObj = readerObj.readContentsToJson(process.env.test_data_path + file, 0);
	_logger2.default.logInfo("JSON contents:" + JSON.stringify(contentsObj));
	var responseObj = postServ.addPost(contentsObj);
	_logger2.default.logInfo("Response is:" + JSON.stringify(responseObj));
	expect(responseObj).to.not.be.null;
	done();
});