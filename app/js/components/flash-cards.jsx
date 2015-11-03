var React = require('react');
var songList = require('../../data/song-list');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      revealed: true
    };
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
                <p>Text Here</p>
              </div>
              <div className="back face center">
                <h2>Back of the card</h2>
                <h2>Any content can go here.</h2>
              </div>
            </div>
          </div>
          <button onClick={this.rotateCard}>Click here to reveal</button>
        </div>
      </div>
    )
  }
})
