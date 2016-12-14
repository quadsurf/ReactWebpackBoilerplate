

import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Main from 'Main';
import Home from 'Home';
import Page2 from 'Page2';
import Page3 from 'Page3';

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
