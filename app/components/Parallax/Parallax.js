import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './Parallax.css';

class Parallax extends Component {
  scroll() {
    const windowYOffset = window.pageYOffset;
    const elmTopOffset = this.element.offsetTop;
    this.position = `50% ${(windowYOffset - elmTopOffset) * Parallax.speed}px`;
  }

  render() {
    return (
      <div
        styleName="parallax"
        style={{
          backgroundPosition: this.props.position,
          backgroundImage: `url(${this.props.bgImage})`,
        }}
        onScroll={this.scroll}
      />
    );
  }
}

Parallax.propTypes = {
  bgImage: PropTypes.string,
  position: PropTypes.string,
  speed: PropTypes.number,
};

Parallax.defaultProps = {
  position: '50% 0',
  speed: 0.5,
};

export default CSSModules(Parallax, styles);
