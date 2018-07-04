import React from 'react';
import { Link } from 'react-router-dom';

import constants from '../constants';

const App = () => (
  <div>
    <Link to="/">
      {constants.home}
    </Link>
    <br />
    <Link to="/signup">
      {constants.signUp}
    </Link>
    <br />
    <Link to="/signin">
      {constants.signIn}
    </Link>
    <br />
    <br />
    In App component
  </div>
);

export default App;
