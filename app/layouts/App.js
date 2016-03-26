import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from '../styles/common.css';
import content from '../data/content.js';
import Header from '../components/Header/Header';

const App = () => {
  const bride = content.details.party.bride.substr(0, content.details.party.bride.indexOf(' '));
  const groom = content.details.party.groom.substr(0, content.details.party.groom.indexOf(' '));
  const names = `${groom} & ${bride}`;

  return (
    <div>
      <Header
        names={names}
      />

    </div>
  );
};

App.propTypes = {

};

export default CSSModules(App, styles);
