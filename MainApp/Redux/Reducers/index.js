import { combineReducers } from "redux";
import appState from "./appState";
import userData from "./userData";
export default combineReducers({
  appState,
  userData,
});
