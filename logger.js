/**
 * Logger
 * @author João Eduardo Saad
 * @since 25/09/2018
 *
 */
const chalk = require('chalk');
const fs = require('fs');

var currentLevel  = false;

var path = false;

module.exports.level = function (level) {
    this.currentLevel = level;
}

module.exports.debug = function (text, obj) {
    this.path ? this.path : this.path = 'logs.log';

    if (    this.currentLevel == 'debug'    || 
            this.currentLevel == undefined) {
        if (obj == undefined) {
            console.log(chalk.hex('#00E6FF')(new Date().toISOString() + ' [DEBUG]') + ' : ' + text);
        } else {
            console.log(chalk.hex('#00E6FF')(new Date().toISOString() + ' [DEBUG]') + ' : ' + text, obj);
        }
    }
}

module.exports.info = function (text, obj) {
    this.path ? this.path : this.path = 'logs.log'; 

    if (    this.currentLevel == 'debug'    || 
            this.currentLevel == 'info'     || 
            this.currentLevel == undefined) {
        if (obj == undefined) {
            console.log(chalk.cyan(new Date().toISOString() + ' [INFO]' ) + ' : ' + text);
        } else {
            console.log(chalk.cyan(new Date().toISOString() + ' [INFO]' ) + ' : ' + text, obj);
        }
    }
    
}
module.exports.success = function (text, obj) {
    this.path ? this.path : this.path = 'logs.log';

    if (    this.currentLevel == 'debug'    || 
            this.currentLevel == 'info'     || 
            this.currentLevel == 'success'  || 
            this.currentLevel == undefined) {
        if (obj == undefined) {
            console.log(chalk.green(new Date().toISOString() + ' [SUCCESS]' ) + ' : ' + text);
        } else {
            console.log(chalk.green(new Date().toISOString() + ' [SUCCESS]' ) + ' : ' + text, obj);
        }
    }
}

module.exports.warning = function (text, obj) {
    this.path ? this.path : this.path = 'logs.log'; 

    let warning = new Date().toISOString() + ' [WARNING]';
    let parcialText = ' : ' + text;
    let textInfo = chalk.yellow(warning) + parcialText;

    if (    this.currentLevel == 'debug'    || 
            this.currentLevel == 'info'     || 
            this.currentLevel == 'success'  || 
            this.currentLevel == 'warning'  ||
            this.currentLevel == undefined) {
        if (obj == undefined) {
            console.log(textInfo);
            fs.appendFile(this.path, '\n' + warning + parcialText, function () { });    
        } else {
            console.log(textInfo, obj);
            fs.appendFile(this.path, '\n' + warning + parcialText, function () { });
        } 
    }
}

module.exports.critical = function (text, obj) {
    this.path ? this.path : this.path = 'logs.log';

    let critical = new Date().toISOString() + ' [CRITICAL]';
    let parcialText = ' : ' + text;
    let textInfo = chalk.hex('#FF8000')(critical) + parcialText;

    if (    this.currentLevel == 'debug'    || 
            this.currentLevel == 'info'     || 
            this.currentLevel == 'success'  || 
            this.currentLevel == 'warning'  ||
            this.currentLevel == 'critical' ||
            this.currentLevel == undefined) {
        if (obj == undefined) {
            console.log(textInfo);
            fs.appendFile(this.path, '\n' + critical + parcialText, function () { });
        } else {
            console.log(textInfo, obj);
            fs.appendFile(this.path, '\n' + critical + parcialText, function () { });
        } 
    }
}

module.exports.fatal = function (text, obj) {
    this.path ? this.path : this.path = 'logs.log';

    let fatal = new Date().toISOString() + ' [FATAL]';
    let parcialText = ' : ' + text;
    let textInfo = chalk.red(fatal) + parcialText;

    if (    this.currentLevel == 'debug'    || 
            this.currentLevel == 'info'     || 
            this.currentLevel == 'success'  || 
            this.currentLevel == 'warning'  ||
            this.currentLevel == 'critical' ||
            this.currentLevel == 'fatal'    ||
            this.currentLevel == undefined) {
        if (obj == undefined) {
            console.log(textInfo);
            fs.appendFile(this.path, '\n' + fatal + parcialText, function () { });
        } else {
            console.log(textInfo, obj);
            fs.appendFile(this.path, '\n' + fatal + parcialText, function () { });
        }        
    }
}