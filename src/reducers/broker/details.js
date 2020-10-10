import { PROFILE_DETAIL } from '../../actions/constants';

const initialState = {
    profiledetail: []
};
export default (state = initialState, action = {}) => {
switch (action.type) {
    case PROFILE_DETAIL:
      return {
        profiledetail : action.profiledetail.response,
        status        : action.profiledetail.status,
        message       : action.profiledetail.status_msg,
      };
    default:
      return state;
  }
};
