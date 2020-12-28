import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainApp from "./MainApp";
import configureStore from "./MainApp/Redux/index";
import { Provider } from "react-redux";

export const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}
