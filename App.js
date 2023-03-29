import React, { useEffect } from "react";
import store from "./state/store";
import { Provider } from "react-redux";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import RootNavigator from "./navigators/RootNavigator";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

export const reduxPersistStore = persistStore(store);

export default function App() {
  useEffect(() => {
    StatusBar.setBarStyle("dark-content");
    // StatusBar.setBackgroundColor("#fff");
  }, []);
  return (
    <Provider store={store}>
    <PersistGate persistor={reduxPersistStore}>
      <RootNavigator />
    </PersistGate>
  </Provider>
  );
}
