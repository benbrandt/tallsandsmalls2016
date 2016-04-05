import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './Parallax.css';

const Parallax = (props) => (
  <div
    styleName="parallax"
    style={{
      backgroundImage: `url(${window.innerWidth > 1000 ? props.bgImage.replace(/@0,5x/i, '') : props.bgImage})`,
    }}
  />
);

Parallax.propTypes = {
  bgImage: PropTypes.string,
};

export default cssModules(Parallax, styles);
