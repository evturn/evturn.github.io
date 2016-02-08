import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'containers/App';
import Home from 'containers/Home';
import Work from'containers/Work';
import About from 'containers/About';
import Contact from 'containers/Contact';

export default (
  <Route component={App} path='/' >
    <IndexRoute component={Home} name='home' />
    <Route component={About} path='about' name='about' />
    <Route component={Contact} path='contact' name='contact' />
    <Route component={Work} path='work(/:id)' name='work' />
  </Route>
);