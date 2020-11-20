import { LISTING_STORAGE } from '../../actions/constants';

const initialState = {
    liststorage: []
};
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LISTING_STORAGE:
      return {
        liststorage : action.liststorage,
        
      };
    default:
      return state;
  }
};
