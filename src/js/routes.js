import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/Register';
import { paths } from './constants';

const Routes = () => (
  <Switch>
    <Route exact path={paths.homePath} component={App} />
    <Route path={paths.signInPath} component={SignIn} />
    <Route path={paths.signUpPath} component={SignUp} />
  </Switch>
);

export default Routes;
