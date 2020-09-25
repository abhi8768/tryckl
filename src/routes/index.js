import Home from "../containers/web/Home";
import Auth from "../containers/web/Auth";
import Dashboard from "../containers/web/Dashboard";
import ForgetPassword from "../containers/web/ForgetPassword";

import AdminLogin from "../containers/admin/Login";

import components from "../components";

/* List of all container classes */
const allContainers = {
   
    Home            : Home,
    Auth            : Auth,
    Dashboard       : Dashboard,
    ForgetPassword  : ForgetPassword,
    AdminLogin      : AdminLogin
  
};

/* List of all component classes */
const allComponents = {
    NotFoundPage : components.NotFoundPage
}


const routePages = Object.assign(
    allContainers, 
    allComponents
);

export default routePages;