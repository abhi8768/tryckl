import { LOGOUT_USER } from '../../actions/constants';
const initialState = {
  logoutuser: {},
};
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGOUT_USER:
       
      return {
        logoutuser: action.logoutUser
      };
    default:
      return state;
  }
};
