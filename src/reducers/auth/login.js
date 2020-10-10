import { SET_CURRENT_USER } from '../../actions/constants';
import { getUserFromSession } from '../../helpers/authHelper';

const initialState = {
  user: getUserFromSession(),
};
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        user   : action.user.response,
        status : action.user.status,
        message: action.user.status_msg,
      };
    default:
      return state;
  }
};
