import content from '../data/content.js';
import Menu from '../components/Menu.jsx';
import React, { Component, PropTypes } from 'react';
import { Style, StyleRoot } from 'radium';
import variables from '../styles/variables.js';

const styles = {
  base: {
    alignItems: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: '0 auto',
    minHeight: '100vh',
  },

  overlay: {
    background: variables.colors.black,
    bottom: '0',
    content: '',
    left: '0',
    opacity: '.25',
    position: 'absolute',
    right: '0',
    top: '0',
  },
};

class App extends Component {
  render() {
    return (
      <StyleRoot>
        <Style
          rules={{
            body: {
              background: 'url(assets/home.jpg) center no-repeat',
              backgroundSize: 'cover',
              color: variables.colors.gray,
              fontFamily: variables.font.families.sansSerif,
              fontSize: '1rem',
              lineHeight: '1.428571428571429',
            },

            a: {
              color: variables.colors.burgandy,
              cursor: 'pointer',
              textDecoration: 'none',

              ':hover': {
                color: variables.colors.black,
              },
            },

            hr: {
              margin: '20px 0',
            },

            img: {
              maxWidth: '100%',
            },

            h1: {
              fontSize: variables.font.sizes.one,
              lineHeight: variables.font.headings.lineHeight,
              marginBottom: variables.font.headings.marginBottom,
            },

            h2: {
              fontSize: variables.font.sizes.two,
              lineHeight: variables.font.headings.lineHeight,
              marginBottom: variables.font.headings.marginBottom,
            },

            h3: {
              fontSize: variables.font.sizes.three,
              lineHeight: variables.font.headings.lineHeight,
              marginBottom: variables.font.headings.marginBottom,
            },

            h4: {
              fontSize: variables.font.sizes.four,
              lineHeight: variables.font.headings.lineHeight,
              marginBottom: variables.font.headings.marginBottom,
            },

            h5: {
              fontSize: variables.font.sizes.five,
              lineHeight: variables.font.headings.lineHeight,
              marginBottom: variables.font.headings.marginBottom,
            },

            h6: {
              fontSize: variables.font.sizes.six,
              lineHeight: variables.font.headings.lineHeight,
              marginBottom: variables.font.headings.marginBottom,
            },

            p: {
              marginBottom: '1rem',
            },
          }}
        />
        <div style={styles.overlay}></div>
        <div style={styles.base}>
          <Menu data={content.menu} />

          {this.props.children}
        </div>
      </StyleRoot>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
};

export default App;
