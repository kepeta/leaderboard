const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const scoreRoutes = require('./routes/scoreRoutes');
const loggingMiddleware = require('./middleware/loggingMiddleware');

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(loggingMiddleware);
app.use('/api', scoreRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
