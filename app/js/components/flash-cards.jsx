var React = require('react');
var songListServices = require('../services/song-list-services');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      songList: {},
      currentSongTitle: 'Click "New Song" for a random song',
      currentSongKey: '',
      currentSongNumber: 0,
      keyRevealed: false,
      songPicked: false,
      revealed: false
    };
  },

  componentDidMount: function() {
    songListServices.fetchSongList.call(this);
  },

  pickRandomSong: function() {
    songListServices.pickRandomSong.call(this);
    if (this.state.revealed) {
      this.setState({
        revealed: !this.state.revealed
      });
    }
  },

  rotateCard: function() {
    this.setState({
      revealed: !this.state.revealed
    });
  },

  render: function() {
    return (
      <div>
        <div className="flashCards">
          <div id="f1_container">
            <div id="f1_card" className="card">
              {this.state.revealed ?
                (
                  <div className="back face center">
                    <h2>Number: {this.state.currentSongNumber}</h2>
                    <h2>Key: {this.state.currentSongKey}</h2>
                  </div>
                ) :
                (
                  <div className="front face">
                    <p>{this.state.currentSongTitle}</p>
                  </div>
                )
              }
            </div>
          </div>
          <button onClick={this.rotateCard}>Pitch & Number</button>
          <button onClick={this.pickRandomSong}>New Song</button>
        </div>
      </div>
    );
  }
});
