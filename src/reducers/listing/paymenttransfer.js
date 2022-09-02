import {
  DWOLLA_FUND_TRANSFER_SUCCESS,
  CLEAR_DWOLLA_FUND_TRANSFER_SUCCESS,
} from "../../actions/constants";

const initialState = {
  paymentdonesuccessflag: false,
};
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case DWOLLA_FUND_TRANSFER_SUCCESS:
      return {
        paymentdonesuccessflag: true,
      };
    case CLEAR_DWOLLA_FUND_TRANSFER_SUCCESS:
      return {
        paymentdonesuccessflag: false,
      };
    default:
      return state;
  }
};
