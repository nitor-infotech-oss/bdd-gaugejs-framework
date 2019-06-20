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

var BKCHomeScreen = function (_Screen) {
	_inherits(BKCHomeScreen, _Screen);

	function BKCHomeScreen(client) {
		_classCallCheck(this, BKCHomeScreen);

		var _this = _possibleConstructorReturn(this, (BKCHomeScreen.__proto__ || Object.getPrototypeOf(BKCHomeScreen)).call(this, client));

		_this.signInLink = 'new UiSelector().textContains("Sign In Now").className("android.widget.TextView")';
		return _this;
	}

	_createClass(BKCHomeScreen, [{
		key: 'openLoginPage',
		value: function openLoginPage() {
			return this.client.click('android=' + this.signInLink);
		}
	}, {
		key: 'waitForHomePage',
		value: function waitForHomePage(time) {
			var _this2 = this;

			return this.client.waitUntil(function () {
				return _this2.client.getText('android=' + _this2.signInLink).then(function (txt) {
					_logger2.default.logDebug(txt);
					return txt.indexOf('Sign') > -1;
				});
			}, time);
		}
	}]);

	return BKCHomeScreen;
}(_screen2.default);

exports.default = BKCHomeScreen;