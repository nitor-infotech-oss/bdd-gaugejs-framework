'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _oracledbClient = require('../common/oracledb.client.lib');

var _oracledbClient2 = _interopRequireDefault(_oracledbClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserDb = function (_OracleDbLib) {
	_inherits(UserDb, _OracleDbLib);

	function UserDb() {
		_classCallCheck(this, UserDb);

		return _possibleConstructorReturn(this, (UserDb.__proto__ || Object.getPrototypeOf(UserDb)).call(this));
	}

	_createClass(UserDb, [{
		key: 'getUnregisteredUsers',
		value: function getUnregisteredUsers() {
			var config = { user: process.env.DBUSER, password: process.env.DBPASS, host: process.env.DBHOST, port: process.env.DBPORT, service: process.env.DBSERVICE };
			var query = "select * from bckcqa02.active_users_vw where user_pk=101";
			this.setDbConfig(config);
			return this.select(query).then(function (result) {
				console.log(result);
				return result;
			});
		}
	}]);

	return UserDb;
}(_oracledbClient2.default);

exports.default = UserDb;