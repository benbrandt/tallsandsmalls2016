import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../layouts/App.jsx';
import Details from '../layouts/Details.jsx';
import Home from '../layouts/Home.jsx';
import Rsvp from '../layouts/Rsvp.jsx';

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>

    <Route path="/details" component={Details} />
    <Route path="/rsvp" component={Rsvp} />
  </Route>
);
