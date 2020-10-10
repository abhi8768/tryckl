import { MASTER_BROKERAGE } from '../../actions/constants';

const initialState = {
    masterbrokerage: []
};
export default (state = initialState, action = {}) => {
switch (action.type) {
    case MASTER_BROKERAGE:
      return {
        masterbrokerage: action.masterbrokerage.response,
        status         : action.masterbrokerage.status,
        message        : action.masterbrokerage.status_msg,
      };
    default:
      return state;
  }
};
