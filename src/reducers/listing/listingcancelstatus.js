import { STATUS_LISTING_CANCEL } from '../../actions/constants';

const initialState = {
    statuslistingcancel: [],
};
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case STATUS_LISTING_CANCEL:
      return {
        statuslistingcancel: action.statuslistingcancel,
        
      };
    default:
      return state;
  }
};