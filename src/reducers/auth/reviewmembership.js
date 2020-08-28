import { REVIEW_MEMBERSHIP } from '../../actions/constants';
const initialState = {
    reviewMembership: {},
};
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case REVIEW_MEMBERSHIP:
       
      return {
        reviewMembership: action.reviewMembership
      };
    default:
      return state;
  }
};
