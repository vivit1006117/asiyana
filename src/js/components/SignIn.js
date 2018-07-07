import React from 'react';
import { Link } from 'react-router-dom';

import AuthenticationHeader from './AuthenticationHeader';
import { labels, placeholder, paths } from '../constants';

const SignIn = () => (
  <article className="authentication-container">
    <AuthenticationHeader />
    <section className="authentication-form-container">
      <form className="authentication-form form">
        <h1 className="title">
          {labels.signIn}
        </h1>
        <input type="email" placeholder={placeholder.email} required />
        <input type="password" placeholder={placeholder.password} required />
        <input type="submit" value={labels.signIn} className="button primary" />
      </form>
      <Link to={paths.forgotPasswordPath} className="bottom-spacer">
        {labels.forgotPassword}
      </Link>
      <label className="small-font">
        {labels.newToMohalla}
      </label>
      <Link to={paths.signUpPath}>
        {labels.signUp}
      </Link>
    </section>
  </article>
);

export default SignIn;
