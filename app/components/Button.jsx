import color from 'color';
import Radium from 'radium';
import React, { Component, PropTypes } from 'react';

const styles = {
  base: {
    border: '1px solid transparent',
    borderRadius: '0',
    color: '#fff',
    display: 'inline-block',
    fontSize: '0.9rem',
    lineHeight: '1',
    margin: '0 0 1rem 0',
    padding: '.85rem 1rem',
    textAlign: 'center',
    transition: 'background-color 0.25s ease-out, color 0.25s ease-out',
    verticalAlign: 'middle',
    WebkitAppearance: 'none',
  },

  primary: {
    background: '#2199e8',

    ':hover': {
      background: color('#2199e8').darken(0.2).hexString(),
    },
  },

  success: {
    background: '#3adb76',

    ':hover': {
      background: color('#3adb76').darken(0.2).hexString(),
    },
  },

  warning: {
    background: '#ec5840',

    ':hover': {
      background: color('#ec5840').darken(0.2).hexString(),
    },
  },
};

class Button extends Component {
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

Button.propTypes = {
  children: PropTypes.string.isRequired,
  kind: PropTypes.oneOf(['primary', 'warning']).isRequired,
};

Button.defaultProps = {
  children: 'Submit',
  kind: 'primary',
};

Button = Radium(Button);
export default Button;
