import React from 'react';
import { Route } from 'react-router';
import App from '../layouts/App.jsx';
import Details from '../layouts/Details.jsx';
import Rsvp from '../layouts/Rsvp.jsx';

module.exports = (
  <Route path="/" component={App}>
    <Route path="/details" component={Details} />
    <Route path="/rsvp" component={Rsvp} />
  </Route>
);
