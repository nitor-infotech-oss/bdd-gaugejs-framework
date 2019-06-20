'use strict';
var OracleDb = require('oracledb');

export default class OracleDbClient {
	constructor(){
		this.dbConfig = null;
		this.username = "";
        this.password = "";
		this.host = "";
		this.port = "";
		this.service = "";
		this.connString = "";	
	}
	
	setDbConfig(config){
		this.dbConfig = config;
		this.username = this.dbConfig.user;
		this.password = this.dbConfig.password;
		this.host = this.dbConfig.host;
		this.port = this.dbConfig.port;
		this.service = this.dbConfig.service;
		this.connString = this.host + ":" + this.port + "/" + this.service;
	}
	
	getConnection() {    
		return OracleDb.getConnection({user:this.username,password:this.password,connectString:this.connString});
    };
		
	select(query){
		return this.getConnection().then(function(conn){
			return conn.execute(query,[],{resultSet:true}).then(function(resultSet){
					return resultSet;
				},function(error){
					console.log(error);
					return;
				}
			);
		});
	};
}
