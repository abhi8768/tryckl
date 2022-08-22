import { SEARCH_OFFER_LIST } from "../../actions/constants";

const initialState = {
  
};
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SEARCH_OFFER_LIST:
      return {
        offerlist: [...action.offerlist.response.list],
        status: action.offerlist.status,
        message: action.offerlist.status_msg,
      };
    default:
      return state;
  }
};
