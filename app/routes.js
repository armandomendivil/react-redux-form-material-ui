import React from 'react';
import { Home } from './containers';
import Main from './components/main/Main';
import { Route, IndexRoute } from 'react-router';

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
  </Route>
);
