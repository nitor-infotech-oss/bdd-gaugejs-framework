'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OracleDb = require('oracledb');

var OracleDbClient = function () {
	function OracleDbClient() {
		_classCallCheck(this, OracleDbClient);

		this.dbConfig = null;
		this.username = "";
		this.password = "";
		this.host = "";
		this.port = "";
		this.service = "";
		this.connString = "";
	}

	_createClass(OracleDbClient, [{
		key: 'setDbConfig',
		value: function setDbConfig(config) {
			this.dbConfig = config;
			this.username = this.dbConfig.user;
			this.password = this.dbConfig.password;
			this.host = this.dbConfig.host;
			this.port = this.dbConfig.port;
			this.service = this.dbConfig.service;
			this.connString = this.host + ":" + this.port + "/" + this.service;
		}
	}, {
		key: 'getConnection',
		value: function getConnection() {
			return OracleDb.getConnection({ user: this.username, password: this.password, connectString: this.connString });
		}
	}, {
		key: 'select',
		value: function select(query) {
			return this.getConnection().then(function (conn) {
				return conn.execute(query, [], { resultSet: true }).then(function (resultSet) {
					return resultSet;
				}, function (error) {
					console.log(error);
					return;
				});
			});
		}
	}]);

	return OracleDbClient;
}();

exports.default = OracleDbClient;