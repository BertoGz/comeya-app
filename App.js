import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainApp from "./MainApp";
import configureStore from "./MainApp/Redux/index";
import { Provider } from "react-redux";
import { NativeBaseProvider } from "native-base";

export const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <MainApp />
      </NativeBaseProvider>
    </Provider>
  );
}
