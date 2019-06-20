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

var GoogleHomePage = function (_Page) {
	_inherits(GoogleHomePage, _Page);

	function GoogleHomePage(browser) {
		_classCallCheck(this, GoogleHomePage);

		return _possibleConstructorReturn(this, (GoogleHomePage.__proto__ || Object.getPrototypeOf(GoogleHomePage)).call(this, browser));
	}

	_createClass(GoogleHomePage, [{
		key: "search",
		value: function search(term) {
			var _this2 = this;

			return this.searchField.setValue(term).then(function () {
				return _this2.searchBtn.click();
			}).catch(function (e) {
				_logger2.default.logError(e);
			});
		}
	}, {
		key: "waitForSearchResultsToLoad",
		value: function waitForSearchResultsToLoad(term, time) {
			var _this3 = this;

			_logger2.default.logInfo("Wait for search results");
			return this.browser.waitUntil(function () {
				return _this3.browser.url().then(function (url) {
					_logger2.default.logDebug(url);
					return url.value.indexOf(term) > -1;
				});
			}, time);
		}
	}, {
		key: "getFirstSearchResult",
		value: function getFirstSearchResult() {
			return this.firstSearchResult.getText().then(function (txt) {
				_logger2.default.logDebug(txt);
				return txt;
			});
		}
	}, {
		key: "searchField",
		get: function get() {
			return this.browser.element("#lst-ib");
		}
	}, {
		key: "searchBtn",
		get: function get() {
			return this.browser.element("input[value='Google Search']");
		}
	}, {
		key: "firstSearchResult",
		get: function get() {
			return this.browser.element("h3.r a");
		}
	}]);

	return GoogleHomePage;
}(_page2.default);

exports.default = GoogleHomePage;