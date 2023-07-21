const { generateID } = require('../utils/generator');

let playlist = [];

class PlaylistModel {
    constructor(songID, title, artists, url) {
        this.songID = songID;
        this.title = title;
        this.artists = artists;
        this.url = url;
    }

    static getSongs() {
        return playlist;
    }

    static getSong(id) {
        return playlist.filter(s => s.songID === id);
    }

    static addSong(title, artists, url) {
        const songID = generateID();
        const newSong = new PlaylistModel(songID, title, artists, url);
        playlist.push(newSong);
        return newSong;
    }
}

module.exports = PlaylistModel;