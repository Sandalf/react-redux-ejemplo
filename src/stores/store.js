import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from "redux-logger";

import rootReducer from '../reducers/index';

/*const initialState = {};
const logger = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,initialState,composeEnhancers(applyMiddleware(thunk, logger)));
*/
const store = createStore(rootReducer);

export default store;