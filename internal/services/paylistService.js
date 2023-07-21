const PlaylistModel = require('../models/playlistModel');

class PlaylistService {
    static getSongs() {
        return PlaylistModel.getSongs();
    }

    static getSong(id) {
        return PlaylistModel.getSong(id);
    }

    static addSong(title, artists, url) {
        return PlaylistModel.addSong(title, artists, url);
    }

    static sortSongs(key) {
        return PlaylistModel.sortSongs(key);
    }
}

module.exports = PlaylistService;