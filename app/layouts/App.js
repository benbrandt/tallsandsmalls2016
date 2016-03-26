import React from 'react';
import content from '../data/content.js';
import Header from '../components/Header/Header';
import Parallax from '../components/Parallax/Parallax';

const App = () => {
  const bride = content.details.party.bride.substr(0, content.details.party.bride.indexOf(' '));
  const groom = content.details.party.groom.substr(0, content.details.party.groom.indexOf(' '));
  const names = `${groom} & ${bride}`;

  return (
    <div>
      <Header
        names={names}
      />
      <Parallax bgImage="assets/home.jpg" />

    </div>
  );
};

export default App;
