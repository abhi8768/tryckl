import React from 'react';
import PropTypes from 'prop-types';
import { Route , Redirect } from 'react-router-dom';
import { getJWTToken } from '../../../helpers/authHelper';
const PublicRoute = ({ component: Component, path , title }) => {
  document.title = title;
  return (
    <Route
      path={path}
      exact
      render={props => (getJWTToken() === null ? <Component {...props} /> : <Redirect to="/dashboard" />)}
    />
  );
}

PublicRoute.propTypes = {
  component: PropTypes.any,
  path: PropTypes.string,
  title: PropTypes.string,
};
export default PublicRoute;
