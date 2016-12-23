var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'messagehub'
    },
    port: process.env.PORT || 3600,
    db: 'mongodb://hub:hubhub@ryanseceat.xin:27017/messagehub',
    redis: {
      host: '10.8.8.93',
      port: 6379,
      expire: 60*15,
      db:6
    },
    log4:{
      "appenders": [{
        type: "console",
        category: "console"
      }, {
        "type": "file",
        "filename": "./logs/api.log",
        "maxLogSize": 102400,
        "backups": 3,
        "category": "file"
      },
        {
          "type": "file",
          "filename": "./logs/apiinfo.log",
          "maxLogSize": 102400,
          "backups": 3,
          "category": "fileinfo"
        },{
          "type": "log4js-sls-appender",
          "layout": {
            "type": "pattern",
            "pattern": "%p %c %m"
          },
          "aliyunKey":"LTAIQBXy8kaedeHp",
          "aliyunSecret":"BeaR9fhs6t5oyZsgNhgQcgdU73ihwC",
          "endpoint":"http://etct.cn-beijing.log.aliyuncs.com",
          "slsProject":"etct",
          "logStoreName":"etct",
          "topic":"messagehub_develop",
          "category": "alisls"
        }]
    }
  },

  test: {
    root: rootPath,
    app: {
      name: 'messagehub'
    },
    port: process.env.PORT || 3600,
    db: 'mongodb://hub:hubhub@ryanseceat.xin:27017/messagehub',
    redis: {
      host: '10.8.8.93',
      port: 6379,
      expire: 60*15,
      db:6
    },
    log4:{
      "appenders": [{
        type: "console",
        category: "console"
      }, {
        "type": "file",
        "filename": "./logs/api.log",
        "maxLogSize": 102400,
        "backups": 3,
        "category": "file"
      },
        {
          "type": "file",
          "filename": "./logs/apiinfo.log",
          "maxLogSize": 102400,
          "backups": 3,
          "category": "fileinfo"
        },{
          "type": "log4js-sls-appender",
          "layout": {
            "type": "pattern",
            "pattern": "%p %c %m"
          },
          "aliyunKey":"LTAIQBXy8kaedeHp",
          "aliyunSecret":"BeaR9fhs6t5oyZsgNhgQcgdU73ihwC",
          "endpoint":"http://etct.cn-beijing.log.aliyuncs.com",
          "slsProject":"etct",
          "logStoreName":"etct",
          "topic":"messagehub_develop",
          "category": "alisls"
        }]
    }
  },

  production: {
    root: rootPath,
    app: {
      name: 'messagehub'
    },
    port: process.env.PORT || 3600,
    db: 'mongodb://ryanseceat.xin:27017/messagehub',
    redis: {
      host: '10.128.100.91',
      port: 6379,
      expire: 300,
      db:6
    },
    log4:{
      "appenders": [{
        type: "console",
        category: "console"
      }, {
        "type": "file",
        "filename": "./logs/api.log",
        "maxLogSize": 102400,
        "backups": 3,
        "category": "file"
      },
        {
          "type": "file",
          "filename": "./logs/apiinfo.log",
          "maxLogSize": 102400,
          "backups": 3,
          "category": "fileinfo"
        },{
          "type": "log4js-sls-appender",
          "layout": {
            "type": "pattern",
            "pattern": "%p %c %m"
          },
          "aliyunKey":"LTAIQBXy8kaedeHp",
          "aliyunSecret":"BeaR9fhs6t5oyZsgNhgQcgdU73ihwC",
          "endpoint":"http://ryan.cn-beijing.log.aliyuncs.com",
          "slsProject":"etct",
          "logStoreName":"etct",
          "topic":"messagehub_production",
          "category": "alisls"
        }]
    }
  }
};

module.exports = config[env];
