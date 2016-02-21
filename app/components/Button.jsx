import Radium from 'radium';
import React, { Component, PropTypes } from 'react';
import color from 'color';

const styles = {
  base: {
    border: 0,
    borderRadius: '.4rem',
    color: '#fff',
    padding: '.5rem 1rem',

    ':hover': {
      background: color('#0074d9').lighten(0.2).hexString(),
    },
  },

  primary: {
    background: '#0074d9',
  },

  warning: {
    background: '#FF4136',
  },
};

class Hello extends Component {
  render() {
    return (
      <button
        style={[
          styles.base,
          styles[this.props.kind],
        ]}
      >
        {this.props.children}
      </button>
    );
  }
}

Hello.propTypes = {
  children: PropTypes.string.isRequired,
  kind: PropTypes.oneOf(['primary', 'warning']).isRequired,
};

Hello.defaultProps = {
  children: 'Submit',
  kind: 'primary',
};

Hello = Radium(Hello);
export default Hello;
