import React from 'react';
import { DefaultRoute, Route } from 'react-router';

import App from './components/App';
import Product from './components/Product/Product';

export default (
  <Route name="app" handler={App} path="/">
    <DefaultRoute name="all" handler={Product} category="all" />
    <Route path="/category/:category" handler={Product}  />
  </Route>
);
