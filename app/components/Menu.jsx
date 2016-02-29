import MenuItem from './MenuItem.jsx';
import Radium from 'radium';
import React, { Component, PropTypes } from 'react';
import variables from '../styles/variables';

const styles = {
  base: {
    background: 'rgba(255, 255, 255, .8)',
    position: 'relative',
  },

  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    maxWidth: variables.misc.maxWidth,
    margin: '0 auto',
    width: '100%',

    '@media (min-width: 600px)': {
      flexFlow: 'row nowrap',
      justifyContent: 'center',
    },
  },
};

class Menu extends Component {
  render() {
    const menuItems = this.props.data.map(item =>
      <MenuItem key={item.id} type={item.type} link={item.link}>{item.name}</MenuItem>
    );

    return (
      <div
        style={styles.base}
      >
        <div style={styles.wrapper}>
          {menuItems}
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  data: PropTypes.array,
};

export default Radium(Menu);
