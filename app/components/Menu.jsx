import MenuItem from './MenuItem.jsx';
import Radium from 'radium';
import React, { Component, PropTypes } from 'react';

const styles = {
  base: {
    background: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',

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
        {menuItems}
      </div>
    );
  }
}

Menu.propTypes = {
  data: PropTypes.array,
};

Menu = Radium(Menu);
export default Menu;
