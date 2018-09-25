Version 0.0.1 
===

Features
---

 - Better console.logs
 - Logging on files
 - No need to remove logger from code, just change the level of log
___

Levels
---
 - Fatal       => File and Console
 - Critical    => File and Console
 - Warning  => File and Console
 - Info         => Console
 - Debug    => Console

___

How to work with:
---

The package will automatically create a folder called logs at the parent folder that is called, and all the text logs will be injected there.

`
var sLogger = require('simpler-logger');
sLogger.level('debug');

// BUILD FOR LOGGIN WHILE DEVELOPMENT
sLogger.debug("Text to log", object);

//BUILD FOR LOGGIN ON CONSOLES
sLogger.info("Text to log", object);

//BUILD FOR LOGGIN ON CONSOLES AND TEXT FILES INFORMATION
sLogger.warning("Text to log");

/BUILD FOR LOGGIN ON CONSOLES AND TEXT FILES CRITICAL INFORMATION sLogger.critical("Text to log");

/BUILD FOR LOGGIN ON CONSOLES AND TEXT FILES FATAL DATA
sLogger.fatal("Text to log");

`

