import { CREATE_ACCOUNT } from '../../actions/constants';
const initialState = {
  registeruser: {},
};
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CREATE_ACCOUNT:
       
      return {
        registeruser: action.registeruser.response,
        status     : action.registeruser.status,
        message    : action.registeruser.status_msg,
      };
    default:
      return state;
  }
};
