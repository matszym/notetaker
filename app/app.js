const React = require('react');
const {render} = require('react-dom');
const {Router, browserHistory} = require('react-router');
const routes = require('./config/routes');

render(
  <Router history={browserHistory}>{routes}</Router>,
  document.getElementById('app')
);