import Home from "../containers/web/Home";
import Auth from "../containers/web/Auth";
import Dashboard from "../containers/web/Dashboard";
import Profile from "../containers/web/Profile";
import ForgetPassword from "../containers/web/ForgetPassword";
import ResetPassword from "../containers/web/ResetPassword";
import ForgetUserid from "../containers/web/ForgetUserid";
import ContactUs from "../containers/web/ContactUs";
import Listing from "../containers/web/Listing";
import StaticPages from "../containers/web/StaticPages";
import ConnectAccount from "../containers/web/ConnectAccount";
import LandingPage from "../containers/web/LandingPage";
import SearchComponent from "../containers/web/Search";
import AdminLogin from "../containers/admin/Login";
import MyCardsComponent from "../containers/web/MyCards";
import components from "../components";
import PaymentCheckout from "../components/web/PaymentCheckout";
import TransactionHistory from "../containers/web/TransactionHistory";
import BankAdd from "../containers/web/BankAdd";

/* List of all container classes */
const allContainers = {
  Home: Home,
  Auth: Auth,
  Dashboard: Dashboard,
  ForgetPassword: ForgetPassword,
  ResetPassword: ResetPassword,
  ForgetUserid: ForgetUserid,
  Profile: Profile,
  AdminLogin: AdminLogin,
  Listing: Listing,
  Search: SearchComponent,
  Mycards: MyCardsComponent,
  StaticPages: StaticPages,
  ConnectAccount: ConnectAccount,
  ContactUs: ContactUs,
  PaymentCheckout: PaymentCheckout,
  TransactionHistory:TransactionHistory,
  BankAdd:BankAdd,
  LandingPage: LandingPage,
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