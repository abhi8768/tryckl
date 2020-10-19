import { PROFILE_PICTURE } from '../../actions/constants';

const initialState = {
    profilepicture: []
};
export default (state = initialState, action = {}) => {
switch (action.type) {
    case PROFILE_PICTURE:
      return {
        profilepicture : action.profilepicture.response,
        status         : action.profilepicture.status,
        message        : action.profilepicture.status_msg,
      };
    default:
      return state;
  }
};
