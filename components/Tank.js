import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import ModelView from "../components/ModelView";
import ApiService from "../api/ApiService";
import useConditionWrapper from "../hooks/useConditionWrapper";
import useApi from "../hooks/useApi";

const Tank = (props) => {
  const [tank, setTank] = useState([
    {
      tankCapacity: "",
      inletPipeSize: "",
      inletPipeSize: "",
      usesFor: "",
    },
  ]);

  const [outlet, setOutlet] = useState([
    {
      outletPipeType: "",
      outletPipeSize: "",
    },
  ]);
  const [mainTank, setMainTank] = useState(1);
  const [mainTankId,setMainTankId]=useState("")
  const [open, setOpen] = useState(false);
  const apiWrapper = useConditionWrapper();
  const {
    firstLoad,
    loading,
    data: tanks,
    reload,
  } = useApi(
    async () =>
      apiWrapper(async () => {
        const res = await ApiService.getAreaMainTank(props.areaId);
        setMainTankId(res.data[0]._id)
        return res.data;
      }),
    []
  );

  const addOutlet = async () => {
    setOutlet([
      ...outlet,
      {
        outletPipeType: "",
        outletPipeSize: "",
      },
    ]);
  };

  const removeOutlet = (i) => {
    const list = [...outlet];
    list.splice(i, 1);
    setOutlet(list);
  };

  const addTank = async (index) => {
    setTank([
      ...tank,
      {
        tankCapacity: "",
        inletPipeType: "",
        inletPipeSize: "",
        usesFor: "",
      },
    ]);
    const res = await ApiService.addTank(
      props.towerId,
      tank[index].tankCapacity,
      tank[index].inletPipeType,
      tank[index].inletPipeSize,
      tank[index].usesFor,
      JSON.stringify(outlet),
      JSON.stringify(supplyingFloor),
      mainTankId,
    );
    setTankId(res.data);
  };

  const removeTank = (index) => {
    const list = [...tank];
    list.splice(index, 1);
    setTank(list);
  };

  return (
    <View>
      {tank.map((item, index) => (
        <View
          style={{
            paddingTop: 10,
          }}
          key={index}
        >
          <Text style={{ fontWeight: "bold" }}>Tank {index + 1}</Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              paddingVertical: 5,
            }}
          >
            <View style={{ width: "30%" }}>
              <Text>
                Tank Capacity{" "}
                <Text style={{ color: "red", fontWeight: "bold" }}>*</Text>
              </Text>
              <TextInput
                style={{ borderWidth: 0.5, paddingHorizontal: 5 }}
                onChangeText={(text) => {
                  const list = [...tank];
                  list[index].tankCapacity = text;
                  setTank(list);
                }}
              />
            </View>
            <View style={{ width: "32%" }}>
              <Text>
                Inlet Pipe Type{" "}
                <Text style={{ color: "red", fontWeight: "bold" }}>*</Text>
              </Text>
              <TextInput
                style={{ borderWidth: 0.5, paddingHorizontal: 5 }}
                onChangeText={(text) => {
                  const list = [...tank];
                  list[index].inletPipeType = text;
                  setTank(list);
                }}
              />
            </View>
            <View style={{ width: "30%" }}>
              <Text>
                Inlet Pipe Size{" "}
                <Text style={{ color: "red", fontWeight: "bold" }}>*</Text>
              </Text>
              <TextInput
                style={{ borderWidth: 0.5, paddingHorizontal: 5 }}
                onChangeText={(text) => {
                  const list = [...tank];
                  list[index].inletPipeSize = text;
                  setTank(list);
                }}
              />
            </View>
            <View style={{ width: "32%" }}>
              <Text>
                Uses For{" "}
                <Text style={{ color: "red", fontWeight: "bold" }}>*</Text>
              </Text>
              <TextInput
                style={{ borderWidth: 0.5, paddingHorizontal: 5 }}
                onChangeText={(text) => {
                  const list = [...tank];
                  list[index].usesFor = text;
                  setTank(list);
                }}
              />
            </View>
            <View style={{ width: "65%" }}>
              <View>
                <Text>
                  Main Tank
                  <Text style={{ color: "red", fontWeight: "bold" }}>*</Text>
                </Text>
                <TouchableOpacity
                  onPress={() => setOpen(true)}
                  style={{
                    width: "47%",
                    borderWidth: 0.5,
                    paddingVertical: 5,
                    borderRadius: 5,
                    paddingHorizontal: 5,
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  <Text>Main Tank {mainTank}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <Text style={{ paddingVertical: 5, fontWeight: "bold" }}>
            Outlet Pipes
          </Text>
          <View style={{}}>
            {outlet.map((pipe, i) => (
              <View key={i}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      width: "28%",
                      marginRight: 15,
                      marginVertical: 10,
                    }}
                  >
                    <Text style={{ paddingVertical: 5 }}>
                      {`${i + 1})`} Outlet Pipe Type{" "}
                      <Text style={{ color: "red", fontWeight: "bold" }}>
                        *
                      </Text>
                    </Text>
                    <TextInput
                      style={{ borderWidth: 0.5, paddingHorizontal: 5 }}
                      onChangeText={(text) => {
                        const list = [...outlet];
                        list[index].outletPipeType = text;
                        setOutlet(list);
                      }}
                    />
                  </View>
                  <View
                    style={{
                      width: "28%",
                      marginRight: 15,
                      marginVertical: 10,
                    }}
                  >
                    <Text style={{ paddingVertical: 5 }}>
                      {`${i + 1})`} Outlet Pipe Size
                      <Text style={{ color: "red", fontWeight: "bold" }}>
                        *
                      </Text>
                    </Text>
                    <TextInput
                      style={{ borderWidth: 0.5, paddingHorizontal: 5 }}
                      onChangeText={(text) => {
                        const list = [...outlet];
                        list[index].outletPipeSize = text;
                        setOutlet(list);
                      }}
                    />
                  </View>
                  <View
                    style={{
                      width: "30%",
                      marginRight: 15,
                      marginVertical: 10,
                    }}
                  >
                    <Text style={{ paddingVertical: 5 }}>
                      {`${i + 1})`} Supplying Floors
                      <Text style={{ color: "red", fontWeight: "bold" }}>
                        *
                      </Text>
                    </Text>
                    <TouchableOpacity
                      onPress={() => props.setOpen(true)}
                      style={{
                        width: "100%",
                        borderWidth: 0.5,
                        paddingVertical: 5,
                        borderRadius: 5,
                        paddingHorizontal: 5,
                        flexDirection: "row",
                        flexWrap: "wrap",
                      }}
                    >
                      {props.supplyingFloor.length > 0 ? (
                        props.supplyingFloor.map((i, n) => (
                          <Text key={n}>{i}-</Text>
                        ))
                      ) : (
                        <Text>Select Floor</Text>
                      )}
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      paddingBottom: 15,
                      width: "66%",
                      alignItems: "center",
                    }}
                  >
                    {outlet.length !== 1 && (
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
                        onPress={() => removeOutlet(i)}
                      >
                        <Text style={{ color: "#fff" }}>Remove Outlet</Text>
                      </TouchableOpacity>
                    )}
                    {outlet.length - 1 === i && (
                      <TouchableOpacity
                        style={{
                          backgroundColor: "#2874f0",
                          padding: 10,
                          alignItems: "center",
                          borderRadius: 5,
                          height: 40,
                        }}
                        onPress={addOutlet}
                      >
                        <Text style={{ color: "#fff" }}>Add More Outlet</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              </View>
            ))}
          </View>
          <View style={{ flexDirection: "row", paddingBottom: 10 }}>
            {tank.length !== 1 && (
              <TouchableOpacity
                style={{
                  backgroundColor: "#2874f0",
                  padding: 10,
                  width: 100,
                  alignItems: "center",
                  borderRadius: 5,
                  marginRight: 5,
                }}
                onPress={() => removeTank(index)}
              >
                <Text style={{ color: "#fff" }}>Remove</Text>
              </TouchableOpacity>
            )}
            {tank.length - 1 === index && (
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#2874f0",
                    padding: 10,
                    alignItems: "center",
                    borderRadius: 5,
                    marginRight: 10,
                  }}
                  onPress={async () => {
                    const res = await ApiService.addTank(
                      props.route.params.towerId,
                      tank[index].tankCapacity,
                      tank[index].inletPipeType,
                      tank[index].inletPipeSize,
                      tank[index].usesFor,
                      JSON.stringify(outlet),
                      JSON.stringify(supplyingFloor)
                    );
                    // setTankId(res.data);
                  }}
                >
                  <Text style={{ color: "#fff" }}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#2874f0",
                    padding: 10,
                    width: 100,
                    alignItems: "center",
                    borderRadius: 5,
                  }}
                  onPress={() => addTank(index)}
                >
                  <Text style={{ color: "#fff" }}>Add More</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      ))}
      {tanks.length > 1 && (
        <ModelView open={open} setOpen={setOpen}>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {tanks.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  width: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 0.5,
                  padding: 5,
                  marginBottom: 5,
                  backgroundColor: tanks.includes(index + 1)
                    ? "#82c9ee"
                    : "#fff",
                  borderColor: tanks.includes(index + 1) ? "#82c9ee" : "#000",
                }}
                  onPress={() => {
                    setMainTank(index+1)
                    setOpen(false);
                    setMainTankId(item._id)
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    //color: supplyingFloor.includes(index + 1) ? "#fff" : "#000",
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
      )}
    </View>
  );
};

export default Tank;

const styles = StyleSheet.create({});
