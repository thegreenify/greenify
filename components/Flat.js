import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { FontAwesome, MaterialIcons } from "react-native-vector-icons";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import ApiService from "../api/ApiService";
import useConditionWrapper from "../hooks/useConditionWrapper";
import useApi from "../hooks/useApi";

const Flat = (props) => {
  const navigation = useNavigation();
  const [numberOfTowers, setNumberOfTowers] = useState([]);
  const [tower, setTower] = useState(0);

  const houseType = "House"

  const apiWrapper = useConditionWrapper();

  const {
    firstLoad,
    loading,
    data: task,
    reload,
  } = useApi(
    async () =>
      apiWrapper(async () => {
        const res = await ApiService.getTower(props.areaId,houseType);
        setNumberOfTowers(res.data);
        return res.data;
      }),
    []
  );

  const handelSave = async () => {
    const res = await ApiService.addTower(tower, props.areaId);

    setNumberOfTowers(res.data);
  };

  return (
    <View>
      {numberOfTowers.length == 0 && (
        <>
          <Text style={{ fontWeight: "bold", paddingVertical: 10 }}>
            Total Number Of Tower/Block{" "}
            <Text style={{ color: "red", fontWeight: "bold" }}>*</Text>
          </Text>
          <TextInput
            style={{ borderWidth: 0.5, width: 100, paddingHorizontal: 5 }}
            onChangeText={(text) => {
              setTower(parseInt(text));
            }}
          />
          <TouchableOpacity
            style={{
              width: 100,
              flexDirection: "row",
              backgroundColor: "#90ee90",
              paddingHorizontal: 10,
              paddingVertical: 5,
              justifyContent: "center",
              borderRadius: 5,
              marginTop: 10,
            }}
            onPress={handelSave}
          >
            <Text style={{ fontWeight: "bold", color: "#fff" }}>Save</Text>
          </TouchableOpacity>
        </>
      )}

      <View
        style={{
          flexDirection: "row",
          //justifyContent: "space-between",
          width: "100%",
          flexWrap: "wrap",
          paddingTop: 10,
        }}
      >
        {numberOfTowers.map((item, index) => (
          <TouchableOpacity
            style={{
              width: "33%",
              paddingHorizontal: 5,
              paddingVertical: 5,
            }}
            key={index}
            onPress={() =>
              navigation.push("Flat", {
                towerNumber: index + 1,
                towerId: item._id,
                totalFloor:item.totalFloors,
                areaId:props.areaId
              })
            }
          >
            <View
              style={{
                // flexDirection: "row",
                backgroundColor: "#82c9ee",
                paddingHorizontal: 10,
                paddingVertical: 15,
                justifyContent: "center",
                alignItems:"center",
                borderRadius: 5,
                elevation:5
              }}
            >
              <FontAwesome name="building" size={45} color={"#fff"} />
              <Text style={{ color: "#fff",fontWeight:"bold" }}>Tower No.{index + 1}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Flat;

const styles = StyleSheet.create({});
