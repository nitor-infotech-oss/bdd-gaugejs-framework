'use strict';
import Logger from '../common/logger.lib';

var SyncRequestLib = require('sync-request');

export default class RestClient {
	constructor(baseurl){
		Logger.logInfo("Setting RestClient constructor");
		this.method = "";
    this.request = { "baseurl": baseurl, "path": "", "fullUrl": "", "body": "", "headers": "" };
    this.response = { "content": "", "statusCode": "", "headers": "" };
		Logger.logInfo("Constructor set. Here is baseurl - " + this.request.baseurl);
	}

	resetRequest(){
		this.request.path = "";
		this.request.headers = "";
		this.request.body = "";
		this.request.fullUrl = "";
	}

	setRequest(path, body, headers) {
		Logger.logInfo("Setting request");
		this.request.path = path;
		this.request.headers = headers;
		this.request.body = body;
		this.request.fullUrl = this.request.baseurl.concat(path);
		Logger.logInfo("Request set. Here is request object:" + this.request)
	}

	 sendGet(path, headers) {
		this.resetRequest();
		this.setRequest(path, "", headers);
		this.method = "GET";
		var options = this.getHttpOptions();
		var res = SyncRequestLib(this.method, this.request.fullUrl, options);
		this.response.content = res.getBody('utf-8');
		this.response.statusCode = res.statusCode;
		this.response.headers = res.headers;

	}

	getHttpOptions() {
		return {
                'headers': this.request.headers,
                'json': this.request.body
            };
	}

	sendPost(path, body, headers) {
		this.method = "POST";
		this.setRequest(path, body, headers);
		var options = this.getHttpOptions();
		var res = SyncRequestLib(this.method, this.request.fullUrl, options);
		this.response.content = res.getBody('utf-8');
		this.response.statusCode = res.statusCode;
		this.response.headers = res.headers;
	}

	sendPut(path, body, headers) {
		this.method = "PUT";
		this.setRequest(path, body, headers);
		var options = this.getHttpOptions();
		var res = SyncRequestLib(this.method, this.request.fullUrl, options);
		this.response.content = res.getBody('utf-8');
		this.response.statusCode = res.statusCode;
		this.response.headers = res.headers;
	}

	sendDelete(path, body, headers) {
		this.method = "DELETE";
		this.setRequest(path, body, headers);
		var options = this.getHttpOptions();
		var res = SyncRequestLib(this.method, this.request.fullUrl, options);
		this.response.content = res.getBody('utf-8');
		this.response.statusCode = res.statusCode;
		this.response.headers = res.headers;
	}

}
