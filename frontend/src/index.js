import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './App.js';
import Login from './Login.js';
import Logout from './Logout.js';
import * as auth from './auth.js';
import './index.css';

injectTapEventPlugin();

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact={true} path='/' component={App} />
      <Route path='/login/' component={Login} />
      <Route path='/logout/' component={Logout} />
    </Switch>
  </Router>,
  document.getElementById('main')
);
