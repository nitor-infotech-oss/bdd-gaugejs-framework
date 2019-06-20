import PostService from '../rest_service_objects/post.service';
import Logger from '../common/logger.lib';
import DataReader from '../common/data.readers.lib'

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
expect = chai.expect;
chai.Should();

var assert = require("assert");

gauge.step("Get posts and verify that response is non-null", function(done){
	var baseUrl = process.env.POST_BASE_URI;
	var postServ = new PostService(baseUrl);
	var responseObj = postServ.getPosts();
	Logger.logInfo("Response is:" + responseObj.toString());
  expect(responseObj).to.not.be.null;
	done();
});

gauge.step("Get posts with <id> and verify that response is non-null", function(id,done){
	Logger.logInfo("Id is:" + id);
	var baseUrl = process.env.POST_BASE_URI;
	var postServ = new PostService(baseUrl);
	var responseObj = postServ.getPostById(id);
	Logger.logInfo("Response is:" + responseObj.toString());
  expect(responseObj).to.not.be.null;
	done();
});

gauge.step("Add post from <file> and verify that response is non-null", function(file,done){
	Logger.logInfo("Data file is: " +file);
	var baseUrl = process.env.POST_BASE_URI;
	var postServ = new PostService(baseUrl);
	var readerObj = new DataReader();
	var contentsObj = readerObj.readContentsToJson(process.env.test_data_path + file,0);
	Logger.logInfo("JSON contents:" + JSON.stringify(contentsObj));
	var responseObj = postServ.addPost(contentsObj);
	Logger.logInfo("Response is:" + JSON.stringify(responseObj));
  expect(responseObj).to.not.be.null;
	done();
});
