import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'; // Middleware for handling async actions
import { composeWithDevTools } from 'redux-devtools-extension'; // For browser devtools integration

import reducerA from './reducers/reducerA';
import reducerB from './reducers/reducerB'; 

const rootReducer = combineReducers({
  reducerA,
  reducerB,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
