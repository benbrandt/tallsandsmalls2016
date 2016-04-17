import React, { Component, PropTypes } from 'react';
import Header from '../Header/Header';
import Section from '../Section/Section';
import DataTable from '../DataTable/DataTable';
import Firebase from 'firebase';

class RsvpAdmin extends Component {
  constructor() {
    super();
    this.state = {
      adults: 0,
      children: 0,
      error: false,
      errorCode: '',
      guests: [],
    };
  }

  componentWillMount() {
    this.firebaseRef = new Firebase(this.props.db);
    this.firebaseRef.on(
      'value',
      (snapshot) => {
        const guests = [];
        let adults = 0;
        let children = 0;

        snapshot.forEach(data => {
          guests.push(data.val());

          if (data.val().attending) {
            adults += parseInt(data.val().adults, 10);
            children += parseInt(data.val().children, 10);
          }
        });

        this.setState({
          adults,
          children,
          guests,
        });
      },

      (errorObject) => this.setState({
        error: true,
        errorCode: errorObject.code,
      })
    );
  }

  componentWillUnmount() {
    this.firebaseRef.off();
  }

  render() {
    return (
      <div>
        <Header names={`TOTAL - Adults: ${this.state.adults} Children: ${this.state.children}`} />
        <Section src="">
          <p hidden={!this.state.error}>
            The database read failed: {this.state.errorCode}
          </p>
          <DataTable data={this.state.guests} />
        </Section>
      </div>
    );
  }
}

RsvpAdmin.propTypes = {
  db: PropTypes.string,
};

export default RsvpAdmin;
