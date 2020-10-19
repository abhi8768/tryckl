import { FORGET_USERID } from '../../actions/constants';

const initialState = {
    forgetuserid: {},
};
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FORGET_USERID:
      return {
        status : action.forgetuserid.status,
        message: action.forgetuserid.status_msg,
      };
    default:
      return state;
  }
};
