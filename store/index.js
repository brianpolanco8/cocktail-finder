import {createStore, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

// Import the root reducer

import rootReducer from './reducers';

// Setup Thunk Middleware

const thunk = applyMiddleware(thunkMiddleware);

// Compose store enhancers

const enchancers = compose(thunk);

// Compose enhancers

// const composeEnhancers =
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose(thunk);

// Create and export the store

const store = createStore(rootReducer, enchancers);
// const store = createStore(
//   persistedReducer,
//   composeEnhancers(applyMiddleware(thunkMiddleware)),
// );

// Middleware: Redux Persist Persister

export {store};
