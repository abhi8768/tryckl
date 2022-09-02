import {
  PAYMENT_REQUEST_SUCCESS,
  CLEAR_PAYMENT_REQUEST_SUCCESS,
} from "../../actions/constants";

const initialState = {
  paymentrequestsuccessflag: false,
};
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case PAYMENT_REQUEST_SUCCESS:
      return {
        paymentrequestsuccessflag: true,
      };
    case CLEAR_PAYMENT_REQUEST_SUCCESS:
      return {
        paymentrequestsuccessflag: false,
      };
    default:
      return state;
  }
};
