/* eslint-disable camelcase */
import {
  /// Data State Constants...
  SET_USER_DATA,
  SET_BADGE_COUNT,
} from "../../Actions/appState";

const initialState = {
  /// Data state...
  userData: [],
  badgeCount: 0,
};

export default function appState(state = initialState, action) {
  const { type, payload } = action || {};
  switch (type) {
    /////////////////////////
    /// Data state Reducers...
    /////////////////////////
    case SET_USER_DATA: {
      return { ...state, userData: payload };
    }
    case SET_BADGE_COUNT: {
      return { ...state, badgeCount: payload };
    }

    default:
      return state;
  }
}
