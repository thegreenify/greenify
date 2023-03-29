import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {SimpleLineIcons,FontAwesome,Ionicons,Octicons,EvilIcons} from "react-native-vector-icons";
import Home from "../screens/Home"
import React from "react";
import Meters from "../screens/Meters";
import Profile from "../screens/Profile";
import Survey from "../screens/Survey";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2097d2",
        tabBarInactiveTintColor: "grey",
        tabBarStyle: [
          {
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#fff",
            borderTopWidth: 0,
            height: 60,
            paddingHorizontal: 10,
            paddingBottom: 15,
          },
          null,
        ],
        showLabel: false,
      }}
      tabBarOptions={{
        showLabel: false,
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <SimpleLineIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Meters"
        component={Meters}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="speedometer-outline" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="Survey"
        component={Survey}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="checklist" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <EvilIcons name="user" style={{marginBottom:10}} color={color} size={35} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
