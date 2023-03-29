import { StatusBar } from "react-native";
import React, { useEffect } from "react";
import store from "./state/store";
import { Provider } from "react-redux";
import RootNavigator from "./navigater/RootNavigator";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

export const reduxPersistStore = persistStore(store);

export default function App() {
  useEffect(() => {
    StatusBar.setBarStyle("light-content");
    StatusBar.setBackgroundColor("#90ee90");
  }, []);
  return (
    <Provider store={store}>
      <PersistGate persistor={reduxPersistStore}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
}
