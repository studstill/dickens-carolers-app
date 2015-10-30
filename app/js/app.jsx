'use strict';

let React = require('react');
let ReactDOM = require('react-dom');
let songList = require('./data/song-list');

var App = React.createClass({

  getInitialState: function() {
    return {
      songList: songList,
      currentSongTitle: 'Click the button for a song request!',
      currentSongKey: '',
    };
  },

  pickRandomSong: function() {
    let songList = this.state.songList;
    let numberOfSongs = Object.keys(songList).length;
    let randomSongNumber = Math.floor(Math.random() * numberOfSongs);
    let randomSong = songList[randomSongNumber];
    // var currentSong = this.state.songList[3].title;
    this.setState({
      currentSongTitle: randomSong.title,
      currentSongKey: randomSong.key
    });
  },

  playPitch: function(pitch) {
    console.log(pitch);
    var snd = new Audio('/file/' + pitch); // buffers automatically when created
    snd.play();
  },

  render: function() {
    var currentSong = '';
    return (
      <div className='home'>
        <div>
          <p>
            {this.state.currentSongTitle}
          </p>
          <p>
            {this.state.currentSongKey}
          </p>
          <button onClick={this.pickRandomSong}>New Song</button>
          <button onClick={this.playPitch.bind(this, 'a-flat')}>Ab</button>
          <button onClick={this.playPitch.bind(this, 'a-natural')}>A</button>
          <button onClick={this.playPitch.bind(this, 'b-flat')}>Bb</button>
          <button onClick={this.playPitch.bind(this, 'b-natural')}>B</button>
          <button onClick={this.playPitch.bind(this, 'c-natural')}>C</button>
          <button onClick={this.playPitch.bind(this, 'c-sharp')}>C#</button>
          <button onClick={this.playPitch.bind(this, 'd-natural')}>D</button>
          <button onClick={this.playPitch.bind(this, 'e-flat')}>Eb</button>
          <button onClick={this.playPitch.bind(this, 'e-natural-high')}>E (High)</button>
          <button onClick={this.playPitch.bind(this, 'e-natural-low')}>E (low)</button>
          <button onClick={this.playPitch.bind(this, 'f-natural')}>F</button>
          <button onClick={this.playPitch.bind(this, 'f-sharp')}>F#</button>
          <button onClick={this.playPitch.bind(this, 'g-natural')}>G</button>
        </div>
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('content'));
