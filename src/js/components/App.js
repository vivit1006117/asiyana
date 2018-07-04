import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import constants from '../constants';

function mapStateToProps(state) {
  return {
    language: state.app.language,
  };
}

const App = (props) => {
  const { language } = props;
  return (
    <div>
      { language }
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
    In App component
    </div>
  );
};

App.propTypes = {
  language: PropTypes.string,
};

export default connect(mapStateToProps)(App);
