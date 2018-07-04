import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => (
  <div>
    <Link to='/'>Home</Link><br />
    <Link to='/signup'>Sign Up</Link><br />
    <Link to='/signin'>Sign In</Link><br />
    <br />
    In SignUp component
  </div>
);

export default SignUp;
