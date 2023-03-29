import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import FloatingInput from "../components/FloatingInput";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password,setPassword] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const navigation = useNavigation();

  const handelFocus = () => {
    setIsFocused(true);
  };
  const handelBlur = () => {
    setIsFocused(false);
  };

  const labelStyle = {
    position: "absolute",
    left: 0,
    top: !isFocused ? 25 : 0,
    fontSize: !isFocused ? 20 : 14,
    color: !isFocused ? "#aaa" : "#000",
    paddingHorizontal: 10,
  };
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        paddingHorizontal: 50,
        paddingVertical:100,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 50,
        }}
      >
        <Image
          source={require("../assets/greenify-removebg.png")}
          resizeMode="cover"
          style={{
            width: 200,
            height: 80,
          }}
        />
      </View>
      <View
        style={{
          height: "20%",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <View style={{ paddingTop: 18, marginVertical: 5 }}>
          <Text style={[labelStyle, {}]}>Email </Text>
          <TextInput
            style={{
              height: 45,
              fontSize: 20,
              color: "#000",
              borderWidth: 1,
              paddingHorizontal: 10,
              borderRadius: 5,
            }}
            onFocus={handelFocus}
            onBlur={handelBlur}
            onChangeText={(text) => setUserName(text)}
          />
        </View>
        <View style={{ paddingTop: 18, marginTop: 10 }}>
          <Text style={labelStyle}>Password </Text>
          <TextInput
            style={{
              height: 45,
              fontSize: 20,
              color: "#000",
              borderWidth: 1,
              borderRadius: 5,
              paddingHorizontal: 10,
            }}
            onFocus={handelFocus}
            onBlur={handelBlur}
            onChangeText={(text) => setUserName(text)}
          />
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "yellow",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
          paddingVertical: 10,
          borderRadius: 5,
        }}
        onPress={()=>navigation.push("Tab")}
      >
        <Text style={{ fontSize: 20 }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
