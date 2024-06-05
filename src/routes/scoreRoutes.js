const express = require('express');
const { submitScore, getLeaderboard } = require('../controllers/scoreController');
const { authenticate, authorize } = require('../middleware/authMiddleware');
const rateLimit = require('../middleware/rateLimitMiddleware');

const router = express.Router();

router.post('/scores', authenticate, authorize, rateLimit, submitScore);
router.get('/leaderboard', getLeaderboard);

module.exports = router;
