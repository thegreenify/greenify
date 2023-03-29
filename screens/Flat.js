import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import ModelView from "../components/ModelView";
import ApiService from "../api/ApiService";
import Tank from "../components/Tank";

const Flat = (props) => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [numberOfFloors, setNumberOfFloors] = useState([]);
  const fromTo = [];
  const [supplyingFloor, setSupplyingFloor] = useState([]);
  const [floor, setFloor] = useState(0);
  const [tankId, setTankId] = useState("");

  useEffect(() => {
    if (props.route.params.totalFloor != null) {
      const arr = Array.from(
        { length: props.route.params.totalFloor },
        (_, i) => i
      );

      setNumberOfFloors(arr);
      for (let i = 0; i < arr.length; i += 2) {
        const chunk = arr.slice(i, i + 2);
        fromTo.push(chunk);
      }
    }
  }, []);

  const addFloor = (input) => {
    if (parseInt(input) > 0) {
      for (let i = 0; i < parseInt(input); i++) {
        if (i != numberOfFloors[numberOfFloors.length - 1])
          numberOfFloors.push(i);
      }
    }
    if (input === "") {
      setNumberOfFloors([]);
    }
  };

  const handelFloor = async () => {
    const res = await ApiService.updateTower({
      towerId: props.route.params.towerId,
      totalFloor: numberOfFloors.length,
    });
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
          Tower {props.route.params.towerNumber}
        </Text>
      </View>
      <ScrollView style={{ paddingHorizontal: 10 }}>
        <Text style={{ fontWeight: "bold", paddingVertical: 10 }}>
          Total Number Floors
          <Text style={{ color: "red", fontWeight: "bold" }}>*</Text>
        </Text>
        {props.route.params.totalFloor != null ? (
          <Text style={{ borderWidth: 0.5, padding: 5, width: 50 }}>
            {props.route.params.totalFloor}
          </Text>
        ) : (
          <TextInput
            style={{ borderWidth: 0.5, paddingHorizontal: 5, width: 100 }}
            onChangeText={(text) => {
              setFloor(parseInt(text));
              addFloor(text);
            }}
          />
        )}
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
          onPress={handelFloor}
        >
          <Text style={{ fontWeight: "bold", color: "#fff" }}>Save</Text>
        </TouchableOpacity>
        <Tank
          towerId={props.route.params.towerId}
          supplyingFloor={supplyingFloor}
          setOpen={setOpen}
          areaId={props.route.params.areaId}
        />
        <Text style={{ fontWeight: "bold", paddingVertical: 10 }}>Floors</Text>
        <View
          style={{
            flexDirection: "row",
            //justifyContent: "space-between",
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          {numberOfFloors.map((item, index) => (
            <TouchableOpacity
              style={{
                width: "33%",
                paddingHorizontal: 5,
                paddingVertical: 5,
              }}
              key={index}
              onPress={() =>
                navigation.push("Houses", {
                  floorNumber: index + 1,
                  areaId: props.route.params.areaId,
                  towerId: props.route.params.towerId,
                  tankId,
                })
              }
            >
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "#82c9ee",
                  paddingHorizontal: 20,
                  paddingVertical: 5,
                  justifyContent: "space-between",
                  borderRadius: 5,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontWeight: "bold", color: "#fff" }}>
                  Floor {index + 1}
                </Text>
                <MaterialCommunityIcons
                  name="floor-plan"
                  color={"#fff"}
                  size={20}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <ModelView open={open} setOpen={setOpen}>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {numberOfFloors.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{
                width: 50,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 0.5,
                padding: 5,
                marginBottom: 5,
                backgroundColor: supplyingFloor.includes(index + 1)
                  ? "#82c9ee"
                  : "#fff",
                borderColor: supplyingFloor.includes(index + 1)
                  ? "#82c9ee"
                  : "#000",
              }}
              onPress={() => {
                setSupplyingFloor([...supplyingFloor, index + 1]);
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: supplyingFloor.includes(index + 1) ? "#fff" : "#000",
                }}
              >
                {index + 1}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: 5,
            marginTop: 10,
            backgroundColor: "#82c9ee",
          }}
          onPress={() => setOpen(false)}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Save</Text>
        </TouchableOpacity>
      </ModelView>
    </View>
  );
};

export default Flat;

const styles = StyleSheet.create({});
