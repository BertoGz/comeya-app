/* eslint-disable camelcase */
import {
  /// Data State Constants...
  ADD_TO_FAVORITES,
  SET_FAVORITES,
} from "../../Actions";

const initialState = {
  favorites: new Map([]),
};

export default function appState(state = initialState, action) {
  const { type, payload } = action || {};
  switch (type) {
    /////////////////////////
    ///Data state Reducers///
    /////////////////////////
    case SET_FAVORITES: {
      return { ...state, favorites: payload };
    }
    case ADD_TO_FAVORITES: {
      const updateFavorites = new Map(state.favorites);
      const id = payload;
      updateFavorites.set(id, true);
      return { ...state, favorites: updateFavorites };
    }

    default:
      return state;
  }
}
