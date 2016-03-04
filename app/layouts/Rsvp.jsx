import React, { Component } from 'react';
import Button from '../components/Button.jsx';
import Input from '../components/Input.jsx';
import Panel from '../components/Panel.jsx';
import Radio from '../components/Radio.jsx';

const styles = {
  group: {
    display: 'flex',
  },
};

class Rsvp extends Component {
  render() {
    return (
      <Panel>
        <h3>RSVP</h3>
        <Input
          name="name"
          placeholder="Name"
          type="text"
        />
        <Input
          name="number"
          placeholder="Number of Guests"
          type="number"
        />
        <div style={styles.group}>
          Will you be attending?
          <Radio
            label="Yes!"
            name="attending"
            value="yes"
          />
          <Radio
            label="No :("
            name="attending"
            value="no"
          />
        </div>
        <Button />
      </Panel>
    );
  }
}

export default Rsvp;
