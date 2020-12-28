import React from "react";
import { StyleSheet, Alert } from "react-native";
import { H1, View, Button, Text } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { loginUser } from "../../Utils/Requests";
import { setUserData } from "../../Redux/Actions/appState";
import { useDispatch } from "react-redux";

const Register = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLogin = () => {
    loginUser({
      username: "BertoGz",
      password: "123abc",
      onSuccess: (data, status, message) => {
        Alert.alert(message);
        navigation.navigate("Home");
        dispatch(setUserData(data));
        //store login
      },
      onFailure: (data, status, message) => {
        console.log("failed!!!");
        Alert.alert(message);
      },
    });
  };

  return (
    <View style={styles.window}>
      <H1>COMEYA</H1>
      <Button
        block
        textStyle={{ fontWeight: "bold", color: "white" }}
        style={{
          width: 200,
          justifyContent: "center",
          alignSelf: "center",
        }}
        onPress={handleLogin}
      >
        <Text>Sign In</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  window: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgb(100,120,200)",
    justifyContent: "center",
    alignItems: "center",
  },
  titleLogo: {
    width: "90%",
    resizeMode: "contain",
    marginBottom: 300,
  },
});
export default Register;
