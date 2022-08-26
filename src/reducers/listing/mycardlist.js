import { SET_MYCARD_LIST } from "../../actions/constants";

const initialState = {};
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_MYCARD_LIST:
      return {
        cardlist: [...action.cardlist.response.list]
      };
    default:
      return state;
  }
};
