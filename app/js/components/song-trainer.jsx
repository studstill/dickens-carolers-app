var React = require('react');
var songListServices = require('../services/song-list-services');

// random-song
module.exports = React.createClass({
  getInitialState: function() {
    return {
      songList: {},
      currentSongTitle: 'Click the button for a song request!',
      currentSongKey: '',
      keyRevealed: false,
      songPicked: false
    };
  },

  componentDidMount: function() {
    songListServices.fetchSongList.call(this);
  },

  pickRandomSong: function() {
    songListServices.pickRandomSong.call(this);
    this.setState({
      // Hide key/pitch when a new song is generated
      keyRevealed: false,
    });
  },

  handleRevealKey: function() {
    this.setState({
      keyRevealed: !this.state.keyRevealed
    });
  },

  render: function() {
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
