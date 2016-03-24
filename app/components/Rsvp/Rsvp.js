import React, { Component, PropTypes } from 'react';

export default class Rsvp extends Component {
  componentWillMount() {
    this.setState.submitted = false;
  }

  submitForm(e) {
    e.preventDefault();
    this.setState.submitted = true;
    alert('Thanks for letting us know!');
  }

  render() {
    return (
      <div className="inner">
        <h3>
          <img src="assets/date.png" />
          RSVP
        </h3>

        <form
          hidden="submitted"
          id="rsvp"
          name="rsvp"
        >
          <input
            type="text"
            name="guest"
            required
            placeholder="Name of guest"
          />

          <input
            type="text"
            placeholder="Number of Seats"
            name="seats"
          />

          <input
            type="checkbox"
            id="attending"
            name="attending"
          />
          <label forInput="attending">Attending</label>

          <button
            type="submit"
            disabled={this.state.valid}
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
  name: PropTypes.string,
  seats: PropTypes.number,
  attending: PropTypes.boolean,
};
