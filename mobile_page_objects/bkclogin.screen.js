'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _logger = require('../common/logger.lib');

var _logger2 = _interopRequireDefault(_logger);

var _screen = require('./screen');

var _screen2 = _interopRequireDefault(_screen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BKCLoginScreen = function (_Screen) {
	_inherits(BKCLoginScreen, _Screen);

	function BKCLoginScreen(client) {
		_classCallCheck(this, BKCLoginScreen);

		var _this = _possibleConstructorReturn(this, (BKCLoginScreen.__proto__ || Object.getPrototypeOf(BKCLoginScreen)).call(this, client));

		_this.username = 'android.widget.EditText';
		_this.passwordLbl = 'new UiSelector().className("android.widget.EditText").index(4)';
		_this.password = 'new UiSelector().className("android.widget.EditText").index(4)';
		_this.loginBtn = 'new UiSelector().text("Sign In")';
		return _this;
	}

	_createClass(BKCLoginScreen, [{
		key: 'signIn',
		value: function signIn(username, password) {
			var _this2 = this;

			console.log("username:" + username);
			console.log("password:" + password);
			return this.client.setValue('android=' + this.username, username).then(function () {
				console.log("Entered value in username");
				return _this2.client.setValue('android=' + _this2.password, password).then(function () {
					console.log("Entered value in password");
					_logger2.default.logDebug("Entered Password");
					return _this2.client.click('android=' + _this2.loginBtn);
				});
			});
		}
	}, {
		key: 'waitForHomePage',
		value: function waitForHomePage(time) {
			var _this3 = this;

			return this.client.waitUntil(function () {
				return _this3.client.getText('android=' + _this3.signInLink).then(function (txt) {
					_logger2.default.logDebug(txt);
					return txt.indexOf('Sign') > -1;
				});
			}, time);
		}
	}]);

	return BKCLoginScreen;
}(_screen2.default);

exports.default = BKCLoginScreen;