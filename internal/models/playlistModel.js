const { generateID } = require('../utils/generator');

let playlist = [];

class PlaylistModel {
    constructor(songID, title, artists, url, playCount) {
        this.songID = songID;
        this.title = title;
        this.artists = artists;
        this.url = url;
        this.playCount = playCount;
    }

    static getSongs() {
        return playlist;
    }

    static getSong(id) {
        return playlist.find(s => s.songID === id);
    }

    static addSong(title, artists, url) {
        const songID = generateID();
        const newSong = new PlaylistModel(songID, title, artists, url, 0);
        playlist.push(newSong);
        return newSong;
    }

    static sortSongs(key) {
        return playlist.sort((a, b) => {return b[key] - a[key]});
    }
}

module.exports = PlaylistModel;