'use strict';

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Link = Router.Link;

// Data
var songList = require('../data/song-list');

// Components
var Header = require('./components/header');
var PitchPipe = require('./components/pitch-pipe')
var RandomSong = require('./components/song-trainer')

var App = React.createClass({

  render: function() {
    return (
      <div className="main">
        <Header />
        <RouteHandler />
      </div>
    );
  }
});

var routes = (
  <Route name='home' path='/' handler={App}>
    <DefaultRoute handler={RandomSong} />
    <Route name="pitchPipe" path="/pitch-pipe" handler={PitchPipe} />
    <Route name="randomSong" path="/random-song" handler={RandomSong} />
    <NotFoundRoute handler={App} />
  </Route>
);

Router.run(routes, function(Handler) {
  React.render(<Handler />, document.getElementById('content'));
});
