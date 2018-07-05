import React from 'react';

import { labels } from '../constants';

const SignIn = () => (
  <article className="signin-container">
    <section className="logo-container">
      {labels.bannerText}
    </section>
    <section className="authentication-form">
      <p>
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus doloremque alias, sequi, voluptate reiciendis debitis tempore dolores vero ipsam velit a, minima quibusdam. Eligendi non, incidunt optio blanditiis dolorem sit?
      </p>
      <form>
        <input type="text" />
      </form>
    </section>
  </article>
);

export default SignIn;
