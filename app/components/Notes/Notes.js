const React = require('react');

const NotesList = require('./NotesList');

const Notes = React.createClass({
  render() {
    return (
      <div>
        <h3>Notes for {this.props.username}</h3>
        <NotesList notes={this.props.notes} />
      </div>
    )
  }
});

module.exports = Notes;