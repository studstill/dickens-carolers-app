var request = require('superagent');

module.exports = {
  fetchSongList: function() {
    request
      .get('/song-list/')
      .end(function(err, res) {
        var songList = res.body;
        this.setState({
          songList: songList
        });
      }.bind(this));
  },

  pickRandomSong: function() {
    var songList = this.state.songList;
    var numberOfSongs = Object.keys(songList).length;
    var randomSongNumber = Math.floor(Math.random() * numberOfSongs);
    var randomSong = songList[randomSongNumber];
    this.setState({
      currentSongTitle: randomSong.title,
      currentSongKey: randomSong.key,
      // Hide Key
      keyRevealed: false,
      songPicked: true
    });
  }
};
