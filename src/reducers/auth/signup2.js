import { CREATE_USER, REST_OTP } from '../../actions/constants';
let initialState = {
	user: ['Sohom Roy']
};
const getSignupDetails = (state = initialState, action = {}) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        newUser: action.newUser,
      };
    case REST_OTP:
      return {
        resend: action.resend,
      };
    default:
      return state;
  }
};

export default getSignupDetails; 