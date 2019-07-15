'use strict';
import { Client } from'pg';

export default class PostgresDbClient {
	constructor(){
		this.user = "";
        this.password = "";
		this.host = "";
		this.port = "";
		this.database = "";
		this.client = null
	}
	
	async getConnection() {    
		this.client = new Client({
			user: this.user,
			host: this.host,
			database: this.database,
			password: this.password,
			port: 3211,
			});
		await this.client.connect();
    }
		
	async select(query){
		await this.getConnection();
		const res = await this.client.query(query);
		await client.end();
	}
}
