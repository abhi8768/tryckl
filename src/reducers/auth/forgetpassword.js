import { FORGET_PASSWORD } from '../../actions/constants';

const initialState = {
    forgetpassword: {},
};
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FORGET_PASSWORD:
      return {
        status : action.forgetpassword.status,
        message: action.forgetpassword.status_msg,
      };
    default:
      return state;
  }
};
