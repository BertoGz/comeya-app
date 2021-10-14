// here we import our screens/containers
import React from "react";
import Register from "./Containers/Register";
import Home from "./Containers/Home";
import FoodCategory from "./Containers/FoodCategory";
import ProfileRoot from "./Containers/Profile";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Colors from "./Utils/Colors";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const tabNavigatorScreenOptions = {
  headerShown: false,
};
const HomeStackScreenOptions = { headerShown: false };
const ProfileStackScreenOptions = { headerShown: true };
const AppNavigation = () => {
  const HomeStack = () => {
    return (
      <Stack.Navigator screenOptions={HomeStackScreenOptions}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FoodCategory" component={FoodCategory} />
      </Stack.Navigator>
    );
  };

  const ProfileStack = () => {
    //Import the other screens you use!
    return (
      <Stack.Navigator screenOptions={ProfileStackScreenOptions}>
        <Stack.Screen name="ProfileRoot" component={ProfileRoot} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={tabNavigatorScreenOptions}>
        <Tab.Screen name="Main" component={HomeStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
  /*return (
    <Stack.Navigator
      initialRouteName="Register"
      headerMode="none"
      //screenOptions={{ animationEnabled: false }}
    >
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="FoodCategory" component={FoodCategory} />
    </Stack.Navigator>
  );*/
};

export default AppNavigation;
