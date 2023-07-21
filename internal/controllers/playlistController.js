const PlaylistService = require('../services/paylistService');

class PlaylistController {
    static getSongs(req, res) {
        const getSongs = PlaylistService.getSongs();
        res.json(getSongs);
    }

    static getSong(req, res) {
        let id = parseInt(req.params.id);
        const getSong = PlaylistService.getSong(id);
        res.json(getSong);
    }

    static addSong(req, res) {
        const { title, artists, url } = req.body;
        const song = PlaylistService.addSong(title, artists, url);
        res.status(201).json(song);
    }
}

module.exports = PlaylistController;