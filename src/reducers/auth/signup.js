import { CREATE_ACCOUNT } from '../../actions/constants';
const initialState = {
  registeruser: {},
};
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case CREATE_ACCOUNT:
       
      return {
        registeruser: action.registeruser.response,
        status     : action.masterstate.status,
        message    : action.masterstate.status_msg,
      };
    default:
      return state;
  }
};
