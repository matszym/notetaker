import React from 'react';

import NotesList from './NotesList';
import AddNote from './AddNote.js';

const Notes = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired,
    addNote: React.PropTypes.func.isRequired
  },
  render() {
    return (
      <div>
        <AddNote username={this.props.username} addNote={this.props.addNote} />
        <h3>Notes for {this.props.username}</h3>
        <NotesList notes={this.props.notes} />
      </div>
    )
  }
});

export default Notes;