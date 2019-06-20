import RestClient from '../common/rest.client.lib';
import Logger from  '../common/logger.lib'

export default class PostService extends RestClient{
	constructor(baseurl){
		super(baseurl);
	}

	getPosts(){
		Logger.logDebug("In get posts");
		var headers = { 'Content-Type': 'application/json' };
    this.sendGet('/posts', headers);
    var responseObj = JSON.parse(this.response.content);
    return responseObj;
	}

	getPostById(id){
		var headers = { 'Content-Type': 'application/json' };
    this.sendGet('/posts/' + id, headers);
    var responseObj = JSON.parse(this.response.content);
    return responseObj;
	}

	addPost(body){
		var headers = { 'Content-Type': 'application/json' };
    this.sendPost('/posts/', body, headers);
    var responseObj = JSON.parse(this.response.content);
    return responseObj;
	}

	updatePost(body,id){
		var headers = { 'Content-Type': 'application/json' };
    this.sendPut('/posts/' + id, body, headers);
    var responseObj = JSON.parse(this.response.content);
    return responseObj;
	}

}
