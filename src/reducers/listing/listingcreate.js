import { SAVE_LISTING } from '../../actions/constants';

const initialState = {
    savelisting: []
};
export default (state = initialState, action = {}) => {
switch (action.type) {
    case SAVE_LISTING:
      return {
        savelisting : action.savelisting,
        
      };
    default:
      return state;
  }
}; 
