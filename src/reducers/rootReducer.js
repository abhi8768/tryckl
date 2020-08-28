import { combineReducers } from 'redux';

import signup                from './auth/signup';
import login                 from './auth/login';
import logout                from './auth/logout';
import verifyotp             from './auth/verifyotp';
import resendotp             from './auth/resendotp';
import reviewmembership      from './auth/reviewmembership';
import notificationlist      from './notification/list';



import { USER_LOGGED_OUT } from '../actions/constants';

const allReducers = {
  signup,
  login,
  
  logout,
  notificationlist
  
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
