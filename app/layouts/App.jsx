import content from '../data/content';
import Menu from '../components/Menu.jsx';
import React, { Component } from 'react';
import { Style, StyleRoot } from 'radium';
import variables from '../styles/variables.js';

class App extends Component {
  render() {
    return (
      <StyleRoot>
        <Style
          rules={{
            body: {
              background: variables.colors.champagne,
              color: variables.colors.gray,
              fontFamily: variables.font.families.cursive,
            },
          }}
        />
        <Menu data={content.menu} />
      </StyleRoot>
    );
  }
}

export default App;
