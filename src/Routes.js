import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Router } from 'react-router';
import history from './utils/history';
import LoginComponent from './components/LoginComponent';
import homePageComponent from './components/homePageComponent';

function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/login" component={LoginComponent} />
        <Route exact path="/home" component={homePageComponent} />
      </Switch>
    </Router>
  );
}

export default Routes;