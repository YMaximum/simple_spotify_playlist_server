# How to run

- run `npm run start` to run with normal nodejs
- run `npm run dev` to run with nodemon

# How to test

- default port is 3000, can be changed in server.js

# API list

Get all songs in playlist
- method : GET
- url : '/api/songs'
- content-type : application/json

Add song to playlist
- method : POST
- url : '/api/songs'
- content-type : application/json

Play song
- method : GET
- url : '/api/songs/:id'
- content-type : application/json
- you can play song by typing its id in the url
- every time request made, the playCount increase by 1

Sort all songs
- method : GET
- url : '/api/songs/sort/:key'
- content-type : application/json
- available key for sorting are 'playCount' and 'songID'
