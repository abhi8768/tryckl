import { CONTACT_US } from '../../actions/constants';

const initialState = {
    contactus: []
};
export default (state = initialState, action = {}) => {
switch (action.type) {
    case CONTACT_US:
      return {
        contactus : action.contactus.response,
        status    : action.contactus.status,
        message   : action.contactus.status_msg,
      };
    default:
      return state;
  }
};
