import React from 'react';
import Main from './containers/main';
import Home from './containers/home';
import Product from './containers/product';
import { Route, IndexRoute } from 'react-router';

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
    <Route path="product" component={Product} />
  </Route>
);
