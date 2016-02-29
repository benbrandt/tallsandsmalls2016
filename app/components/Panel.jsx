import color from 'color';
import Radium from 'radium';
import React, { Component, PropTypes } from 'react';
import variables from '../styles/variables';

const styles = {
  base: {
    background: color(variables.colors.champagne).clearer(0.1).rgbString(),
    display: 'flex',
    flex: '1',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '2rem',
  },

  wrapper: {
    maxWidth: variables.misc.maxWidth,
    margin: '0 auto',
    width: '100%',
  },
};

class Panel extends Component {
  render() {
    return (
      <div style={styles.base}>
        <div style={styles.wrapper}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Panel.propTypes = {
  children: PropTypes.element,
};

export default Radium(Panel);
