'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var XlReader = require('xlsx');
var CsvReader = require('csv-parse/lib/sync');
var FileReader = require('fs');

var DataReader = function () {
	function DataReader() {
		_classCallCheck(this, DataReader);

		this.fileName = "";
		this.format = "";
		this.workbook = null;
		this.contents = "";
	}

	_createClass(DataReader, [{
		key: 'getWorkbook',
		value: function getWorkbook() {
			this.workbook = XlReader.readFile(filePath);
			return this.workbook;
		}
	}, {
		key: 'readContentsToJson',
		value: function readContentsToJson(filePath, sheetIndex) {
			var fileLen = filePath.length;
			var contentObj = null;
			if (filePath.indexOf(".csv") > 0) {
				contentObj = this.readFromCSVToJson(filePath);
			}
			if (filePath.indexOf(".xlsx") > 0) {
				contentObj = this.readFromXlsToJson(filePath, sheetIndex);
			}
			if (filePath.indexOf(".json") > 0) {
				contentObj = this.parseIntoJson(filePath);
			}
			return contentObj;
		}
	}, {
		key: 'readFromCSVToJson',
		value: function readFromCSVToJson(filePath) {
			this.contents = FileReader.readFileSync(filePath);
			return CsvReader(this.contents);
		}
	}, {
		key: 'readFromXlsToJson',
		value: function readFromXlsToJson(filePath, sheetIndex) {
			this.getWorkbook(filePath);
			var sheet_name_list = this.workbook.SheetNames;
			return XlReader.utils.sheet_to_json(this.workbook.Sheets[sheet_name_list[sheetIndex]]);
		}
	}, {
		key: 'parseIntoJson',
		value: function parseIntoJson(filePath) {
			this.contents = FileReader.readFileSync(filePath);
			return JSON.parse(this.contents);
		}
	}]);

	return DataReader;
}();

exports.default = DataReader;