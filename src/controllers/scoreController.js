const pool = require('../models/db');

const submitScore = async (req, res) => {
    const { player_name, score } = req.body;

    try {
        const conn = await pool.getConnection();
        await conn.query('INSERT INTO scores (player_name, score) VALUES (?, ?)', [player_name, score]);
        conn.release();
        res.status(201).send({ message: 'Score submitted successfully.' });
    } catch (err) {
        res.status(500).send({ message: 'Error submitting score.' });
    }
};

const getLeaderboard = async (req, res) => {
    try {
        const conn = await pool.getConnection();
        const rows = await conn.query('SELECT player_name, score FROM scores ORDER BY score DESC LIMIT 10');
        conn.release();
        res.status(200).send(rows);
    } catch (err) {
        res.status(500).send({ message: 'Error retrieving leaderboard.' });
    }
};

module.exports = {
    submitScore,
    getLeaderboard
};
