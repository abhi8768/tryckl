import {
  PAYMENT_METHOD_LIST,
  PAYMENT_REQUEST_SUCCESS,
  CLEAR_PAYMENT_REQUEST_SUCCESS,
} from "../../actions/constants";

const initialState = {
    paymentmethodlist: [],
};
export default (state = initialState, action = {}) => {
switch (action.type) {
  case PAYMENT_METHOD_LIST:
    return {
      paymentmethodlist: action.paymentmethodlist.response,
      status: action.paymentmethodlist.status,
      message: action.paymentmethodlist.status_msg,
    };
  default:
    return state;
}
};
