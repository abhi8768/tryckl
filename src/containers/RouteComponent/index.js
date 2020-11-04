import React, { Component } from 'react';
import { Route, Redirect , Switch } from 'react-router-dom';
import routes from "../../routes";
import pageTitles from "../../helpers/pageTitles";
import pathList from "../../helpers/pathList";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import { Preloader } from "../../components/common/Preloader";

class RouteComponent extends Component {
  render() {
    return (
      <main>
        <Preloader/>
        <Switch>
          <PublicRoute exact={true} path={pathList.home.path} title={pageTitles.login} component={routes.Auth}/>
          <PublicRoute exact={true} path={pathList.forgetuserid.path} title={pageTitles.forgetuserid} component={routes.ForgetUserid}/>
          <PublicRoute exact={true} path={pathList.forgetpassword.path} title={pageTitles.forgetpassword} component={routes.ForgetPassword}/>
          <PublicRoute exact={true} path={pathList.login.path} title={pageTitles.login} component={routes.Auth}/>
          <PrivateRoute exact={true} path={pathList.dashboard.path} title={pageTitles.dashboard} component={routes.Dashboard}/>
          <PrivateRoute exact={true} path={pathList.profile.path} title={pageTitles.profile} component={routes.Profile}/>
          <PrivateRoute exact={true} path={pathList.brokerprofile.path} title={pageTitles.profile} component={routes.Profile}/>
          <PrivateRoute exact={true} path={pathList.createlist.path} title={pageTitles.createlist} component={routes.Listing}/>
          <PrivateRoute exact={true} path={pathList.listpreview.path} title={pageTitles.listpreview} component={routes.Listing}/>
          
          <PublicRoute exact={true} path={pathList.resetpassword.path} title={pageTitles.resetpassword} component={routes.ResetPassword}/>
          <PublicRoute exact={true} path="/admin" title="admin - login" component={routes.AdminLogin}/>
          <Redirect exact={true} from="/login" to="/" />
          <Route exact={true} title={pageTitles.notFound} component={routes.NotFoundPage} /> 
        </Switch>
      </main>
      
    );
  }
}

export default RouteComponent;
