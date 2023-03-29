import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

const PageWarperView = (props) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      // colors={["#aaff55","#fff"]}
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        height: "100%",
      }}
    >
      <View
        style={{
          width: "100%",
          paddingBottom: 10,
          paddingHorizontal: 10,
          flexDirection: props.secondTitle && "row",
          alignItems: props.secondTitle && "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            backgroundColor: "#fff",
            width: "100%",
            paddingVertical: 10,
            paddingHorizontal: 10,
            elevation: 5,
            flexDirection: props.secondTitle && "row",
            alignItems: props.secondTitle && "center",
            justifyContent: "space-between",
            borderRadius:5
          }}
        >
          <View>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {props.title}
            </Text>
            {props.secondTitle && (
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                {props.secondTitle}
              </Text>
            )}
          </View>
          {props.secondTitle && (
            <Image
              source={require("../assets/g-removebg.png")}
              style={{
                width: 50,
                height: 50,
                marginRight: 10,
              }}
            />
          )}
        </View>
      </View>
      <ScrollView style={{ paddingHorizontal: props.padding ? 10 : 0 }}>
        {props.children}
      </ScrollView>
    </View>
  );
};

export default PageWarperView;

const styles = StyleSheet.create({});
