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
          <PublicRoute exact={true} path={pathList.home.path} title={pageTitles.home} component={routes.Home}/>
          <PublicRoute exact={true} path={pathList.login.path} title={pageTitles.login} component={routes.Auth}/>
          <PublicRoute exact={true} path={pathList.forgetpassword.path} title={pageTitles.forgetpassword} component={routes.ForgetPassword}/>
          <PrivateRoute exact={true} path={pathList.dashboard.path} title={pageTitles.dashboard} component={routes.Dashboard}/>
          
          <PublicRoute exact={true} path="/admin" title="admin - login" component={routes.AdminLogin}/>
          <Redirect exact={true} from="/home" to="/" />
          <Route exact={true} title={pageTitles.notFound} component={routes.NotFoundPage} /> 
        </Switch>
      </main>
      
    );
  }
}

export default RouteComponent;
