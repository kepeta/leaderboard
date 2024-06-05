const jwtUtils = require('../utils/jwtUtils');

const authenticate = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).send({ message: 'No token provided.' });
    }

    try {
        const decoded = jwtUtils.verifyToken(token);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).send({ message: 'Unauthorized.' });
    }
};

const authorize = (req, res, next) => {
    const { user } = req;
    const { player_name } = req.body;
    if (user.role !== 'admin' && user.username !== player_name) {
        return res.status(403).send({ message: 'Forbidden.' });
    }
    next();
};

module.exports = {
    authenticate,
    authorize
};
