import { SIGNUP } from '../../actions/constants';
const initialState = {
  signupUser: {},
};
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SIGNUP:
       
      return {
        signupUser: action.signupUser
      };
    default:
      return state;
  }
};
