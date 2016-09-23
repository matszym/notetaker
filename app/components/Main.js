const React = require('react'),
bootstrap = require('bootstrap/dist/css/bootstrap.min.css'),

Main = React.createClass({
  render() {
    return (
      <div className="main-container">
        <div className="navbar navbar-default" role="navigation">
          <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
            MENU
          </div>
        </div>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
});

module.exports = Main;