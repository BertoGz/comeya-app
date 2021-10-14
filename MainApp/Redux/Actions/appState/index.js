//////////////
//CONSTANTS...
//////////////
export const SET_USER_DATA = "SET_USER_DATA";
export const SET_BADGE_COUNT = "SET_BADGE_COUNT";
//////////////
//ACTIONS...
//////////////
export const setUserData = (payload) => ({
  type: SET_USER_DATA,
  payload,
});

export const setBadgeCount = (payload) => ({
  type: SET_BADGE_COUNT,
  payload,
});
