import content from '../data/content';
import Radium from 'radium';
import React, { Component } from 'react';
import variables from '../styles/variables';

const styles = {
  base: {
    display: 'flex',
    flex: '1',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
    textAlign: 'center',
  },

  h1: {
    color: '#fff',
    fontFamily: variables.font.families.cursive,

    '@media (min-width: 600px)': {
      fontSize: '6rem',
      transform: 'translateY(-40%)',
    },
  },

  small: {
    display: 'block',
    fontFamily: variables.font.families.sansSerif,
    fontSize: variables.font.sizes.five,
    fontWeight: '700',
    margin: '0.5rem',
    opacity: '.8',
    textTransform: 'uppercase',
  },
};

class Details extends Component {
  render() {
    const { party } = content.details;

    return (
      <div style={styles.base}>
        <h1 style={styles.h1}>
          <small style={styles.small}>The Wedding of</small>
          {party.bride}
          <small style={styles.small}>to</small>
          {party.groom}
        </h1>
      </div>
    );
  }
}

export default Radium(Details);
