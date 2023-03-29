import { StatusBar } from "react-native";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../screens/Login";
import Step2 from "../screens/Step2";
import Flat from "../screens/Flat";
import Houses from "../screens/Houses";
import House from "../screens/House";
import MeterInstallation from "../screens/MeterInstallation";
import Meters from "../screens/Meters";
import BottomTab from "./BottomTab";
import SurveyPage from "../screens/SurveyPage";
import Floor from "../screens/Floor";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  useEffect(() => {
    StatusBar.setBarStyle("light-content");
    StatusBar.setBackgroundColor("#90ee90");
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Tab" component={BottomTab} />
        <Stack.Screen name="step2" component={Step2} />
        <Stack.Screen name="Flat" component={Flat} />
        <Stack.Screen name="Houses" component={Houses} />
        <Stack.Screen name="House" component={House} />
        <Stack.Screen name="Meters" component={Meters} />
        <Stack.Screen name="Floor" component={Floor}/>
        <Stack.Screen name="Start-Survey" component={SurveyPage}/>
        <Stack.Screen name="MeterInstallation" component={MeterInstallation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
