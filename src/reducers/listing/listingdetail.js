import { DETAIL_LISTING } from '../../actions/constants';

const initialState = {
    detaillisting: []
};
export default (state = initialState, action = {}) => {
switch (action.type) {
    case DETAIL_LISTING:
      return {
        detaillisting : action.detaillisting.response,
        
      };
    default:
      return state;
  }
}; 
