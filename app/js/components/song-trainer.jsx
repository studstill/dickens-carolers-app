var React = require('react');
var songList = require('../../data/song-list');

// random-song
module.exports = React.createClass({
  getInitialState: function() {
    return {
      songList: songList,
      currentSongTitle: 'Click the button for a song request!',
      currentSongKey: '',
      keyRevealed: false,
      songPicked: false
    };
  },

  pickRandomSong: function() {
    var songList = this.state.songList;
    var numberOfSongs = Object.keys(songList).length;
    var randomSongNumber = Math.floor(Math.random() * numberOfSongs);
    var randomSong = songList[randomSongNumber];
    // var currentSong = this.state.songList[3].title;
    this.setState({
      currentSongTitle: randomSong.title,
      currentSongKey: randomSong.key,
      // Hide Key
      keyRevealed: false,
      songPicked: true
    });
  },

  handleRevealKey: function() {
    this.setState({
      keyRevealed: !this.state.keyRevealed
    });
  },

  render: function() {
    $.get('/files/', function(result) {
      console.log(result);
    }.bind(this));
    var currentSong = '';
    var keyRevealed = false;
    return (
      <div>
        <article className="songTrainer">
          <h1>{this.state.currentSongTitle}</h1>
          <p className="displayText">
            {this.state.songPicked ?
              (
                <button type="button" className="btn" onClick={this.handleRevealKey}>
                 {this.state.keyRevealed ?
                    (this.state.currentSongKey) :
                    ('Reveal Key')
                 }
               </button>
              ) :
              (
                this.state.currentSongKey
              )
            }
          <button type="button" className='btn' onClick={this.pickRandomSong}>New Song</button>
        </p>
        </article>
      </div>
    )
  }
})
