import React from 'react';
import Router from 'react-router';
import routes from './routes';
import $ from '../bower_components/jquery/dist/jquery.min';

window.$ = $;

Router.run(routes, function(Handler, state) {
  React.render(<Handler />, document.body)
});
