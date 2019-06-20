'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _restClient = require('../common/rest.client.lib');

var _restClient2 = _interopRequireDefault(_restClient);

var _logger = require('../common/logger.lib');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PostService = function (_RestClient) {
	_inherits(PostService, _RestClient);

	function PostService(baseurl) {
		_classCallCheck(this, PostService);

		return _possibleConstructorReturn(this, (PostService.__proto__ || Object.getPrototypeOf(PostService)).call(this, baseurl));
	}

	_createClass(PostService, [{
		key: 'getPosts',
		value: function getPosts() {
			_logger2.default.logDebug("In get posts");
			var headers = { 'Content-Type': 'application/json' };
			this.sendGet('/posts', headers);
			var responseObj = JSON.parse(this.response.content);
			return responseObj;
		}
	}, {
		key: 'getPostById',
		value: function getPostById(id) {
			var headers = { 'Content-Type': 'application/json' };
			this.sendGet('/posts/' + id, headers);
			var responseObj = JSON.parse(this.response.content);
			return responseObj;
		}
	}, {
		key: 'addPost',
		value: function addPost(body) {
			var headers = { 'Content-Type': 'application/json' };
			this.sendPost('/posts/', body, headers);
			var responseObj = JSON.parse(this.response.content);
			return responseObj;
		}
	}, {
		key: 'updatePost',
		value: function updatePost(body, id) {
			var headers = { 'Content-Type': 'application/json' };
			this.sendPut('/posts/' + id, body, headers);
			var responseObj = JSON.parse(this.response.content);
			return responseObj;
		}
	}]);

	return PostService;
}(_restClient2.default);

exports.default = PostService;