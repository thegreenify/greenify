import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const Meters = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const meter = [1, 2, 3, 4, 5];
  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <View
        style={{
          backgroundColor: "#90ee90",
          width: "100%",
          paddingBottom: 10,
          paddingHorizontal: 10,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "#b232b2" }}>
          Meters To Install
        </Text>
      </View>
      <ScrollView style={{ paddingHorizontal: 10, paddingTop: 10 }}>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {meter.map((item, index) => (
            <TouchableOpacity
              style={{
                width: "33%",
                paddingHorizontal: 5,
                paddingVertical: 5,
              }}
              key={index}
              onPress={()=>navigation.push("MeterInstallation")}
            >
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "#82c9ee",
                  paddingHorizontal: 20,
                  paddingVertical: 7,
                  justifyContent: "space-between",
                  borderRadius: 5,
                }}
              >
                <FontAwesome name="tachometer" size={20} color={"#fff"} />
                <Text style={{ color: "#fff" }}>Meter {index + 1}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Meters;

const styles = StyleSheet.create({});
