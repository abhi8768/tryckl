import { RESET_PASSWORD } from '../../actions/constants';

const initialState = {
    resetpassword: {},
};
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case RESET_PASSWORD:
      return {
        status : action.resetpassword.status,
        message: action.resetpassword.status_msg,
      };
    default:
      return state;
  }
};
