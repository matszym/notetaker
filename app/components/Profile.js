const React = require('react');
const Router = require('react-router');
const ReactFireMixin = require('reactfire');
const firebase = require('firebase');

const firebaseConfig = require('../config/firebase.js');

const Repos = require('./Github/Repos.js');
const UserProfile = require('./Github/UserProfile.js');
const Notes = require('./Notes/Notes.js');

const helpers = require('../utils/helpers.js');

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
    this.init(this.props.params.username);
  },
  init(username) {
    const childRef = this.ref.child(username);
    this.bindAsArray(childRef, 'notes');

    helpers
    .getGithubInfo(username)
    .then(data => {
      this.setState({
        bio: data.user,
        repos: data.repos
      });
    });
  },
  componentWillReceiveProps(nextProps) {
    this.unbind('notes');
    this.init(nextProps.params.username);
  },
  componentWillUnmount() {
    this.unbind('notes');
  },
  handleAddNote(newNote) {
    //update firebase with newNote
    this
    .ref
    .child(this.props.params.username)
    .child(this.state.notes.length)
    .set(newNote);
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
          <Notes 
            username={this.props.params.username} 
            notes={this.state.notes}
            addNote={this.handleAddNote}/>
        </div>
      </div>
    )
  }
});

module.exports = Profile;