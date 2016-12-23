'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting:{
    dir: function () {
      // Have Yeoman greet the user.
      this.log(yosay(
        'Welcome to the geometric ' + chalk.red('generator-daisy-express') + ' generator!'
      ));

      var prompt = [{
        type: 'confirm',
        name: 'createDirectory',
        message: 'Would you like to create a new directory for your project?'
      }];

      return this.prompt(prompt).then(function (response) {
        this.options.createDirectory = response.createDirectory;
      }.bind(this));
    },
    dirname: function () {
      if (!this.options.createDirectory || this.options.dirname) {
        return true;
      }

      var prompt = [{
        type: 'input',
        name: 'dirname',
        message: 'Enter directory name'
      }];


      return this.prompt(prompt).then(function (response) {
        this.options.dirname = response.dirname;
      }.bind(this));
    },
     info: function () {
       this.description = '';
       this.author = '';
       var prompts = [
         {
           type: 'input',
           name: 'name',
           message: 'app的名称:'
         },
         {
           type: 'input',
           name: 'description',
           message: '有啥要说的（描述）:'
         }
       ];
       return this.prompt(prompts).then(function (response) {
         this.appname = response.name;
         this.description = response.description;
       }.bind(this));

    }
  },


  writing: function () {
    if(this.options.createDirectory){
      this.destinationRoot(this.options.dirname);
      this.appname = this.options.dirname;
    }
    this.fs.copy(
      this.templatePath('.'),

      this.destinationPath('.')
    );
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),{appname:this.appname}
    );

  },

  install: function () {
    var done = this.async();
    this.spawnCommand('cnpm', ['install'])  //安装项目依赖
      .on('exit', function (code) {
        if (code) {
          done(new Error('code:' + code));
        } else {
          done();
        }
      })
      .on('error', done);
    //this.installDependencies();
  },
  showtips:function () {
    this.log( chalk.green("npm 较慢，可以自行安装，比如cnpm"));
  }
});
