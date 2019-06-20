'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logger = require('../common/logger.lib');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SyncRequestLib = require('sync-request');

var RestClient = function () {
	function RestClient(baseurl) {
		_classCallCheck(this, RestClient);

		_logger2.default.logInfo("Setting RestClient constructor");
		this.method = "";
		this.request = { "baseurl": baseurl, "path": "", "fullUrl": "", "body": "", "headers": "" };
		this.response = { "content": "", "statusCode": "", "headers": "" };
		_logger2.default.logInfo("Constructor set. Here is baseurl - " + this.request.baseurl);
	}

	_createClass(RestClient, [{
		key: 'resetRequest',
		value: function resetRequest() {
			this.request.path = "";
			this.request.headers = "";
			this.request.body = "";
			this.request.fullUrl = "";
		}
	}, {
		key: 'setRequest',
		value: function setRequest(path, body, headers) {
			_logger2.default.logInfo("Setting request");
			this.request.path = path;
			this.request.headers = headers;
			this.request.body = body;
			this.request.fullUrl = this.request.baseurl.concat(path);
			_logger2.default.logInfo("Request set. Here is request object:" + this.request);
		}
	}, {
		key: 'sendGet',
		value: function sendGet(path, headers) {
			this.resetRequest();
			this.setRequest(path, "", headers);
			this.method = "GET";
			var options = this.getHttpOptions();
			var res = SyncRequestLib(this.method, this.request.fullUrl, options);
			this.response.content = res.getBody('utf-8');
			this.response.statusCode = res.statusCode;
			this.response.headers = res.headers;
		}
	}, {
		key: 'getHttpOptions',
		value: function getHttpOptions() {
			return {
				'headers': this.request.headers,
				'json': this.request.body
			};
		}
	}, {
		key: 'sendPost',
		value: function sendPost(path, body, headers) {
			this.method = "POST";
			this.setRequest(path, body, headers);
			var options = this.getHttpOptions();
			var res = SyncRequestLib(this.method, this.request.fullUrl, options);
			this.response.content = res.getBody('utf-8');
			this.response.statusCode = res.statusCode;
			this.response.headers = res.headers;
		}
	}, {
		key: 'sendPut',
		value: function sendPut(path, body, headers) {
			this.method = "PUT";
			this.setRequest(path, body, headers);
			var options = this.getHttpOptions();
			var res = SyncRequestLib(this.method, this.request.fullUrl, options);
			this.response.content = res.getBody('utf-8');
			this.response.statusCode = res.statusCode;
			this.response.headers = res.headers;
		}
	}, {
		key: 'sendDelete',
		value: function sendDelete(path, body, headers) {
			this.method = "DELETE";
			this.setRequest(path, body, headers);
			var options = this.getHttpOptions();
			var res = SyncRequestLib(this.method, this.request.fullUrl, options);
			this.response.content = res.getBody('utf-8');
			this.response.statusCode = res.statusCode;
			this.response.headers = res.headers;
		}
	}]);

	return RestClient;
}();

exports.default = RestClient;