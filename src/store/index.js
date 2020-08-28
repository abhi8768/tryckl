import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from "../reducers/rootReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunkMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  );
  
export default store;

/**
 * Register async loaded reducers in store and replace
 * current state-reducer with the a new reducer
 *
 * @export
 * @param {Object} store - the store object
 * @param {Object} asyncReducer - async reducer modules
*/
//store.asyncReducers = {};

/* const  replaceReducers = (defaultReducers) => {
  const merged = Object.assign({}, defaultReducers, store.asyncReducers);
  const combined = combineReducers(merged);
  store.replaceReducer(combined);
};
export const injectAsyncReducers = (asyncReducers) => {
  const injectReducers = Object.keys(asyncReducers).reduce((all, item) => {
    if (store.asyncReducers[item]) {
      delete all[item];
    }

    return all;
  }, asyncReducers);

  store.asyncReducers = Object.assign({}, store.asyncReducers, injectReducers);
  replaceReducers(rootReducer);
}; */
// hot reloading for reducers
if (module.hot) {
  module.hot.accept('../reducers/rootReducer', () => {
    const nextReducer = require('../reducers/rootReducer').default; // eslint-disable-line
    replaceReducers(nextReducer);
  });
}
