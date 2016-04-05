import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './Section.css';

const Section = (props) => (
  <section styleName="section">
    <div styleName="inner">
      <img styleName="img" src={props.src} />
      {props.children}
    </div>
  </section>
);

Section.propTypes = {
  children: PropTypes.node,
  src: PropTypes.string,
};

export default cssModules(Section, styles);
