import content from '../data/content';
import Panel from '../components/Panel.jsx';
import React, { Component } from 'react';
import { Gmaps, InfoWindow } from 'react-gmaps';
import variables from '../styles/variables';

const styles = {
  h1: {
    fontFamily: variables.font.families.cursive,
  },

  small: {
    display: 'block',
    fontFamily: variables.font.families.sansSerif,
    fontSize: variables.font.sizes.five,
    margin: '0.5rem',
  },
};

class Details extends Component {
  render() {
    const { location, party, time } = content.details;

    return (
      <Panel>
        <h1 style={styles.h1}>
          <small style={styles.small}>The Wedding of</small>
          {party.bride}
          <small style={styles.small}>to</small>
          {party.groom}
        </h1>

        <h3>
          {time.date}
          <small style={styles.small}>{time.ceremony}</small>
        </h3>

        <Gmaps
          width={'400px'}
          height={'300px'}
          lat={location.lat - 0.0001}
          lng={location.lng}
          zoom={18}
          loadingMessage={'Be happy'}
          draggable={false}
        >
          <InfoWindow
            lat={location.lat}
            lng={location.lng}
            content={`
              <div><strong>${location.name}</strong></div>
              <div>${location.address}</div>
              <div>${location.city}, ${location.state} ${location.zip}</div>
              <a
                href="https://www.google.com/maps/place/White+Horse+Inn/@36.454745,-118.887622,18z/data=!4m2!3m1!1s0x0:0xf8fba37891b5a627?hl=en-US"
                target="_blank"
              >
                <strong>Get Directions</strong>
              </a>
            `}
          />
        </Gmaps>
      </Panel>
    );
  }
}

export default Details;
