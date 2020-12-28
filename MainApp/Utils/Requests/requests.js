import { foodData } from "../Data/foodData";
import userData from "../Data/userData";
import { foodCategories } from "../Data/foodData";

export const postReq = async ({
  endpoint,
  body = {},
  onSuccess,
  onFailure,
}) => {
  try {
    const debug = false;
    const response = await sendReq(endpoint, body);
    if (debug) {
      debugger;
    }
    const { data, status, message } = response || {};

    if (status > 0) {
      onSuccess(data, status, message);
    } else {
      onFailure(data, status, message);
    }
  } catch (error) {
    onFailure(error, null);
  }
};

const sendReq = async (endpoint, params) => {
  const url = `${endpoint}`;
  const response = await axios({
    url,
    data: params,
  });
  return new Promise((res, rej) => {
    setTimeout(() => res(response), 500);
  });
};

//endpoint checker
const axios = async ({ url, data }) => {
  if (url === GET_DISH) {
    const toSearch = data?.id;

    const dish = foodData.filter((item) => {
      return item.id === toSearch;
    });

    return { data: dish[0], status: 1, message: "Found dish" };
  }

  if (url === LOGIN_USER) {
    const searchUsername = data?.username;
    const searchPassword = data?.password;
    const user = userData.filter((user) => user.username === searchUsername);
    if (searchPassword === user[0].password) {
      return {
        data: user[0],
        status: 1,
        message: "successfully logged in",
      };
    } else {
      return {
        data: "",
        status: 1,
        message: "Wrong Password/Username",
      };
    }
  }

  if (url === GET_ALL_FOOD_CATEGORIES) {
    return {
      data: foodCategories,
      status: 1,
      message: "successfully returned categories",
    };
  }
  if (url === GET_FOOD_DATA_FROM_CATEGORY) {
    const match = (item) => item.toLowerCase() === data?.tag.toLowerCase();
    const fData = foodData.filter((item) => item?.tags.some(match));
    if (fData?.length > 0) {
      return {
        data: fData,
        status: 1,
        message: "successfully returned categories",
      };
    } else {
      return {
        data: [],
        status: 1,
        message: "Did not find any items",
      };
    }
  }
};

//GET REQUESTS
export const GET_DISH = "/get_dish_rn";
export const GET_ALL_FOOD_CATEGORIES = "/getAllFoodCategories";
export const GET_FOOD_DATA_FROM_CATEGORY = "/getFoodDataFromCategory";
//POST REQUEST
export const LOGIN_USER = "/login_user";
