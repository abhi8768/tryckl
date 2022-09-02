import { SET_COMPLETE_CARD_DETAILS } from "../../actions/constants";

const initialState = {
  completecarddetaillisting: null,
};
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_COMPLETE_CARD_DETAILS:
      return {
        completecarddetaillisting: action.carddetails,
      };

    default:
      return state;
  }
};
