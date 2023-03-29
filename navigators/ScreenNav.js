import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import Login from "../screen/Login";
import Meter from "../screen/Meter";
import Signup from "../screen/Signup";
import BottomTabs from "./BottomTabs";

const Stack = createStackNavigator();
const screens = [
  { name: "Tabs", component: BottomTabs },
  { name: "Login", component: Login },
  { name: "Signup", component: Signup },
  { name: "Meter", component: Meter },
];

const ScreenNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={"Login"}
    >
      {screens.map((screen, idx) => (
        <Stack.Screen
          key={idx}
          name={screen.name}
          component={screen.component}
        />
      ))}
    </Stack.Navigator>
  );
};

export default ScreenNav;
