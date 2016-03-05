import { Link } from 'react-router';
import Radium from 'radium';
import React, { Component, PropTypes } from 'react';
import variables from '../styles/variables';

const styles = {
  base: {
    color: variables.colors.black,
    flex: '1',
    fontWeight: '700',
    margin: 'auto',
    padding: '.5rem 1rem',
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'uppercase',

    ':hover': {
      color: variables.colors.burgandy,
    },

    '@media min-width(600px)': {
      padding: '.85rem 1rem',
    },
  },

  logo: {
    fontFamily: variables.font.families.cursive,
    fontSize: variables.font.sizes.three,
    flex: '1 1 100%',
    textTransform: 'none',
    width: '100%',

    '@media min-width(600px)': {
      flex: '1 1 0%',
      fontSize: variables.font.sizes.two,
    },
  },
};

class MenuItem extends Component {
  render() {
    return (
      <div
        style={[
          styles.base,
          this.props.type === 'logo' ? styles.logo : {},
        ]}
      >
        <Link to={this.props.link}>
          {this.props.children}
        </Link>
      </div>
    );
  }
}

MenuItem.propTypes = {
  children: PropTypes.string,
  link: PropTypes.string,
  type: PropTypes.string,
};

export default Radium(MenuItem);
