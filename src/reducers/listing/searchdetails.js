import { CLEAR_OFFER_LIST, SEARCH_OFFER_LIST } from "../../actions/constants";

const initialState = {};
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SEARCH_OFFER_LIST:
      return {
        offerlist: [...action.offerlist.response.list],
        max_amount: action.offerlist.response.max_amount,
        min_amount: action.offerlist.response.min_amount,
        status: action.offerlist.status,
        message: action.offerlist.status_msg,
      };
      case CLEAR_OFFER_LIST:
        return {
          offerlist: [],
          max_amount: "",
          min_amount: "",
          status: "",
          message: "",
        };

    default:
      return state;
  }
};
