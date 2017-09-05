import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from 'Main';
import Weather from 'Weather';
import About from 'About';
import Examples from 'Examples';

// Load foundation
require('foundation-sites/dist/foundation.min.css')
$(document).foundation();

// app css
require('applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" components={About}/>
      <Route path="examples" components={Examples}/>
      <IndexRoute components={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
