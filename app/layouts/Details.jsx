import content from '../data/content';
import Panel from '../components/Panel.jsx';
import React, { Component } from 'react';

class Details extends Component {
  render() {
    return (
      <Panel>
        {content.details.date}
      </Panel>
    );
  }
}

export default Details;
