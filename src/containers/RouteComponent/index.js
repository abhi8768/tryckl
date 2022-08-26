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
        <Preloader />
        <Switch>
          {/*  <PublicRoute exact={true} path={pathList.home.path} title={pageTitles.login} component={routes.Auth}/> */}
          <PublicRoute
            exact={true}
            path={pathList.home.path}
            title={pageTitles.home}
            component={routes.LandingPage}
          />
          <PublicRoute
            exact={true}
            path={pathList.howitworks.path}
            title={pageTitles.howitworks}
            component={routes.LandingPage}
          />
          <PublicRoute
            exact={true}
            path={pathList.login.path}
            title={pageTitles.login}
            component={routes.Auth}
          />
          <PublicRoute
            exact={true}
            path={pathList.forgetuserid.path}
            title={pageTitles.forgetuserid}
            component={routes.ForgetUserid}
          />
          <PublicRoute
            exact={true}
            path={pathList.forgetpassword.path}
            title={pageTitles.forgetpassword}
            component={routes.ForgetPassword}
          />
          <PublicRoute
            exact={true}
            path="/contact-us"
            title="Contact Us"
            component={routes.ContactUs}
          />

          <PublicRoute
            exact={true}
            path={pathList.login.path}
            title={pageTitles.login}
            component={routes.Auth}
          />
          <PrivateRoute
            exact={true}
            path={pathList.dashboard.path}
            title={pageTitles.dashboard}
            component={routes.Dashboard}
          />
          <PrivateRoute
            exact={true}
            path={pathList.search.path}
            title={pageTitles.search}
            component={routes.Search}
          />
          <PrivateRoute
            exact={true}
            path={pathList.mycards.path}
            title={pageTitles.mycards}
            component={routes.Mycards}
          />
          <PrivateRoute
            exact={true}
            path={pathList.dashboard_success.path}
            title={pageTitles.dashboard}
            component={routes.Dashboard}
          />
          <PrivateRoute
            exact={true}
            path={pathList.profile.path}
            title={pageTitles.profile}
            component={routes.Profile}
          />
          <PrivateRoute
            exact={true}
            path={pathList.brokerprofile.path}
            title={pageTitles.profile}
            component={routes.Profile}
          />
          <PrivateRoute
            exact={true}
            path={pathList.createlist.path}
            title={pageTitles.createlist}
            component={routes.Listing}
          />
          <PrivateRoute
            exact={true}
            path={pathList.listpreview.path}
            title={pageTitles.listpreview}
            component={routes.Listing}
          />
          <PrivateRoute
            exact={true}
            path={pathList.mylisting.path}
            title={pageTitles.mylisting}
            component={routes.Listing}
          />
          <PrivateRoute
            exact={true}
            path={pathList.detaillisting.path}
            title={pageTitles.detaillisting}
            component={routes.Listing}
          />
          <PrivateRoute
            exact={true}
            path="/connect-account"
            title="Connect Account"
            component={routes.ConnectAccount}
          />

          <Route
            exact={true}
            path="/about-us"
            title="About Us"
            component={routes.StaticPages}
          />
          <Route
            exact={true}
            path="/payment-policy"
            title="Payment Policy"
            component={routes.StaticPages}
          />
          <Route
            exact={true}
            path="/privacy-policy"
            title="Privacy Policy"
            component={routes.StaticPages}
          />
          <Route
            exact={true}
            path="/terms-n-condition"
            title="Terms And Condition"
            component={routes.StaticPages}
          />

          {/*  <PrivateRoute exact={true} path="/aboutus" title="About Us" component={routes.StaticPages}/>
          <PrivateRoute exact={true} path="/paymentpolicy" title="Payment Policy" component={routes.StaticPages}/>
          <PrivateRoute exact={true} path="/privacypolicy" title="Privacy Policy" component={routes.StaticPages}/>
          <PrivateRoute exact={true} path="/termsncondition" title="Terms And Condition" component={routes.StaticPages}/>
          
           */}

          <PublicRoute
            exact={true}
            path={pathList.resetpassword.path}
            title={pageTitles.resetpassword}
            component={routes.ResetPassword}
          />
          {/* <PublicRoute exact={true} path="/admin" title="admin - login" component={routes.AdminLogin}/> */}
          {/*  <Redirect exact={true} from="/agent-login" to="/" /> */}
          <Route
            exact={true}
            title={pageTitles.notFound}
            component={routes.NotFoundPage}
          />
        </Switch>
      </main>
    );
  }
}

export default RouteComponent;
