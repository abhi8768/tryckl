import { MASTER_LICENSE } from '../../actions/constants';

const initialState = {
    masterlicense: []
};
export default (state = initialState, action = {}) => {
switch (action.type) {
    case MASTER_LICENSE:
      return {
        masterlicense: action.masterlicense.response,
        status       : action.masterlicense.status,
        message      : action.masterlicense.status_msg,
      };
    default:
      return state;
  }
};
