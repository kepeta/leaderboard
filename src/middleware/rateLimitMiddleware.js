const rateLimit = require('express-rate-limit');

const scoreLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // limit each IP to 10 requests per windowMs
    message: 'Too many requests, please try again later.'
});

module.exports = scoreLimiter;
