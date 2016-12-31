var React = require('react');

// pitch-pipe component
module.exports = React.createClass({

  getInitialState: function() {
    return {
      pitchFiles: {},
      pitchList: [
        'e-natural-low',
        'f-natural',
        'f-sharp',
        'g-natural',
        'a-flat',
        'a-natural',
        'b-flat',
        'b-natural',
        'c-natural',
        'c-sharp',
        'd-natural',
        'e-flat',
        'e-natural-high'
      ]
    };
  },

  fetchPitches: function() {
    var pitchList = this.state.pitchList;
    var pitchFiles = {};

    pitchList.forEach(function(pitch) {
      pitchFiles[pitch] = new Audio('/file/' + pitch);
    });

    this.setState({'pitchFiles': pitchFiles});
  },


  componentDidMount: function() {
    this.fetchPitches();
  },

  playPitch: function(pitch) {
    this.state.pitchFiles[pitch].play();
  },

  render: function() {
    return (
      <div>
        <article className='pitchPipe'>
          <section className='pitchRow'>
            <button className='btn pitch' onClick={this.playPitch.bind(this, 'e-natural-low')}>E</button>
            <button className='btn pitch' onClick={this.playPitch.bind(this, 'f-natural')}>F</button>
            <button className='btn pitch' onClick={this.playPitch.bind(this, 'f-sharp')}>F#</button>
          </section>
          <section className='pitchRow'>
            <button className='btn pitch' onClick={this.playPitch.bind(this, 'g-natural')}>G</button>
            <button className='btn pitch' onClick={this.playPitch.bind(this, 'a-flat')}>Ab</button>
            <button className='btn pitch' onClick={this.playPitch.bind(this, 'a-natural')}>A</button>
          </section>
          <section className='pitchRow'>
            <button className='btn pitch' onClick={this.playPitch.bind(this, 'b-flat')}>Bb</button>
            <button className='btn pitch' onClick={this.playPitch.bind(this, 'b-natural')}>B</button>
            <button className='btn pitch' onClick={this.playPitch.bind(this, 'c-natural')}>C</button>
          </section>
          <section className='pitchRow'>
            <button className='btn pitch' onClick={this.playPitch.bind(this, 'c-sharp')}>C#</button>
            <button className='btn pitch' onClick={this.playPitch.bind(this, 'd-natural')}>D</button>
            <button className='btn pitch' onClick={this.playPitch.bind(this, 'e-flat')}>Eb</button>
          </section>
          <section className='pitchRow'>
            <button className='btn pitch' onClick={this.playPitch.bind(this, 'e-natural-high')}>E</button>
          </section>
        </article>
      </div>
    );
  }
});
