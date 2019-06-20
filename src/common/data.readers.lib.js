'use strict';
var XlReader = require('xlsx');
var CsvReader = require('csv-parse/lib/sync');
var FileReader = require('fs');

export default class DataReader {
	constructor(){
		this.fileName = "";
		this.format = "";
		this.workbook = null;
		this.contents = "";
	}

	getWorkbook(){
		this.workbook = XlReader.readFile(filePath);
		return this.workbook;
	}

	readContentsToJson(filePath,sheetIndex) {
		var fileLen = filePath.length;
		var contentObj = null;
		if(filePath.indexOf(".csv") > 0){
			contentObj = this.readFromCSVToJson(filePath);
		}
		if(filePath.indexOf(".xlsx") > 0){
			contentObj = this.readFromXlsToJson(filePath,sheetIndex);
		}
		if(filePath.indexOf(".json") > 0){
			contentObj = this.parseIntoJson(filePath);
		}
		return contentObj;
	}

	readFromCSVToJson(filePath){
		this.contents = FileReader.readFileSync(filePath);
		return CsvReader(this.contents);
	}

	readFromXlsToJson(filePath,sheetIndex){
		this.getWorkbook(filePath);
		var sheet_name_list = this.workbook.SheetNames;
		return XlReader.utils.sheet_to_json(this.workbook.Sheets[sheet_name_list[sheetIndex]]);
	}

	parseIntoJson(filePath){
		this.contents = FileReader.readFileSync(filePath);
		return JSON.parse(this.contents);
	}

}
