const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("the action: ", action);
  const returnValue = next(action);
  console.log("the next state: ", store.getState());
  console.groupEnd();
  return returnValue;
};

import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

export default applyMiddleware(thunk, logger);
