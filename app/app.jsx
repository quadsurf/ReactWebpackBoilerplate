

import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Main from 'Main';
import Home from 'Home';
import Page2 from 'Page2';
import Page3 from 'Page3';

require('style!css!semantic-ui-css/semantic.min.css');
require('style!css!sass!appCSS');
// require('style!css!foundation-sites/dist/foundation.min.css');
// $(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="home" component={Home} />
      <Route path="page2" component={Page2} />
      <Route path="page3" component={Page3} />
    </Route>
  </Router>,
  document.getElementById('renderApp')
);
