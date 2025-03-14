const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/index');
const databaseConfig = require('./config/database');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

databaseConfig();

routes(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});