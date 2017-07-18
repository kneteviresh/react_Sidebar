import React from 'react';
import { Route, IndexRedirect, Link } from 'react-router';
import App from './app/index.js';


export default (
    <Route path="/" component={App}>
      <IndexRedirect to="app"/>
      <Route path="app" component={App}/>
  </Route>
);
