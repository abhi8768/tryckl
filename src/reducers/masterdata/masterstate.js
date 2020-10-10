import { MASTER_STATE } from '../../actions/constants';

const initialState = {
    masterstate: []
};
export default (state = initialState, action = {}) => {
switch (action.type) {
    case MASTER_STATE:
      return {
        masterstate: action.masterstate.response,
        status     : action.masterstate.status,
        message    : action.masterstate.status_msg,
      };
    default:
      return state;
  }
};
