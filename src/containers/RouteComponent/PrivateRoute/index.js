import React from 'react';
import PropTypes from 'prop-types';
import { Route ,Redirect } from 'react-router-dom';
import { getJWTToken } from '../../../helpers/authHelper';
import pageTitles from "../../../helpers/pageTitles";

const PrivateRoute = ({ component: Component, path , title }) => {
  document.title = (getJWTToken() !== null ? title : pageTitles.login);
  return (
    <Route
      path={path}
      render={props => ((getJWTToken() !== null)  ? <Component {...props} /> : <Redirect to="/agent-login" />)}
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.any,
  path: PropTypes.string,
  title: PropTypes.string,
};
export default PrivateRoute;
