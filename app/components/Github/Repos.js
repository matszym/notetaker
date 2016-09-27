const React = require('react');

const Repos = React.createClass({
  render() {
    return (
      <div>
        <p>REPOS</p>
        <p>{this.props.repos}</p>
      </div>
    )
  }
});

module.exports = Repos;