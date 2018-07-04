import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/Register';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
  </Switch>
);

export default Routes;
