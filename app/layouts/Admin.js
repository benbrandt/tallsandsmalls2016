import 'babel-polyfill';
import React from 'react';
import content from '../data/content.js';
import Login from '../components/Login/Login';
import Section from '../components/Section/Section';

const Admin = () => (
  <div>
    <Section src="">
      <Login db={content.firebase.url} />
    </Section>
  </div>
);
export default Admin;
