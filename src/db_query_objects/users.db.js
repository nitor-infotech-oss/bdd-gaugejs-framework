'use strict';
import OracleDbLib from '../common/oracledb.client.lib';

export default class UserDb extends OracleDbLib {
	constructor(){
		super();
	}
	
	getUnregisteredUsers(){
		var config = {user:process.env.DBUSER,password:process.env.DBPASS,host:process.env.DBHOST,port:process.env.DBPORT,service:process.env.DBSERVICE };
		var query = "select * from bckcqa02.active_users_vw where user_pk=101";
		this.setDbConfig(config);
		return this.select(query).then(function(result){
			console.log(result);
			return result;
		});
	}
}
