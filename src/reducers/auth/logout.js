import { USER_LOGGED_OUT } from '../../actions/constants';
const initialState = {
    loggedUser: {},
};
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case USER_LOGGED_OUT:
       
      return {
        loggedUser: action.loggedoutUser
      };
    default:
      return state;
  }
};
