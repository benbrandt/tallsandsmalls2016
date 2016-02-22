import content from '../data/content';
import Menu from '../components/Menu.jsx';
import React, { Component } from 'react';
import { StyleRoot } from 'radium';

class App extends Component {
  render() {
    return (
      <StyleRoot>
        <Menu data={content.menu} />
      </StyleRoot>
    );
  }
}

export default App;
