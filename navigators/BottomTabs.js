import { StyleSheet, View, Image, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Ionicons,SimpleLineIcons,EvilIcons} from "react-native-vector-icons";
const Tab = createBottomTabNavigator();
import React from "react";
import Home from "../screen/Home";
// import News from "../screen/News";
import Bills from "../screen/Bills";
import Notification from "../screen/Notification";
import Profile from "../screen/Profile";
import { useState, useEffect } from "react";
import Meter from "../screen/Meter";
//import messaging from "@react-native-firebase/messaging";
//import { Alert } from "react-native";

const BottomTabs = () => {
  const [notification, setNotification] = useState([]);
  const [tab, setTab] = useState(true);
  // const apiWrapper = useConditionWrapper();

  // const requestUserPermission = async () => {
  //   const authStatus = await messaging().requestPermission();
  //   const enabled =
  //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  //   if (enabled) {
  //     console.log("Authorization status", authStatus);
  //   }
  // };

  // useEffect(() => {
  //   if (requestUserPermission()) {
  //     messaging()
  //       .getToken()
  //       .then((token) => {
  //         token;
  //       });
  //   } else {
  //     console.log("Failed token status", authStatus);
  //   }
  //   messaging()
  //     .getInitialNotification()
  //     .then((remoteMessage) => {
  //       if (remoteMessage) {
  //           remoteMessage.notification
  //       }
  //     });
  //     messaging().onNotificationOpenedApp(async remoteMessage=>{
  //      remoteMessage.notification
  //     });
  //     messaging().setBackgroundMessageHandler(async remoteMessage=>{
  //       setNotification(remoteMessage.data)
  //     });

  //     const unsubscribe = messaging().onMessage(async remoteMessage=>{
  //       setNotification([...notification,remoteMessage.data]);
  //     });

  //     return unsubscribe;
  // }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "green",
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
      {/* <Tab.Screen
        name="Meter"
        component={Meter}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="speedometer-outline" color={color} size={26} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Bills"
        component={Bills}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="newspaper-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        // component={Notification}
        children={() => <Notification notification={notification} />}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-notifications-outline" color={color} size={26} />
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

export default BottomTabs;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    width: 52,
    height: 52,
    left: 13,
    borderRadius: 26,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 1,
  },
});
