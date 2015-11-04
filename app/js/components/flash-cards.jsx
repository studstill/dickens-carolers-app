var React = require('react');
var songListServices = require('../services/song-list-services');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      songList: {},
      currentSongTitle: '',
      currentSongKey: '',
      currentSongNumber: 0,
      keyRevealed: false,
      songPicked: false,
      revealed: true
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
    console.log(this.state);
    var f1_card = document.getElementById('f1_card');
    if (this.state.revealed) {
      f1_card.classList.add('revealed');
    } else {
      f1_card.classList.remove('revealed');
    }
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
              <div className="front face">
                <p>{this.state.currentSongTitle}</p>
              </div>
              <div className="back face center">
                <h2>Number: {this.state.currentSongNumber}</h2>
                <h2>Key: {this.state.currentSongKey}</h2>
              </div>
            </div>
          </div>
          <button onClick={this.pickRandomSong}>New Song</button>
          <button onClick={this.rotateCard}>Pitch & Number</button>
        </div>
      </div>
    );
  }
});
