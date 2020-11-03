import { MASTER_MLS } from '../../actions/constants';

const initialState = {
    mastermls: []
};
export default (state = initialState, action = {}) => {
switch (action.type) {
    case MASTER_MLS:
      return {
        mastermls    : action.mastermls.response,
        status       : action.mastermls.status,
        message      : action.mastermls.status_msg,
      };
    default:
      return state;
  }
};
