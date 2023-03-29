import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "react-native-vector-icons";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import ApiService from "../api/ApiService";
import useConditionWrapper from "../hooks/useConditionWrapper";
import useApi from "../hooks/useApi";

const House = (props) => {
  const navigation = useNavigation();
  const [house, setHouse] = useState(0);
  const [numberOfHouses, setNumberOfHouses] = useState([]);

  const houseType = "House"
  const apiWrapper = useConditionWrapper();

  const {
    firstLoad,
    loading,
    data: houses,
    reload,
  } = useApi(
    async () =>
      apiWrapper(async () => {
        const res = await ApiService.getHouse(props.areaId,houseType);
        setNumberOfHouses(res.data);
        return res.data;
      }),
    []
  );

  const addHouses = async () => {
    const res = await ApiService.addHouse({
      areaId: props.areaId,
      // tankId: props.tankId,
      totalHouse: house,
    });
    setNumberOfHouses(res.data);
  };

  return (
    <View>
      <Text style={{ fontWeight: "bold", paddingVertical: 10 }}>
        Total Number Of Houses
      </Text>
      <TextInput
        style={{ borderWidth: 0.5, width: 100, paddingHorizontal: 5 }}
        onChangeText={(text) => {
          setHouse(parseInt(text));
        }}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "#90ee90",
          width: 60,
          marginTop: 10,
          paddingHorizontal: 10,
          paddingVertical: 5,
        }}
        onPress={addHouses}
      >
        <Text style={{ fontWeight: "bold" }}>Save</Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          //justifyContent: "space-between",
          width: "100%",
          flexWrap: "wrap",
          paddingTop: 10,
        }}
      >
        {numberOfHouses.map((item, index) => (
          <TouchableOpacity
            style={{
              width: "33%",
              paddingHorizontal: 5,
              paddingVertical: 5,
            }}
            key={index}
            onPress={() =>
              navigation.push("House", {
                houseNumber: index + 1,
                houseId: item._id,
              })
            }
          >
            <View
              style={{
                backgroundColor: "#82c9ee",
                paddingHorizontal: 10,
                paddingVertical: 5,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5,
                elevation: 5,
              }}
            >
              <MaterialIcons name="house" size={45} color={"#fff"} />
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                House {index + 1}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default House;

const styles = StyleSheet.create({});
