import { LISTING_ACTIVE_VIEW } from '../../actions/constants';

const initialState = {
    activelistingview: 'mylisting',
};
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LISTING_ACTIVE_VIEW:
      return {
        activelistingview: action.activelistingview,
      };
    default:
      return state;
  }
};