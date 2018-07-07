import React from 'react';
import { Link } from 'react-router-dom';

import AuthenticationHeader from './AuthenticationHeader';
import { labels, paths, placeholder } from '../constants';

const Register = () => (
  <article className="authentication-container">
    <AuthenticationHeader />
    <section className="authentication-form-container">
      <form className="authentication-form form">
        <h1 className="title">
          {labels.signUp}
        </h1>
        <input type="text" placeholder={placeholder.name} required />
        <input type="email" placeholder={placeholder.email} required />
        <input type="password" placeholder={placeholder.password} required />
        <input type="submit" value={labels.signUp} className="button primary" />
      </form>
      <label className="small-font">
        {labels.mohallaDweller}
      </label>
      <Link to={paths.signInPath}>
        {labels.signIn}
      </Link>
    </section>
  </article>
);

export default Register;
