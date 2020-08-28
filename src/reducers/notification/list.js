import { NOTIFICATION_LIST } from '../../actions/constants';

const initialState = {
    notification: []
};
export default (state = initialState, action = {}) => {
switch (action.type) {
    case NOTIFICATION_LIST:
      return {
        notification: action.notification,
      };
    default:
      return state;
  }
};
