import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/Register';

import '../styles/style.scss';

const Main = () => (
  <Switch>
    <Route exact path="/" component={App} />
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
  </Switch>
);
/* eslint no-undef: 2 */
ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById('main'),
);
