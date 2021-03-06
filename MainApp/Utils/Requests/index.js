import {
  GET_DISH,
  LOGIN_USER,
  GET_ALL_FOOD_CATEGORIES,
  GET_FOOD_DATA_FROM_CATEGORY,
} from "./requests";
import { postReq } from "./requests";

export const getCard = async ({
  id,
  name,
  onSuccess = () => {},
  onFailure = () => {},
}) =>
  postReq({
    endpoint: GET_DISH,
    body: {
      id,
      name,
    },
    onSuccess,
    onFailure,
  });

export const loginUser = async ({
  username,
  password,
  onSuccess = () => {},
  onFailure = () => {},
}) =>
  postReq({
    endpoint: LOGIN_USER,
    body: {
      username,
      password,
    },
    onSuccess,
    onFailure,
  });

export const getAllFoodCategories = async ({
  onSuccess = () => {},
  onFailure = () => {},
}) =>
  postReq({
    endpoint: GET_ALL_FOOD_CATEGORIES,
    body: {},
    onSuccess,
    onFailure,
  });

export const getFoodDataFromCategory = async ({
  tag = "",
  onSuccess = () => {},
  onFailure = () => {},
}) =>
  postReq({
    endpoint: GET_FOOD_DATA_FROM_CATEGORY,
    body: { tag },
    onSuccess,
    onFailure,
  });
