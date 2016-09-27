const React = require('react');

const Notes = React.createClass({
  render() {
    console.log("Notes", this.props.notes);
    return (
      <div>
        <p>NOTES </p>
        <p>{this.props.notes}</p>
      </div>
    )
  }
});

module.exports = Notes;