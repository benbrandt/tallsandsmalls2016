import Radium from 'radium';
import React, { Component, PropTypes } from 'react';

const styles = {
  base: {
    background: '#fff',
    borderColor: '#dddcc5',
    borderStyle: 'solid',
    borderWidth: '1px',
    color: '#1D2326',
    display: 'inline-block',
    fontSize: '1.25rem',
    height: '2.5rem',
    lineHeight: '2',
    MozAppearance: 'none',
    padding: '.25rem .67rem',
    position: 'relative',
    verticalAlign: 'top',
    WebkitAppearance: 'none',

    ':hover': {
      borderColor: '#958976',
    },

    ':active': {
      background: '#611427',
      outline: 'none',
    },

    ':focus': {
      background: '#611427',
      outline: 'none',
    },
  },

  radio: {
    borderRadius: '.5rem',
    boxShadow: 'inset 0 1px 1px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    float: 'left',
    height: '1rem',
    marginBottom: '1rem',
    marginLeft: '.75rem',
    marginRight: '.25rem',
    outline: 'none',
    padding: '0',
    top: '.25rem',
    width: '1rem',
  },
};

class Radio extends Component {
  render() {
    const radioStyle = Object.assign(styles.base, styles.radio);

    return (
      <label htmlFor={this.props.value}>
        <input
          id={this.props.value}
          name={this.props.name}
          value={this.props.value}
          style={radioStyle}
          type="radio"
        />
        {this.props.label}
      </label>
    );
  }
}

Radio.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Radium(Radio);
