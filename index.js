var logger = require('./logger.js');

// console.log(logger);
logger.level('critical');

logger.debug('debug');
logger.info('info');
logger.success('success');
logger.warning('warning');
logger.critical('critical');
logger.fatal('fatal');
