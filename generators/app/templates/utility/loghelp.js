'use strict'
let log4js = require('log4js');
let config = require('../config/config');
let redis=require('./rediswrapper');
class logs {
    constructor() {
        log4js.configure(config.log4);
        this.log = log4js.getLogger("file");
        this.console = log4js.getLogger("console");
        this.loginfo = log4js.getLogger("fileinfo");
        this.alisls=log4js.getLogger("alisls");
    }
    error(err) {
        this.log.error(err);
        this.console.error(err);
        this.alisls.error(err);
    }
    info(message) {
        this.loginfo.info(message);
        this.alisls.info(message);
        this.console.info(message);
    }
}
var logManager = new logs();
exports.error = function(err) {
    logManager.error(err);
};
exports.info = function(message,channel) {
    if(require('../app').get('env') === 'development')
    {
        if(channel)
        redis.pubSub(channel,message);
    }

    logManager.info(message);
};
