const React = require('react');

const UserProfile = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    bio: React.PropTypes.object.isRequired
  },
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