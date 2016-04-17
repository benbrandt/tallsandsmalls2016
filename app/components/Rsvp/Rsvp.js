import React, { Component, PropTypes } from 'react';
import cssModules from 'react-css-modules';
import styles from './Rsvp.css';
import Firebase from 'firebase';

class Rsvp extends Component {
  constructor() {
    super();
    this.state = {
      adults: 0,
      attending: false,
      children: 0,
      error: false,
      gotcha: '',
      guest: '',
      submitted: false,
    };
    this.handleAdults = this.handleAdults.bind(this);
    this.handleAttending = this.handleAttending.bind(this);
    this.handleChildren = this.handleChildren.bind(this);
    this.handleGotcha = this.handleGotcha.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentWillMount() {
    this.firebaseRef = new Firebase(this.props.db);
  }

  componentWillUnmount() {
    this.firebaseRef.off();
  }

  handleAdults(e) {
    this.setState({ adults: e.target.value });
  }

  handleAttending(e) {
    this.setState({ attending: e.target.checked });
  }

  handleChildren(e) {
    this.setState({ children: e.target.value });
  }

  handleGotcha(e) {
    this.setState({ gotcha: e.target.value });
  }

  handleGuest(e) {
    this.setState({ guest: e.target.value });
  }

  submitForm(e) {
    e.preventDefault();

    if (this.state.gotcha === '') {
      this.firebaseRef.push({
        guest: this.state.guest,
        adults: this.state.adults,
        children: this.state.children,
        attending: this.state.attending,
      }, (error) => {
        if (error) {
          this.setState({ error: true });
        } else {
          this.setState({ submitted: true });
        }
      });
    }
  }

  render() {
    return (
      <div>
        <h3>RSVP</h3>

        <p hidden={!this.state.submitted}>
          Thanks {this.state.guest} for letting us know!
        </p>

        <p hidden={!this.state.error}>
          Sorry we couldn't save your RSVP. Please try again later.
        </p>

        <form
          hidden={this.state.submitted}
          id="rsvp"
          name="rsvp"
        >
          <label>Name of Guest
            <input
              type="text"
              name="guest"
              required
              placeholder="Name of guest"
              onChange={this.handleGuest}
            />
          </label>

          <label hidden={!this.state.attending}>Number of Adults
            <input
              type="text"
              placeholder="Number of Adults"
              name="adults"
              onChange={this.handleAdults}
            />
          </label>

          <label hidden={!this.state.attending}>Number of Children (12 or under)
            <input
              type="text"
              placeholder="Number of Children"
              name="children"
              onChange={this.handleChildren}
            />
          </label>

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
  db: PropTypes.string,
};

export default cssModules(Rsvp, styles);
