import Radium from 'radium';
import React, { Component, PropTypes } from 'react';
import Label from '../components/Label.jsx';
import variables from '../styles/variables';

const styles = {
  base: variables.formBase,

  input: {
    boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
    display: 'block',
    marginBottom: '1rem',
    maxWidth: '100%',
  },
};

class Input extends Component {
  render() {
    return (
      <div>
        <Label htmlFor={this.props.name}>
          {this.props.placeholder}
        </Label>
        <input
          name={this.props.name}
          placeholder={this.props.placeholder}
          style={Object.assign(styles.base, styles.input)}
          type={this.props.type}
        />
      </div>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
};

export default Radium(Input);
