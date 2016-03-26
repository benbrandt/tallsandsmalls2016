import React, { Component, PropTypes } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="headerClass">
        <div className="inner">
          <div className="row">
            <div className="col-md-4">
              <div className="box">
                <h1>{this.props.names}</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  names: PropTypes.string,
};
