import React from 'react';
import { Link } from 'react-router-dom';

const App = () => (
  <div>
    <Link to='/'>Home</Link><br />
    <Link to='/signup'>Sign Up</Link><br />
    <Link to='/signin'>Sign In</Link><br />
    <br />
    In App component
  </div>
);

export default App;
