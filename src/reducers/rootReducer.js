import { combineReducers } from 'redux';

import signup                from './auth/signup';
import login                 from './auth/login';
import logout                from './auth/logout';
import forgetpassword        from './auth/forgetpassword';
import forgetuserid          from './auth/forgetuserid';
import resetpassword         from './auth/resetpassword';
import verifyotp             from './auth/verifyotp';
import resendotp             from './auth/resendotp';
import reviewmembership      from './auth/reviewmembership';
import notificationlist      from './notification/list';
import masterstate           from './masterdata/masterstate';
import masterbrokerage       from './masterdata/masterbrokerage';
import masterlicense         from './masterdata/masterlicense';
import mastermls             from './masterdata/mastermls';
import dashboarddetail       from './dashboard/detail';
import brokerdetail          from './broker/details';
import profilepicture        from './broker/profilepicture';
import profileactiveview     from './broker/profileactiveview';
import profileupdate         from './broker/profileupdate';
import listingactiveview     from './listing/listingactiveview';
import mylisting             from './listing/mylisting';
import listingstorage        from './listing/listingstorage';
import listingcreate         from './listing/listingcreate';
import listingdetail         from './listing/listingdetail';
import contactus             from './contactus/contactus';

import { USER_LOGGED_OUT } from '../actions/constants';

const allReducers = {
  signup,
  login,
  verifyotp,
  resendotp,
  logout,
  forgetpassword,
  forgetuserid,
  resetpassword,
  notificationlist,
  masterstate,
  masterbrokerage,
  masterlicense,
  dashboarddetail,
  brokerdetail,
  profilepicture,
  profileactiveview,
  profileupdate,
  mastermls,
  listingactiveview,
  mylisting,
  listingstorage,
  listingcreate,
  listingdetail,
  contactus
};

const appReducer = combineReducers(allReducers);

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGGED_OUT') {
    Object.keys(allReducers).map(el => {
      state[el] = undefined;
      return false;
    });
  }
  return appReducer(state, action);
};

export default rootReducer;
