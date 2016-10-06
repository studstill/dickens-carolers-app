var React = require('react');

// pitch-pipe component
module.exports = React.createClass({

  fetchPitches: function() {
    window.pitchKeys = {
      'eNaturalLow': null,
      'fNatural': null,
      'fSharp': null,
      'gNatural': null,
      'aFlat': null,
      'aNatural': null,
      'bFlat': null,
      'bNatural': null,
      'cNatural': null,
      'cSharp': null,
      'dNatural': null,
      'eFlat': null,
      'eNaturalHigh': null
    };

    /*******************************************
    / BROKEN - TODO: Fix Async load of pitches
    / so they don't all play the same pitch
    /******************************************/

    var pitchKeys = window.pitchKeys;

    for (pitch in pitchKeys) {
      (function(pitch) {
        console.log(pitch)
        pitchKeys.pitch = new Audio('/file/' + pitch)
        console.log(pitchKeys.pitch)
      })(pitch)
    }

    // this.setState({
    //   'pitchKeys': pitchKeys
    // });
  },

  playPitch: function(pitch) {
    console.log(pitch);
    // Do server GET request to /file/:pitch
    // var sound = new Audio('/file/' + pitch); // buffers automatically when created
    // sound.play();
    window.pitchKeys.pitch.play()
  },

  componentDidMount: function() {
    this.fetchPitches();
  },

  render: function() {
    return (
      <div>
        <article className='pitchPipe'>
          <section className='pitchRow'>
            <button className='btn pitch' onClick={this.playPitch.bind(this, 'eNaturalLow')}>E</button>
            <button className='btn pitch' onClick={this.playPitch.bind(this, 'fNatural')}>F</button>
            <button className='btn pitch' onClick={this.playPitch.bind(this, 'fSharp')}>F#</button>
          </section>
          <section className='pitchRow'>
            <button className='btn pitch' onClick={this.playPitch.bind(this, 'gNatural')}>G</button>
            <button className='btn pitch' onClick={this.playPitch.bind(this, 'aFlat')}>Ab</button>
            <button className='btn pitch' onClick={this.playPitch.bind(this, 'aNatural')}>A</button>
          </section>
          <section className='pitchRow'>
            <button className='btn pitch' onClick={this.playPitch.bind(this, 'bFlat')}>Bb</button>
            <button className='btn pitch' onClick={this.playPitch.bind(this, 'bNatural')}>B</button>
            <button className='btn pitch' onClick={this.playPitch.bind(this, 'cNatural')}>C</button>
          </section>
          <section className='pitchRow'>
            <button className='btn pitch' onClick={this.playPitch.bind(this, 'cSharp')}>C#</button>
            <button className='btn pitch' onClick={this.playPitch.bind(this, 'dNatural')}>D</button>
            <button className='btn pitch' onClick={this.playPitch.bind(this, 'eFlat')}>Eb</button>
          </section>
          <section className='pitchRow'>
            <button className='btn pitch' onClick={this.playPitch.bind(this, 'eNaturalHigh')}>E</button>
          </section>
        </article>
      </div>
    );
  }
});
