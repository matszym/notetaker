import React  from 'react';

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

export default UserProfile;