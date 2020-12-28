// here we import our screens/containers
import React from "react";
import Register from "./Containers/Register";
import Home from "./Containers/Home";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Register"
      headerMode="none"
      //screenOptions={{ animationEnabled: false }}
    >
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="FoodCategory" component={Register} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
