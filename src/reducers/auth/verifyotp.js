import { VERIFIED_OTP } from '../../actions/constants';
const initialState = {
  verifyOtp: {},
};
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case VERIFIED_OTP:
       
      return {
        verifyOtp: action.verifyOtp
      };
    default:
      return state;
  }
};
