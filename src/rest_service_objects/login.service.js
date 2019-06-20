import RestClient from '../common/rest.client.lib';

export default class LoginService extends RestClient{
	constructor(){
		super();
	}
	
	getAuthToken(baseurl,body){
		var headers = { 'Content-Type': 'application/json' };
        this.sendPost(baseurl, '/v2/account/Token', body, headers);
        var responseObj = JSON.parse(this.response.content);
        return responseObj['AccessToken'];
	}
}