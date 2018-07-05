import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { labels, paths } from '../constants';

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
      In App component
    </div>
  );
};

App.propTypes = {
  language: PropTypes.string,
};

export default connect(mapStateToProps)(App);
