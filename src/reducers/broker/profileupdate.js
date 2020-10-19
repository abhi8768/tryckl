import { PROFILE_UPDATE } from '../../actions/constants';

const initialState = {
    profileupdate: []
};
export default (state = initialState, action = {}) => {
switch (action.type) {
    case PROFILE_UPDATE:
      return {
        profileupdate : action.profileupdate.response,
        status        : action.profileupdate.status,
        message       : action.profileupdate.status_msg,
      };
    default:
      return state;
  }
};
