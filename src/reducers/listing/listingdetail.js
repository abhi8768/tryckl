import {
  DETAIL_LISTING,
  ACCEPT_LISTING_SUCCESS,
  CLEAR_ACCEPT_LISTING_SUCCESS,
  RETURN_LISTING_SUCCESS,
  CLEAR_RETURN_LISTING_SUCCESS,
} from "../../actions/constants";

const initialState = {
    detaillisting: [],
    acceptflag:false,
    returnflag:false,
};
export default (state = initialState, action = {}) => {
switch (action.type) {
  case DETAIL_LISTING:
    return {
      detaillisting: action.detaillisting.response,
    };
  case ACCEPT_LISTING_SUCCESS:
    return {
      acceptflag: true,
    };
  case CLEAR_ACCEPT_LISTING_SUCCESS:
    return {
      acceptflag: false,
    };
  case RETURN_LISTING_SUCCESS:
    return {
      returnflag: true,
    };
  case CLEAR_RETURN_LISTING_SUCCESS:
    return {
      returnflag: false,
    };
  default:
    return state;
}
}; 
