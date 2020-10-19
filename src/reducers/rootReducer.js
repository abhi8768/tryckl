import { combineReducers } from 'redux';

import signup                from './auth/signup';
import login                 from './auth/login';
import logout                from './auth/logout';
import verifyotp             from './auth/verifyotp';
import resendotp             from './auth/resendotp';
import reviewmembership      from './auth/reviewmembership';
import notificationlist      from './notification/list';
import masterstate           from './masterdata/masterstate';
import masterbrokerage       from './masterdata/masterbrokerage';
import masterlicense         from './masterdata/masterlicense';
import dashboarddetail       from './dashboard/detail';
import brokerdetail          from './broker/details';
import profilepicture        from './broker/profilepicture';
import profileactiveview     from './broker/profileactiveview';
import profileupdate         from './broker/profileupdate';


import { USER_LOGGED_OUT } from '../actions/constants';

const allReducers = {
  signup,
  login,
  
  logout,
  notificationlist,
  masterstate,
  masterbrokerage,
  masterlicense,
  dashboarddetail,
  brokerdetail,
  profilepicture,
  profileactiveview,
  profileupdate
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
