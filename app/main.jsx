import React from 'react';
import ReactDOM from 'react-dom';
import content from './data/content.js';
import Button from './components/Button.jsx';

function main() {
  ReactDOM.render(<Button kind="warning"></Button>,
                  document.getElementById('app'));
}

main();
