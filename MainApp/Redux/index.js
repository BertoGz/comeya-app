/* eslint-disable import/no-extraneous-dependencies */
import { createStore } from "redux";
import thunk from "redux-thunk";
import logger from "./logger";
import rootReducer from "./Reducers";

export default function configureStore() {
  const store = createStore(rootReducer, logger);

  return store;
}
