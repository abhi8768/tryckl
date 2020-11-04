import { RESEND_OTP } from '../../actions/constants';
const initialState = {
    data: {},
};
export default (state = initialState, action = {}) => {
  
  switch (action.type) {
    case RESEND_OTP:
      return {
        resendOtp   : action.data.response,
        status      : action.data.status,
        message     : action.data.status_msg,
      };
      
    default:
      return state;
  }
};
