import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "react-native-vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import ApiService from "../api/ApiService";
import useConditionWrapper from "../hooks/useConditionWrapper";
import useApi from "../hooks/useApi";

const Houses = (props) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const [house, setHouse] = useState(0);
  const [numberOfHouses, settNumberOfHouse] = useState([]);

  const apiWrapper = useConditionWrapper();

  const {
    firstLoad,
    loading,
    data: task,
    reload,
  } = useApi(
    async () =>
      apiWrapper(async () => {
        const res = await ApiService.getHouse({
          houseAdd: props.route.params.areaId,
          towerId: props.route.params.towerId,
          floorNumber: props.route.params.floorNumber,
        });
        settNumberOfHouse(res.data);
        return res.data;
      }),
    []
  );

  const addHouses = async () => {
    const res = await ApiService.addHouse({
      areaId: props.route.params.areaId,
      towerId: props.route.params.towerId,
      tankId: props.route.params.tankId,
      floorNumber: props.route.params.floorNumber,
      totalHouse: house,
    });
    settNumberOfHouse(res.data);
  };
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
          Floor Number {props.route.params.floorNumber}
        </Text>
      </View>
      <ScrollView style={{ paddingHorizontal: 10 }}>
        <Text style={{ fontWeight: "bold", paddingVertical: 10 }}>
          Total Number Houses
        </Text>
        <TextInput
          style={{ borderWidth: 0.5, paddingHorizontal: 5, width: 100 }}
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
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
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
                  flexDirection: "row",
                  backgroundColor: "#82c9ee",
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  justifyContent: "center",
                  borderRadius: 5,
                }}
              >
                <MaterialIcons name="house" size={20} color={"#fff"} />
                <Text style={{ color: "#fff" }}>House {index + 1}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Houses;

const styles = StyleSheet.create({});
