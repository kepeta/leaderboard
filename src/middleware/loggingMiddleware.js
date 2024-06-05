const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const logStream = fs.createWriteStream(path.join(__dirname, '../../access.log'), { flags: 'a' });

const loggingMiddleware = morgan('combined', { stream: logStream });

module.exports = loggingMiddleware;
