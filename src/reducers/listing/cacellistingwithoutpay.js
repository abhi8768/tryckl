import { NOPAY_LISTING_CANCEL } from '../../actions/constants';

const initialState = {
    nopaycancellisting: [],
};
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case NOPAY_LISTING_CANCEL:
      return {
        nopaycancellisting: action.nopaycancellisting.response,
      };
    default:
      return state;
  }
};