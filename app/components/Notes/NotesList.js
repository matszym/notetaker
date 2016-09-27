const React = require('react');

const NotesList = React.createClass({
  render() {
    const notes = this.props.notes.map((note, index) => 
      <li className="list-group-item" key={index}>{note['.value']}</li>);

    return (
      <ul className="list-group">
        {notes}
      </ul>
    );
  }
});

module.exports = NotesList;