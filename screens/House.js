import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useRef } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import ApiService from "../api/ApiService";
import useConditionWrapper from "../hooks/useConditionWrapper";
import useApi from "../hooks/useApi";

const House = (props) => {
  const houseId = props.route.params.houseId;

  const [isEditable, setIsEditable] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const [inlet, setInlet] = useState([
    {
      usages: "",
      inletType: "",
      inletSize: "",
    },
  ]);
  const apiWrapper = useConditionWrapper();
  const [house, setHouse] = useState({
    houseNumber: "",
    houseID: "",
    houseType: "",
    supplyTank: "",
  });
  const [loftTank, setLoftTank] = useState({
    loftOutletType: "",
    loftOutletSize: "",
    loftUsage: "",
  });
  const [lof, setLof] = useState(false);

  const {
    firstLoad,
    loading,
    data: houses,
    reload,
  } = useApi(
    async () =>
      apiWrapper(async () => {
        const res = await ApiService.getHouseById(houseId);
        setHouse({
          houseNumber: res.data.houseNo != undefined ? res.data.houseNo : "",
          houseID: res.data.houseID != undefined ? res.data.houseID : "",
          houseType: res.data.houseType != undefined ? res.data.houseType : "",
          supplyTank:
            res.data.supplyTank != undefined ? res.data.supplyTank : "",
        });
        res.data.inlets.map((item) => {
          inlet.push({
            usages: item.usages,
            inletType: item.inletType,
            inletSize: item.inletSize,
          });
        });
        setInlet(inlet.reverse());
        if (Object.keys(res.data.lofts).length != 0) {
          setLof(true);
          setLoftTank({
            loftOutletType: res.data.lofts.loftOutletType,
            loftOutletSize: res.data.lofts.loftOutletSize,
            loftUsage: res.data.lofts.loftUsage,
          });
        }

        //setInlet(inlet.reverse())
        return res.data;
      }),
    []
  );

  const insets = useSafeAreaInsets();

  const addInlet = async (index) => {
    setInlet([
      ...inlet,
      {
        usages: "",
        inletType: "",
        inletSize: "",
      },
    ]);
    const res = await ApiService.updateHouse(
      props.route.params.houseId,
      house.houseNumber,
      house.houseType,
      house.houseID,
      inlet[index].tankCapacity,
      inlet[index].inletType,
      inlet[index].inletSize,
      inlet[index].usages,
      loftTank.loftOutletSize,
      loftTank.loftOutletType,
      loftTank.loftUsage
    );
  };

  const removeInlet = (i) => {
    const list = [...inlet];
    list.splice(i, 1);
    setInlet(list);
  };

  const handelSubmit = async () => {
    await ApiService.updateHouseById(
      props.route.params.houseId,
      house.houseNumber,
      house.houseType,
      house.houseID,
      JSON.stringify(inlet),
      loftTank.loftOutletSize,
      loftTank.loftOutletType,
      loftTank.loftUsage
    );
  };

  const handleButtonPress = () => {
    setIsEditable(true);
    // Set the cursor position to the end of the input field
    inputRef.current?.setSelection(inputValue.length);
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
          House {props.route.params.houseNumber}
        </Text>
      </View>
      <ScrollView style={{ paddingHorizontal: 10 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 5,
          }}
        >
          <View style={{ width: "30%" }}>
            <Text>House Number</Text>
            <TextInput
              value={house.houseNumber}
              style={{ borderWidth: 0.5, paddingHorizontal: 5 }}
              onChangeText={(text) => setHouse({ ...house, houseNumber: text })}
            />
          </View>
          <View style={{ width: "32%" }}>
            <Text>House ID</Text>
            <TextInput
            editable={
              houses.houseID
                ? false
                : true
            }
              value={house.houseID}
              style={{ borderWidth: 0.5, paddingHorizontal: 5 }}
              onChangeText={(text) => setHouse({ ...house, houseID: text })}
            />
          </View>
          <View style={{ width: "30%" }}>
            <Text>House Type</Text>
            <TextInput
             editable={false}
              value={house.houseType}
              style={{ borderWidth: 0.5, paddingHorizontal: 5 }}
              onChangeText={(text) => setHouse({ ...house, houseType: text })}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 5,
          }}
        >
          <View
            style={{
              width: "50%",
              alignItems: "center",
            }}
          >
            <Text style={{ width: "100%", paddingVertical: 3.5 }}>
              Loft Tank
            </Text>
            <View style={{ flexDirection: "row", width: "100%" }}>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  paddingHorizontal: 5,
                  width: 50,
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                onPress={() => setLof(true)}
              >
                <View
                  style={{
                    width: 15,
                    height: 15,
                    borderRadius: 7.5,
                    borderWidth: 0.5,
                    borderColor: "grey",
                    backgroundColor: lof ? "lightblue" : "#fff",
                  }}
                />
                <Text>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  paddingHorizontal: 5,
                  width: 50,
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                onPress={() => setLof(false)}
              >
                <View
                  style={{
                    width: 15,
                    height: 15,
                    borderRadius: 7.5,
                    borderWidth: 0.5,
                    borderColor: "grey",
                    backgroundColor: lof ? "#fff" : "lightblue",
                  }}
                />
                <Text>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {lof && (
          <>
            <Text style={{ fontWeight: "bold", paddingVertical: 3 }}>
              Lof Tank Detail
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 5,
              }}
            >
              <View style={{ width: "30%" }}>
                <Text>Outlet Type</Text>
                <TextInput
                  editable={
                    !houses.lofts
                      ? isEditable
                      : true
                  }
                  ref={inputRef}
                  value={loftTank.loftOutletType}
                  style={{ borderWidth: 0.5, paddingHorizontal: 5 }}
                  onChangeText={(text) => {
                    setLoftTank({ ...loftTank, loftOutletType: text });
                  }}
                />
              </View>
              <View style={{ width: "30%" }}>
                <Text>Outlet Size</Text>
                <TextInput
                  editable={
                    !houses.lofts
                      ? isEditable
                      : true
                  }
                  ref={inputRef}
                  value={loftTank.loftOutletSize}
                  style={{ borderWidth: 0.5, paddingHorizontal: 5 }}
                  onChangeText={(text) => {
                    setLoftTank({ ...loftTank, loftOutletSize: text });
                  }}
                />
              </View>
              <View style={{ width: "35%" }}>
                <Text>Usages</Text>
                <TextInput
                  editable={
                    !houses.lofts
                      ? isEditable
                      : true
                  }
                  ref={inputRef}
                  value={loftTank.loftUsage}
                  style={{ borderWidth: 0.5, paddingHorizontal: 5 }}
                  onChangeText={(text) => {
                    setLoftTank({ ...loftTank, loftUsage: text });
                  }}
                />
              </View>
            </View>
            {houses.lofts !=undefined? (
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  style={{
                    marginVertical: 5,
                    backgroundColor: "#2874f0",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingVertical: 7,
                    borderRadius: 5,
                    paddingHorizontal: 10,
                    flexDirection: "row",
                  }}
                  onPress={handleButtonPress}
                >
                  <Feather name="edit" size={20} color="#fff" />
                  <Text style={{ color: "#fff", paddingLeft: 5 }}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    marginVertical: 5,
                    backgroundColor: "#2874f0",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingVertical: 7,
                    borderRadius: 5,
                    paddingHorizontal: 10,
                    flexDirection: "row",
                    marginLeft: 10,
                  }}
                >
                  <MaterialIcons name="delete-outline" size={20} color="#fff" />
                  <Text style={{ color: "#fff", paddingLeft: 5 }}>Delete</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 5,
                  backgroundColor: "#2874f0",
                  width: 75,
                }}
                onPress={async () => {
                  await ApiService.addLoft(
                    props.route.params.houseId,
                    loftTank.loftOutletSize,
                    loftTank.loftOutletType,
                    loftTank.loftUsage
                  );
                }}
              >
                <Text style={{ color: "#fff", fontWeight: "bold" }}>Save</Text>
              </TouchableOpacity>
            )}
          </>
        )}
        {inlet.map((item, index) => (
          <View key={index}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 5,
              }}
            >
              <View style={{ width: "35%" }}>
                <Text>Usages</Text>
                <TextInput
                  value={item.usages}
                  style={{ borderWidth: 0.5, paddingHorizontal: 5 }}
                  onChangeText={(text) => {
                    const list = [...inlet];
                    list[index].usages = text;
                    setInlet(list);
                  }}
                />
              </View>
              <View style={{ width: "30%" }}>
                <Text>Inlet Type</Text>
                <TextInput
                  value={item.inletType}
                  style={{ borderWidth: 0.5, paddingHorizontal: 5 }}
                  onChangeText={(text) => {
                    const list = [...inlet];
                    list[index].inletType = text;
                    setInlet(list);
                  }}
                />
              </View>
              <View style={{ width: "30%" }}>
                <Text>Inlet Size</Text>
                <TextInput
                  value={item.inletSize}
                  style={{ borderWidth: 0.5, paddingHorizontal: 5 }}
                  onChangeText={(text) => {
                    const list = [...inlet];
                    list[index].inletSize = text;
                    setInlet(list);
                  }}
                />
              </View>
            </View>
            {houses?.lofts?.length>0 ? (
              ""
            ) : (
              <View
                style={{
                  flexDirection: "row",
                  paddingTop: 25,
                  width: "66%",
                  alignItems: "center",
                }}
              >
                {inlet.length !== 1 && (
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#2874f0",
                      padding: 10,
                      width: 100,
                      alignItems: "center",
                      borderRadius: 5,
                      marginRight: 5,
                      height: 40,
                    }}
                    onPress={() => removeInlet(index)}
                  >
                    <Text style={{ color: "#fff" }}>Remove</Text>
                  </TouchableOpacity>
                )}
                {inlet.length - 1 === index && (
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#2874f0",
                      padding: 10,
                      width: 100,
                      alignItems: "center",
                      borderRadius: 5,
                      height: 40,
                    }}
                    onPress={() => addInlet(index)}
                  >
                    <Text style={{ color: "#fff" }}>Add More</Text>
                  </TouchableOpacity>
                )}
              </View>
            )}
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={{
          position: "absolute",
          right: 15,
          bottom: 10,
          paddingHorizontal: 20,
          paddingVertical: 5,
          backgroundColor: "lightblue",
        }}
        onPress={handelSubmit}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default House;

const styles = StyleSheet.create({});
