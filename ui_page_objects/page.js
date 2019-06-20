"use strict";

Object.defineProperty(exports, "__esModule", {
     value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Page = function () {
     function Page(browser) {
          _classCallCheck(this, Page);

          this._browser = browser;
     }

     _createClass(Page, [{
          key: "open",
          value: function open(url) {
               return this._browser.url(url);
          }
     }, {
          key: "close",
          value: function close(done) {
               return this._browser.end().call(done);
          }
     }, {
          key: "browser",
          get: function get() {
               return this._browser;
          }
     }]);

     return Page;
}();

exports.default = Page;