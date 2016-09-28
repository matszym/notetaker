import React from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import SearchGithub from './Github/SearchGithub';

const Main = React.createClass({
  render() {
    return (
      <div className="main-container">
        <div className="navbar navbar-default" role="navigation">
          <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
            <SearchGithub />
          </div>
        </div>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
});

export default Main;