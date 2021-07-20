// import { configureStore } from '@reduxjs/toolkit'
// import rootReducer from './reducers'

// const store = configureStore({
//   reducer: rootReducer
// })

// export default store

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;