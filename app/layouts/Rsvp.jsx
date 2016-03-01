import content from '../data/content';
import Panel from '../components/Panel.jsx';
import React, { Component } from 'react';

class Rsvp extends Component {
  render() {
    return (
      <Panel>
        {content.contact.email}
      </Panel>
    );
  }
}

export default Rsvp;
