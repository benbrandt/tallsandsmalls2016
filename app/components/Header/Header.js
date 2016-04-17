import React, { PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './Header.css';

const Header = (props) => (
  <header styleName="header">
    <div styleName="inner">
      <div styleName="heading-wrapper">
        <h1 styleName="heading">{props.names}</h1>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  names: PropTypes.string,
};

export default cssModules(Header, styles);
