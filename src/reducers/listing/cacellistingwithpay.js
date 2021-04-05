import { WITHPAY_LISTING_CANCEL } from '../../actions/constants';

const initialState = {
    withpaycancellisting: [],
};
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case WITHPAY_LISTING_CANCEL:
      return {
        withpaycancellisting: action.withpaycancellisting.response,
      };
    default:
      return state;
  }
};