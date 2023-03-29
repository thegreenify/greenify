import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  SimpleLineIcons,
  FontAwesome,
  Ionicons,
  Octicons,
  EvilIcons,
} from "react-native-vector-icons";

const Home = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const [task, setTask] = useState([
    {
      title: "Survey ",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      time: "04/03/2023 - 10/03/2023",
      icon: <Octicons name="checklist" color="#2097d2" size={26} />,
    },
    {
      title: "Meter To Install",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      time: "04/03/2023 - 10/03/2023",
      icon: <Ionicons name="speedometer-outline" color="#2097d2" size={26} />,
    },
  ]);

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
      ]}
    >
      <View
        style={{
          backgroundColor: "#90ee90",
          width: "100%",
          paddingBottom: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 10,
        }}
      >
        <View>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#b232b2" }}>
            Welcome! John Deo
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#b232b2" }}>
            Save Water Save Earth
          </Text>
        </View>
        <View
          style={{ backgroundColor: "#fff", padding: 10, borderRadius: 30 }}
        >
          <Text style={{ fontSize: 23, fontWeight: "bold" }}>JD</Text>
        </View>
      </View>
      <ScrollView style={{ paddingHorizontal: 10, paddingTop: 10 }}>
        {task.map((item, index) => (
          <View
            style={{
              backgroundColor: "#fff",
              marginBottom: 20,
              padding: 10,
              elevation: 5,
              borderRadius: 5,
            }}
            key={index}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingBottom: 10,
                alignItems: "center",
                borderBottomWidth: 0.5,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                {item.title}
              </Text>
              <View
                style={{
                  backgroundColor: "#f0f9ff",
                  padding: 7,
                  borderRadius: 25,
                }}
              >
                {item.icon}
              </View>
            </View>
            <Text style={{ paddingVertical: 10, borderBottomWidth: 0.5 }}>
              {item.content}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingTop: 10,
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 18, color: "red" }}>
                Dad Line
              </Text>
              <Text style={{ fontWeight: "bold" }}>{item.time}</Text>
            </View>
            <TouchableOpacity
              style={{
                marginVertical: 5,
                backgroundColor: "#2097d2",
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 7,
                borderRadius: 5,
              }}
              //onPress={() => navigation.push("Survey")}
            >
              <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 17 }}>
                Start
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
