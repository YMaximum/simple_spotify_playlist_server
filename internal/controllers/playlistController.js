const PlaylistService = require('../services/paylistService');

class PlaylistController {
    static getSongs(req, res) {
        const getSongs = PlaylistService.getSongs();
        res.status(200).json(getSongs);
    }

    static getSong(req, res) {
        let id = parseInt(req.params.id);
        const getSong = PlaylistService.getSong(id);
        getSong.playCount += 1;
        res.status(200).json(getSong);
    }

    static addSong(req, res) {
        const { title, artists, url } = req.body;
        const song = PlaylistService.addSong(title, artists, url);
        res.status(201).json(song);
    }

    static sortSongs(req, res) {
        let key = req.params.key;
        const sortedSongs = PlaylistService.sortSongs(key);
        res.status(200).json(sortedSongs);
    }
}

module.exports = PlaylistController;