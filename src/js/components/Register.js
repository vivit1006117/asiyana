import React from 'react';
import { Link } from 'react-router-dom';

import constants from '../constants';

const Register = () => (
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
    In SignUp component
  </div>
);

export default Register;
