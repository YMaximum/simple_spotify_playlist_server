const express = require('express');
const PlaylistController = require('../controllers/playlistController');

const router = express.Router();

router.get('/', PlaylistController.getSongs);
router.post('/', PlaylistController.addSong);
router.get('/:id', PlaylistController.getSong);

module.exports = router;