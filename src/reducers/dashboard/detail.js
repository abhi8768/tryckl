import { DASHBOARD_LIST } from '../../actions/constants';

const initialState = {
    dashboard: []
};
export default (state = initialState, action = {}) => {
switch (action.type) {
    case DASHBOARD_LIST:
      return {
        dashboard : action.dashboard.response,
        status    : action.dashboard.status,
        message   : action.dashboard.status_msg,
      };
    default:
      return state;
  }
};
