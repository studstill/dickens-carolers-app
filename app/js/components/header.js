var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Link = Router.Link;

// header component
module.exports = React.createClass({
  render: function() {
    return (
      <header className="nav">
        <Link to={'/pitch-pipe'}>Pitch Pipe</Link>
        <Link to={'/random-song'}>Random Song</Link>
      </header>
    );
  }
});
