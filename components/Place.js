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
import { FontAwesome, MaterialIcons } from "react-native-vector-icons";
import Flat from "./Flat";
import House from "./House";
import Bungalow from "./Bungalow";

const Place = ({placeType, setPlaceType}) => {

  const [tower, setTower] = useState(0);

  const placeData = [
    {
      title: "Flat",
      icon: <FontAwesome name="building" size={20} color={"#fff"} />,
    },
    {
      title: "House",
      icon: <MaterialIcons name="house" size={20} color={"#fff"} />,
    },
    {
      title: "Bungalow",
      icon: (
        <Image
          source={require("../assets/output-onlinepngtools.png")}
          resizeMode="cover"
          style={{ width: 30, height: 20 }}
        />
      ),
    },
  ];
  return (
    <View>
      <Text style={{ fontWeight: "bold", paddingVertical: 10 }}>
        Chose Place Type
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        {placeData.map((item, index) => (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              backgroundColor: placeType === item.title ? "#82c9ee" : "#90ee90",
              padding: 5,
              justifyContent: "center",
              width: 100,
              borderRadius: 5,
              width: "30%",
            }}
            onPress={() => setPlaceType(item.title)}
            key={index}
          >
            {item.icon}
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 15,
                paddingLeft: 5,
                color: "#fff",
              }}
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Place;

const styles = StyleSheet.create({});
