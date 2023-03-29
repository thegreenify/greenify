import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontAwesome, MaterialIcons } from "react-native-vector-icons";
import Flat from "../components/Flat";
import House from "../components/House";
import Bungalow from "../components/Bungalow";
import Place from "../components/Place";

const Step2 = (props) => {
  const insets = useSafeAreaInsets();
  const [placeType, setPlaceType] = useState("Flat");

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
          Step 2
        </Text>
      </View>
      <ScrollView style={{ paddingHorizontal: 20 }}>
        <Place placeType={placeType} setPlaceType={setPlaceType} />
        {placeType === "House" ? (
          <House
            areaId={props.route.params.areaId}
            tankId={props.route.params.tankIds}
          />
        ) : placeType === "Bungalow" ? (
          <Bungalow
            areaId={props.route.params.areaId}
            tankId={props.route.params.tankIds}
          />
        ) : (
          <Flat
            areaId={props.route.params.areaId}
            tankIds={props.route.params.tankIds}
          />
        )}
      </ScrollView>
    </View>
  );
};

export default Step2;

const styles = StyleSheet.create({});
