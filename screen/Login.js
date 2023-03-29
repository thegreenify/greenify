import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  Keyboard,
} from "react-native";
import { Icon } from "react-native-elements";
import * as Device from "expo-device";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();

  console.log(
    Device.osName,
    Device.brand,
    Device.osVersion,
    Device.modelName,
    Device.DeviceType.PHONE
  );
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={{ flex: 1, backgroundColor: "#fff" }} />
        <Animatable.Image
          source={require("../assets/greenify-removebg.png")}
          style={styles.titleText}
          animation="fadeInUp"
          delay={1200}
        />

        <View style={styles.bottomView}>
          <Text style={styles.loginText}>Login</Text>
          <View style={styles.inputView}>
            <Icon
              style={styles.inputIcon}
              name="person"
              type="ionicons"
              color="#2097d2"
            />
            <TextInput
              style={styles.input}
              placeholder="Username"
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
            />
          </View>
          <View style={styles.inputView}>
            <Icon
              style={styles.inputIcon}
              name="lock"
              type="ionicons"
              color="#2097d2"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              autoCapitalize="none"
            />
          </View>
          <Text style={styles.fpText}>Forgot Password?</Text>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.push("Tabs")}
          >
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <View></View>
          <Text style={styles.registerText}>
            Don't have an account?
            <TouchableOpacity
              style={{ alignItems: "center", paddingTop: 10 }}
              onPress={() => navigation.push("Signup")}
            >
              <Text style={{ color: "#fff" }}>{" Register"}</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    position: "absolute",
    top: Dimensions.get("screen").height * 0.2,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
  },
  bottomView: {
    backgroundColor: "#2097d2",
    opacity: 0.95,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  loginText: {
    fontSize: 24,
    marginTop: 12,
    marginBottom: 4,
    textAlign: "center",
    color: "#fff",
  },
  inputView: {
    height: 40,
    borderRadius: 10,
    backgroundColor: "#f1f3f6",
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  inputIcon: {
    paddingHorizontal: 8,
  },
  input: {
    height: 40,
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  loginButton: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  loginButtonText: {
    color: "#2097d2",
    alignSelf: "center",
    fontSize: 18,
  },
  registerText: {
    alignSelf: "center",
    marginTop: 12,
    fontSize: 16,
  },
  fpText: {
    marginTop: 10,
    alignSelf: "flex-end",
    fontSize: 16,
    color: "#fff",
  },
});
