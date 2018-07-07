import React from 'react';
import { labels } from '../constants';

const AuthenticationHeader = () => (
  <section className="logo-container">
    {labels.bannerText}
    <i className="icon-home_logo">
      <span className="path1" />
      <span className="path2" />
    </i>
  </section>
);

export default AuthenticationHeader;
