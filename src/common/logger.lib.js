var winston = require('winston');
winston.configure({
    transports: [
    new (winston.transports.File)({ filename: './logs/RunLog.log',level:'debug'}),
	  new (winston.transports.Console)({level:'debug'})
    ]
  });

export default class Logger {
	constructor(){
	}

	static logError(e){
		winston.log('error','Failed due to ' + e, {'StackTrace':e.stack});
	}

	static logInfo(message){
		winston.log('info',message);
	}

	static logWarning(e){
		winston.log('warn','Warning due to ' + e, {'StackTrace':e.stack});
	}

	static logDebug(message){
		winston.log('debug',message);
	}

}
