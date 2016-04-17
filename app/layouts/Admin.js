import 'babel-polyfill';
import React, { Component } from 'react';
import content from '../data/content.js';
import Login from '../components/Login/Login';

class Admin extends Component {
  constructor() {
    super();
    this.state = {
      auth: false,
      authData: {},
    };
    this.handleAuth = this.handleAuth.bind(this);
  }

  handleAuth(authData) {
    this.setState({ authData });

    if (authData) {
      this.setState({ auth: true });
    }
  }

  render() {
    return (
        <Login auth={this.handleAuth} db={content.firebase.url} />
    );
  }
}

export default Admin;
