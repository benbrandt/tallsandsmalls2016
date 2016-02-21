import Radium from 'radium';
import React, { Component, PropTypes } from 'react';

const styles = {
  base: {
    color: '#333',
    flex: '1',
    fontWeight: 'bold',
    margin: 'auto',
    padding: '.85rem 1rem',
    textAlign: 'center',
    textDecoration: 'none',
    textTransform: 'uppercase',

    ':hover': {
      borderBottom: '2px solid #2199e8',
      color: '#2199e8',
    },
  },
};

class MenuItem extends Component {
  render() {
    return (
      <a
        href={this.props.link}
        style={styles.base}
      >
        {this.props.children}
      </a>
    );
  }
}

MenuItem.propTypes = {
  children: PropTypes.string,
  link: PropTypes.string,
};

MenuItem = Radium(MenuItem);
export default MenuItem;
