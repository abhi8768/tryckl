import Home from "../containers/web/Home";
import Login from "../containers/web/Login";
import Dashboard from "../containers/web/Dashboard";
import ForgetPassword from "../containers/web/ForgetPassword";

import AdminLogin from "../containers/admin/Login";

import components from "../components";

/* List of all container classes */
const allContainers = {
   
    Home      : Home,
    Login     : Login,
    Dashboard : Dashboard,
    ForgetPassword : ForgetPassword,
    AdminLogin : AdminLogin
  
};

/* List of all component classes */
const allComponents = {
    Auth         : components.Auth,
    NotFoundPage : components.NotFoundPage
}


const routePages = Object.assign(
    allContainers, 
    allComponents
);

export default routePages;