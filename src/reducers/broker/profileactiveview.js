import { ACTIVE_VIEW } from '../../actions/constants';

const initialState = {
    activeview: 'detail',
};
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTIVE_VIEW:
      return {
        activeview: action.activeview,
      };
    default:
      return state;
  }
};