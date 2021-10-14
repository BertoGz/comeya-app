/* eslint-disable import/no-extraneous-dependencies */
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./Reducers";

export default function configureStore() {
  const middleware = [];
  middleware.push(thunk);
  middleware.push(logger);

  const store = createStore(rootReducer, applyMiddleware(...middleware));

  return store;
}
