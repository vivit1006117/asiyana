import React from 'react';
import { Link } from 'react-router-dom';

import { labels, paths } from '../constants';

const SignIn = () => (
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
    In SignIn component
  </div>
);

export default SignIn;
