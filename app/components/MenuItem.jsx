import variables from '../styles/variables';
import Radium from 'radium';
import React, { Component, PropTypes } from 'react';

const styles = {
  base: {
    color: variables.colors.black,
    flex: '1',
    flexOrder: '1',
    fontWeight: '700',
    margin: 'auto',
    padding: '.85rem 1rem',
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'uppercase',

    ':hover': {
      color: variables.colors.burgandy,
    },
  },

  logo: {
    flexOrder: '-1',
    fontFamily: variables.font.families.cursive,
    fontSize: variables.font.sizes.three,
    textTransform: 'none',

    '@media min-width(600px)': {
      flexOrder: '1',
    },
  },
};

class MenuItem extends Component {
  render() {
    return (
      <a
        href={this.props.link}
        style={[
          styles.base,
          this.props.type === 'logo' ? styles.logo : {},
        ]}
      >
        {this.props.children}
      </a>
    );
  }
}

MenuItem.propTypes = {
  children: PropTypes.string,
  link: PropTypes.string,
  type: PropTypes.string,
};

export default Radium(MenuItem);
