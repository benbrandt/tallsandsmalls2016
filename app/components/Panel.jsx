import color from 'color';
import Radium from 'radium';
import React, { Component, PropTypes } from 'react';
import variables from '../styles/variables';

const styles = {
  base: {
    display: 'flex',
    flex: '1',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
  },

  wrapper: {
    alignItems: 'center',
    background: color(variables.colors.champagne).clearer(0.1).rgbString(),
    display: 'flex',
    flexDirection: 'column',
    maxWidth: variables.misc.maxWidth,
    margin: '0 auto',
    padding: '2rem',
    position: 'relative',
    width: 'auto',
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
  children: PropTypes.node,
};

export default Radium(Panel);
