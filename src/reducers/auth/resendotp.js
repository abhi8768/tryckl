import { RESEND_OTP } from '../../actions/constants';
const initialState = {
    resendOtp: {},
};
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case RESEND_OTP:
       
      return {
        resendOtp: action.resendOtp
      };
    default:
      return state;
  }
};
