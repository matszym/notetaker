const React = require('react');
const Router = require('react-router');
const ReactFireMixin = require('reactfire');
const firebase = require('firebase');

const firebaseConfig = require('../config/firebase.js');

const Repos = require('./Github/Repos.js');
const UserProfile = require('./Github/UserProfile.js');
const Notes = require('./Notes/Notes.js');

const Profile = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState() {
    return {
      notes: [1,2,3],
      bio: {
        name: 'Tyler McGinnis'
      },
      repos: ['a', 'b', 'c']
    }
  },
  componentDidMount() {
    firebase.initializeApp(firebaseConfig);

    this.ref = firebase.database().ref('/');
    const childRef = this.ref.child(this.props.params.username);
    this.bindAsArray(childRef, 'notes');
  },
  componentWillUnmount() {
    this.unbind('notes');
  },
  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.username} repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes username={this.props.params.username} notes={this.state.notes} />
        </div>
      </div>
    )
  }
});

module.exports = Profile;