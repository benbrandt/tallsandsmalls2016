import React, { Component, PropTypes } from 'react';

export default class Parallax extends Component {
  scroll() {
    const windowYOffset = window.pageYOffset;
    const elmTopOffset = this.element.offsetTop;
    this.position = `50% ${(windowYOffset - elmTopOffset) * Parallax.speed}px`;
  }

  render() {
    return (
      <div
        className="bg fadeIn fadeIn-3s fadeIn-Delay-3s"
        style={{ backgroundPosition: this.props.position }}
        onScroll={this.scroll}
      >
        {this.props.children}
      </div>
    );
  }
}

Parallax.propTypes = {
  children: PropTypes.element,
  position: PropTypes.string,
  speed: PropTypes.number,
};

Parallax.defaultProps = {
  position: '50% 0',
  speed: 0.5,
};
