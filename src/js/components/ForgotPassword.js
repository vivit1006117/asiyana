import React from 'react';
import { Link } from 'react-router-dom';

import AuthenticationHeader from './AuthenticationHeader';
import { labels, placeholder, paths } from '../constants';

const ForgotPassword = () => (
  <article className="authentication-container">
    <AuthenticationHeader />
    <section className="authentication-form-container">
      <h1 className="title">
        {labels.forgotPassword}
      </h1>
      <form className="authentication-form form">
        <input type="email" placeholder={placeholder.email} required />
        <input type="tel" placeholder={placeholder.telephone} required />
        <input type="submit" value={labels.retrievePassword} className="button primary" />
      </form>
      <label className="small-font">
        {labels.backToLogin}
      </label>
      <Link to={paths.signInPath}>
        {labels.signIn}
      </Link>
    </section>
  </article>
);

export default ForgotPassword;
