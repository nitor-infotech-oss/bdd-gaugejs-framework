'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var winston = require('winston');
winston.configure({
	transports: [new winston.transports.File({ filename: './logs/RunLog.log', level: 'debug' }), new winston.transports.Console({ level: 'info' })]
});

var Logger = function () {
	function Logger() {
		_classCallCheck(this, Logger);
	}

	_createClass(Logger, null, [{
		key: 'logError',
		value: function logError(e) {
			winston.log('error', 'Failed due to ' + e, { 'StackTrace': e.stack });
		}
	}, {
		key: 'logInfo',
		value: function logInfo(message) {
			winston.log('info', message);
		}
	}, {
		key: 'logWarning',
		value: function logWarning(e) {
			winston.log('warn', 'Warning due to ' + e, { 'StackTrace': e.stack });
		}
	}, {
		key: 'logDebug',
		value: function logDebug(message) {
			winston.log('debug', message);
		}
	}]);

	return Logger;
}();

exports.default = Logger;