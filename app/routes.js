import React from 'react';
import Main from './containers/main';
import Home from './containers/home';
import ClientForm from './components/forms/clients';
import { Route, IndexRoute } from 'react-router';

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
    <Route path="client/add" component={ClientForm} />
  </Route>
);
