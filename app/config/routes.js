const React = require('react'),
Main = require('../components/Main'),
Home = require('../components/Home'),
Profile = require('../components/Profile'),

{Route, IndexRoute} = require('react-router');

module.exports = (
  <Route path="/" component={Main}>
    <Route path="profile/:usermname" component={Profile} />
    <IndexRoute component={Home} />
  </Route>
);