const React = require('react');

const UserProfile = React.createClass({
  render() {
    return (
      <div>
        <p>USER PROFILE</p>
        <p>{this.props.bio.name}</p>
      </div>
    )
  }
});

module.exports = UserProfile;