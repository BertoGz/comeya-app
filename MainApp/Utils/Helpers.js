import { Alert } from "react-native";
import { loginUser } from "./Requests";

export const handleLogin = (username, password) => {
  loginUser({
    username,
    password,
    onSuccess: (data, status, message) => {
      Alert.alert(message);
      dispatch(setUserData(data));
    },
    onFailure: (data, status, message) => {
      console.log("failed!!!");
      Alert.alert(message);
    },
  });
};
