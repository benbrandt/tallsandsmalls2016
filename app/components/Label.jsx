import Radium from 'radium';
import React, { Component, PropTypes } from 'react';

const styles = {
  base: {
    clip: 'rect(0, 0, 0, 0)',
    height: '1px',
    overflow: 'hidden',
    position: 'absolute',
    width: '1px',
  },
};

class Label extends Component {
  render() {
    return (
      <label
        style={styles.base}
        htmlFor={this.props.htmlFor}
      >
        {this.props.children}
      </label>
    );
  }
}

Label.propTypes = {
  children: PropTypes.string,
  htmlFor: PropTypes.string,
};

export default Radium(Label);
