const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PlaylistModel = require('./models/playlistModel');

const playlistRoutes = require('./routes/playlistRoutes');

app.use(bodyParser.json());

app.use('/songs', playlistRoutes);

module.exports = app;