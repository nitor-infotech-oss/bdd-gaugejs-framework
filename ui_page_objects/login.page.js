"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _page = require("./page");

var _page2 = _interopRequireDefault(_page);

var _logger = require("../common/logger.lib");

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginPage = function (_Page) {
	_inherits(LoginPage, _Page);

	function LoginPage(browser) {
		_classCallCheck(this, LoginPage);

		return _possibleConstructorReturn(this, (LoginPage.__proto__ || Object.getPrototypeOf(LoginPage)).call(this, browser));
	}

	_createClass(LoginPage, [{
		key: "signIn",
		value: function signIn(username, password) {
			var _this2 = this;

			this.username.setValue(username);
			return this.password.setValue(password).then(function () {
				_this2.loginBtn.click();
				return _this2.waitForHealthOverviewPage(10000);
			});
		}
	}, {
		key: "waitForHealthOverviewPage",
		value: function waitForHealthOverviewPage(time) {
			var _this3 = this;

			return this.browser.waitUntil(function () {
				return _this3.browser.url().then(function (url) {
					_logger2.default.logDebug(url);
					return url.value.indexOf('health-overview') > -1;
				});
			}, time);
		}
	}, {
		key: "username",
		get: function get() {
			return this.browser.element("input[type='email'].inputMaterial");
		}
	}, {
		key: "password",
		get: function get() {
			return this.browser.element("input[type='password'].inputMaterial");
		}
	}, {
		key: "loginBtn",
		get: function get() {
			return this.browser.element("button");
		}
	}]);

	return LoginPage;
}(_page2.default);

exports.default = LoginPage;