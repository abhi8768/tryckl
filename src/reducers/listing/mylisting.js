import { MY_LISTING } from '../../actions/constants';

const initialState = {
    mylisting: []
};
export default (state = initialState, action = {}) => {
switch (action.type) {
    case MY_LISTING:
      return {
        mylisting : action.mylisting.response,
        status    : action.mylisting.status,
        message   : action.mylisting.status_msg,
      };
    default:
      return state;
  }
};
