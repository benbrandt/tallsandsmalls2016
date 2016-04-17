import React, { Component, PropTypes } from 'react';
import Firebase from 'firebase';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      error: false,
      gotcha: '',
      password: '',
      submitted: false,
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handleGotcha = this.handleGotcha.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentWillMount() {
    this.firebaseRef = new Firebase(this.props.db);
  }

  componentWillUnmount() {
    this.firebaseRef.off();
  }

  handleEmail(e) {
    this.setState({ email: e.target.value });
  }

  handleGotcha(e) {
    this.setState({ gotcha: e.target.value });
  }

  handlePassword(e) {
    this.setState({ password: e.target.value });
  }

  submitForm(e) {
    e.preventDefault();

    if (this.state.gotcha === '') {
      this.firebaseRef.authWithPassword({
        email: this.state.email,
        password: this.state.password,
      }, (error, authData) => {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
        }
      });
    }
  }

  render() {
    return (
      <div>
        <h3>RSVP Admin</h3>

        <p hidden={!this.state.error}>
          Error logging in. Please try again later.
        </p>

        <form
          hidden={this.state.submitted}
          id="rsvp"
          name="rsvp"
        >
          <label>Email
            <input
              type="text"
              name="email"
              required
              placeholder="user@email.com"
              onChange={this.handleEmail}
            />
          </label>

          <label>Password
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={this.handlePassword}
            />
          </label>

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

Login.propTypes = {
  db: PropTypes.string,
};

export default Login;
