import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './Rsvp.css';

class Rsvp extends Component {
  constructor() {
    super();
    this.state = {
      attending: false,
      gotcha: '',
      guest: '',
      seats: 0,
      submitted: false,
    };
    this.handleAttending = this.handleAttending.bind(this);
    this.handleGotcha = this.handleGotcha.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
    this.handleSeats = this.handleSeats.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleAttending(e) {
    this.setState({ attending: e.target.checked });
  }

  handleGotcha(e) {
    this.setState({ gotcha: e.target.value });
  }

  handleGuest(e) {
    this.setState({ guest: e.target.value });
  }

  handleSeats(e) {
    this.setState({ seats: e.target.value });
  }

  submitForm(e) {
    e.preventDefault();

    const data = {
      _subject: 'New RSVP from TallsandSmalls2016.com',
      _cc: this.props.cc,
      guest: this.state.guest,
      seats: this.state.seats,
      attending: this.state.attending ? 'Attending: Yes' : 'Attending: No',
      _gotcha: this.state.gotcha,
    };

    const request = new XMLHttpRequest();
    request.open('POST', `https://formspree.io/${this.props.email}`, true);
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    request.send(JSON.stringify(data));

    this.setState({ submitted: true });
  }

  render() {
    return (
      <div>
        <h3>RSVP</h3>

        <p hidden={!this.state.submitted}>
          Thanks for letting us know!
        </p>

        <form
          hidden={this.state.submitted}
          id="rsvp"
          name="rsvp"
        >
          <input
            type="text"
            name="guest"
            required
            placeholder="Name of guest"
            onChange={this.handleGuest}
          />

          <input
            hidden={!this.state.attending}
            type="number"
            placeholder="Number of Seats"
            name="seats"
            onChange={this.handleSeats}
          />

          <input
            type="checkbox"
            id="attending"
            name="attending"
            defaultValue={this.state.attending}
            onChange={this.handleAttending}
          />
          <label htmlFor="attending">Attending</label>

          <input
            type="text"
            name="_gotcha"
            hidden
            onChange={this.handleGotcha}
          />

          <button
            type="submit"
            onClick={this.submitForm}
          >
              Submit
          </button>
        </form>
      </div>
    );
  }
}

Rsvp.propTypes = {
  cc: PropTypes.string,
  email: PropTypes.string.isRequired,
  name: PropTypes.string,
  seats: PropTypes.number,
  attending: PropTypes.bool,
};

export default cssModules(Rsvp, styles);
