import React from 'react';
import { Link } from 'react-router-dom';

import { labels, paths } from '../constants';

const Register = () => (
  <div>
    <Link to={paths.homePath}>
      {labels.home}
    </Link>
    <br />
    <Link to={paths.signUpPath}>
      {labels.signUp}
    </Link>
    <br />
    <Link to={paths.signInPath}>
      {labels.signIn}
    </Link>
    <br />
    <br />
    In SignUp component
  </div>
);

export default Register;
