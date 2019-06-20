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

var DashboardPage = function (_Page) {
	_inherits(DashboardPage, _Page);

	function DashboardPage(browser) {
		_classCallCheck(this, DashboardPage);

		return _possibleConstructorReturn(this, (DashboardPage.__proto__ || Object.getPrototypeOf(DashboardPage)).call(this, browser));
	}

	_createClass(DashboardPage, [{
		key: "logout",
		value: function logout() {
			var _this2 = this;

			return this.userAvatar.click().then(function () {
				return _this2.logoutLink.click();
			});
		}
	}, {
		key: "waitForDefaultPlanLoad",
		value: function waitForDefaultPlanLoad(time) {
			var _this3 = this;

			_logger2.default.logInfo("Wait for default plan load");
			return this.browser.waitUntil(function () {
				_logger2.default.logInfo("Waiting for - " + time);
				return _this3.defaultPlan.getText().then(function (str) {
					_logger2.default.logInfo("Value" + JSON.stringify(str) + "Length" + str.length);
					return str.length > 0;
				}).catch(function (e) {
					_logger2.default.logError(e);
				});
			}, time).catch(function (e) {
				_logger2.default.logError(e);
			});
		}
	}, {
		key: "waitForTrademarkLoad",
		value: function waitForTrademarkLoad(time) {
			var _this4 = this;

			return this.browser.waitUntil(function () {
				return _this4.trademark.getText().then(function (str) {
					_logger2.default.logDebug("Value" + JSON.stringify(str) + "Length" + str.length);
					return str.length > 0;
				});
			}, time);
		}
	}, {
		key: "trademark",
		get: function get() {
			return this.browser.element("div.rmq-693ce4c1.rmq-17546ec2 div span");
		}
	}, {
		key: "defaultPlan",
		get: function get() {
			return this.browser.element("div.carePlansContainer div div div div:nth-child(2) div");
		}
	}, {
		key: "logoutLink",
		get: function get() {
			return this.browser.element("=Logout");
		}
	}, {
		key: "userAvatar",
		get: function get() {
			return this.browser.element("i.thin-0701_user_profile_avatar_man_male");
		}
	}]);

	return DashboardPage;
}(_page2.default);

exports.default = DashboardPage;