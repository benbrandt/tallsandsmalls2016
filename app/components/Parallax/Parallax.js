import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import CSSModules from 'react-css-modules';
import styles from './Parallax.css';

class Parallax extends Component {
  constructor() {
    super();
    this.state = { position: 0 };
    this.scroll = this.scroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll');
  }

  scroll() {
    const windowYOffset = window.pageYOffset;
    const elmTopOffset = ReactDOM.findDOMNode(this.refs[this.props.index]).offsetTop;
    const position = (windowYOffset - elmTopOffset) * this.props.speed;
    this.setState({ position });
  }

  render() {
    return (
      <div
        ref={this.props.index}
        styleName="parallax"
        style={{
          backgroundPosition: `50% ${this.state.position}px`,
          backgroundImage: `url(${this.props.bgImage})`,
        }}
      />
    );
  }
}

Parallax.propTypes = {
  bgImage: PropTypes.string,
  index: PropTypes.string,
  speed: PropTypes.number,
};

Parallax.defaultProps = {
  index: 0,
  speed: 0.5,
};

export default CSSModules(Parallax, styles);
