const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const playlistRoutes = require('./routes/playlistRoutes');

app.use(bodyParser.json());

app.use('/api/songs', playlistRoutes);

module.exports = app;