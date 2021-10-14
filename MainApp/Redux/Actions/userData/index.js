export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";

export const addToFavorites = (itemId) => ({
  type: ADD_TO_FAVORITES,
  payload: itemId,
});
