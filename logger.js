/**
 * Logger module
 * @author João Eduardo Saad
 * @since 25/09/2018
 *
 */
const chalk = require('chalk');

var currentLevel  = false;

var path = false;

module.exports.level = function (level) {
    this.currentLevel = level;
}

module.exports.debug = function (text, obj) {
    this.path ? this.path : this.path = 'logs.txt';

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
    this.path ? this.path : this.path = 'logs.txt'; 

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
    this.path ? this.path : this.path = 'logs.txt';

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
    this.path ? this.path : this.path = 'logs.txt'; 

    if (    this.currentLevel == 'debug'    || 
            this.currentLevel == 'info'     || 
            this.currentLevel == 'success'  || 
            this.currentLevel == 'warning'  ||
            this.currentLevel == undefined) {
        if (obj == undefined) {
            console.log(chalk.yellow(new Date().toISOString() + ' [WARNING]') + ' : ' + text);
        } else {
            console.log(chalk.yellow(new Date().toISOString() + ' [WARNING]') + ' : ' + text, obj);
        } 
    }
}

module.exports.critical = function (text, obj) {
    this.path ? this.path : this.path = 'logs.txt';

    if (    this.currentLevel == 'debug'    || 
            this.currentLevel == 'info'     || 
            this.currentLevel == 'success'  || 
            this.currentLevel == 'warning'  ||
            this.currentLevel == 'critical' ||
            this.currentLevel == undefined) {
        if (obj == undefined) {
            console.log(chalk.hex('#FF8000')(new Date().toISOString() + ' [CRITICAL]') + ' : ' + text);
        } else {
            console.log(chalk.hex('#FF8000')(new Date().toISOString() + ' [CRITICAL]') + ' : ' + text, obj);
        }   
    }
}

module.exports.fatal = function (text, obj) {
    this.path ? this.path : this.path = 'logs.txt';

    if (    this.currentLevel == 'debug'    || 
            this.currentLevel == 'info'     || 
            this.currentLevel == 'success'  || 
            this.currentLevel == 'warning'  ||
            this.currentLevel == 'critical' ||
            this.currentLevel == 'fatal'    ||
            this.currentLevel == undefined) {
        if (obj == undefined) {
            console.log(chalk.red(new Date().toISOString() + ' [FATAL]') + ' : ' + text);
        } else {
            console.log(chalk.red(new Date().toISOString() + ' [FATAL]') + ' : ' + text, obj);
        }   
    }
}