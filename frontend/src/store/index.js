import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from "./session";
import sliceReducer from "./slice";
import storeReducer from "./store";
import checkInReducer from "./checkin";
import userReducer from "./user";

const rootReducer = combineReducers({
  // add reducer functions here
  session: sessionReducer,
  slices: sliceReducer,
  stores: storeReducer,
  checkIns: checkInReducer,
  user: userReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
