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
    backgroundImage: 'url(assets/home.jpg)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    bottom: '0',
    content: '',
    filter: 'grayscale(1)',
    left: '0',
    opacity: '.8',
    position: 'absolute',
    right: '0',
    top: '0',
    WebkitFilter: 'grayscale(1)',
  },
};

class App extends Component {
  render() {
    return (
      <StyleRoot>
        <Style
          rules={{
            body: {
              background: variables.colors.black,
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
              fontWeight: 'normal',
              lineHeight: variables.font.headings.lineHeight,
              marginBottom: variables.font.headings.marginBottom,
              marginTop: '0',
            },

            h2: {
              fontSize: variables.font.sizes.two,
              lineHeight: variables.font.headings.lineHeight,
              marginBottom: variables.font.headings.marginBottom,
              marginTop: '0',
            },

            h3: {
              fontSize: variables.font.sizes.three,
              lineHeight: variables.font.headings.lineHeight,
              marginBottom: variables.font.headings.marginBottom,
              marginTop: '0',
            },

            h4: {
              fontSize: variables.font.sizes.four,
              lineHeight: variables.font.headings.lineHeight,
              marginBottom: variables.font.headings.marginBottom,
              marginTop: '0',
            },

            h5: {
              fontSize: variables.font.sizes.five,
              lineHeight: variables.font.headings.lineHeight,
              marginBottom: variables.font.headings.marginBottom,
              marginTop: '0',
            },

            h6: {
              fontSize: variables.font.sizes.six,
              lineHeight: variables.font.headings.lineHeight,
              marginBottom: variables.font.headings.marginBottom,
              marginTop: '0',
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
