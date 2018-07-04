import React, { Component } from 'react'; 
import ReactDOM from 'react-dom';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

import '../styles/style.scss';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
      </Switch>
    );
  }
}

ReactDOM.render(<BrowserRouter><Main /></BrowserRouter>, document.getElementById('main'));
