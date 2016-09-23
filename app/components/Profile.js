const React = require('react');
const Router = require('react-router');

const Profile = React.createClass({
  getInitialState() {
    return {
      notes: [],
      bio: {},
      repos: []
    }
  },
  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          User Profile Component
        </div>
        <div className="col-md-4">
          Repos Component
        </div>
        <div className="col-md-4">
          Notes Profile Component
        </div>
      </div>
    )
  }
});

module.exports = Profile;