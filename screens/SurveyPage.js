import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import React, { useEffect, useState,useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from"react-native-vector-icons/MaterialIcons"
import ApiService from "../api/ApiService";
import useConditionWrapper from "../hooks/useConditionWrapper";
import useApi from "../hooks/useApi";

const SurveyPage = (props) => {
  const navigation = useNavigation();
  const [isEditable, setIsEditable] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [id,setId]=useState("")
  const inputRef = useRef(null);

  const [departmentContact, setDepartmentContact] = useState([
    {
      contactId: "",
      designation: "",
      fullName: "",
      contactNumber: "",
      email: "",
    },
  ]);
  const [mainTanks, setMainTanks] = useState([
    {
      tankId: "",
      tankCapacity: "",
      inletPipeType: "",
      inletPipeSize: "",
      outletPipeType: "",
      outletPipeSize: "",
      supplyingAgency: "",
    },
  ]);
  const apiWrapper = useConditionWrapper();

  const areaId = props.route.params.areaId;
  const {
    firstLoad,
    loading,
    data: area,
    reload,
  } = useApi(
    async () =>
      apiWrapper(async () => {
        const res = await ApiService.getArea(areaId);
        if (res.data.contact.length > 0) {
          res.data.contact.map((item) => {
            departmentContact.push({
              fullName: item.fullName,
              contactNumber: item.contactNumber,
              designation: item.designation,
              email: item.email,
              contactId: item._id,
            });
          });
          setDepartmentContact(departmentContact.reverse());
        }
        if (res.data.mainTank.length > 0) {
          res.data.mainTank.map((item) => {
            mainTanks.push({
              tankId: item._id,
              tankCapacity: item.tankCapacity,
              inletPipeType: item.inletPipeType,
              inletPipeSize: item.inletPipeSize,
              outletPipeType: item.outletPipeType,
              outletPipeSize: item.outletPipeSize,
              supplyingAgency: item.supplyingAgency,
            });
          });
          setMainTanks(mainTanks.reverse());
        }
        return res.data;
      }),
    []
  );

  const handleButtonPress = (ID) => {
    setId(ID)
    // Set the cursor position to the end of the input field
    inputRef.current?.setSelection(inputValue.length);
  };

  const insets = useSafeAreaInsets();

  const handleMainTankAdd = async (index) => {
    setMainTanks([
      ...mainTanks,
      {
        tankCapacity: "",
        inletPipeSize: "",
        outletPipeType: "",
        outletPipeSize: "",
        supplyingAgency: "",
      },
    ]);
    await ApiService.addMainTank(
      mainTanks[index].tankCapacity,
      mainTanks[index].inletPipeType,
      mainTanks[index].inletPipeSize,
      mainTanks[index].outletPipeType,
      mainTanks[index].outletPipeSize,
      mainTanks[index].supplyingAgency,
      mainTanks[index].tankId,
      props.route.params.areaId
    );
  };

  const handleMainTankRemove = (index) => {
    const list = [...mainTanks];
    list.splice(index, 1);
    setMainTanks(list);
  };

  const handelContactAdd = async (index) => {
    setDepartmentContact([
      ...departmentContact,
      {
        sNo: "",
        designation: "",
        name: "",
        contactNumber: "",
        email: "",
      },
    ]);
    await ApiService.addAreaContact(
      departmentContact[index].fullName,
      departmentContact[index].designation,
      departmentContact[index].contactNumber,
      departmentContact[index].email,
      departmentContact[index].contactId,
      props.route.params.areaId
    );
  };

  const handelContactRemove = (index) => {
    const list = [...departmentContact];
    list.splice(index, 1);
    setDepartmentContact(list);
  };

  const handelSubmit = async () => {
    try {
      const tankIds = [];
      mainTanks.map((item) => {
        tankIds.push(`${item.tankId}`);
      });
      navigation.push("step2", { areaId: props.route.params.areaId, tankIds });
    } catch (err) {
      console.log(err.message);
    }
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
          Survey
        </Text>
      </View>
      <ScrollView style={{ paddingTop: 20, paddingHorizontal: 20 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
          Department Contact Details
        </Text>
        {departmentContact.map((item, index) => (
          <View
            style={{
              paddingTop: 10,
              paddingBottom: departmentContact.length - 1 === index ? 50 : 0,
            }}
            key={index}
          >
            <Text style={{ fontWeight: "bold" }}>Contact {index + 1}</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 5,
              }}
            >
              <View style={{ width: "48%" }}>
                <Text>Name</Text>
                <TextInput
                  value={item.fullName}
                  editable={item.contactId===id?true:false}
                  ref={inputRef}
                  style={{ borderWidth: 0.5, paddingLeft: 5 }}
                  onChangeText={(text) => {
                    const list = [...departmentContact];
                    list[index].fullName = text;
                    setDepartmentContact(list);
                  }}
                />
              </View>
              <View style={{ width: "48%" }}>
                <Text>Designation</Text>
                <TextInput
                  value={item.designation}
                  editable={item.contactId===id?true:false}
                  ref={inputRef}
                  style={{ borderWidth: 0.5, paddingLeft: 5 }}
                  onChangeText={(text) => {
                    const list = [...departmentContact];
                    list[index].designation = text;
                    setDepartmentContact(list);
                  }}
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
              <View style={{ width: "48%" }}>
                <Text>Contact Number</Text>
                <TextInput
                  style={{ borderWidth: 0.5, paddingLeft: 5 }}
                  value={item.contactNumber}
                  editable={item.contactId===id?true:false}
                  ref={inputRef}
                  onChangeText={(text) => {
                    const list = [...departmentContact];
                    list[index].contactNumber = text;
                    setDepartmentContact(list);
                  }}
                />
              </View>
              <View style={{ width: "48%" }}>
                <Text>Email</Text>
                <TextInput
                  value={item.email}
                  editable={item.contactId===id?true:false}
                  ref={inputRef}
                  style={{ borderWidth: 0.5, paddingLeft: 5 }}
                  onChangeText={(text) => {
                    const list = [...departmentContact];
                    list[index].email = text;
                    setDepartmentContact(list);
                  }}
                />
              </View>
            </View>
            {item.contactId === "" ? (
              <View style={{ flexDirection: "row" }}>
                {departmentContact.length !== 1 && (
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#2874f0",
                      padding: 10,
                      width: 100,
                      alignItems: "center",
                      borderRadius: 5,
                      marginRight: 5,
                    }}
                    onPress={() => handelContactRemove(index)}
                  >
                    <Text style={{ color: "#fff" }}>Remove</Text>
                  </TouchableOpacity>
                )}
                {departmentContact.length - 1 === index && (
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#2874f0",
                      padding: 10,
                      width: 100,
                      alignItems: "center",
                      borderRadius: 5,
                    }}
                    onPress={() => handelContactAdd(index)}
                  >
                    <Text style={{ color: "#fff" }}>Add More</Text>
                  </TouchableOpacity>
                )}
              </View>
            ) : (
              <View style={{flexDirection:"row"}}>
                <TouchableOpacity
                  style={{
                    marginVertical: 5,
                    backgroundColor: "#2874f0",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingVertical: 7,
                    borderRadius: 5,
                    paddingHorizontal:10,
                    flexDirection:"row"
                  }}
                  onPress={()=>handleButtonPress(item.contactId)}
                >
                  <Feather name="edit" size={20} color="#fff"/>
                  <Text style={{color:"#fff",paddingLeft:5}}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    marginVertical: 5,
                    backgroundColor: "#2874f0",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingVertical: 7,
                    borderRadius: 5,
                    paddingHorizontal:10,
                    flexDirection:"row",
                    marginLeft:10
                  }}
                >
                  <MaterialIcons name="delete-outline" size={20} color="#fff"/>
                  <Text style={{color:"#fff",paddingLeft:5}}>Delete</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        ))}
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>Main Tanks</Text>
        {mainTanks.map((item, index) => (
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
                justifyContent: "space-between",
                paddingVertical: 5,
                flexWrap: "wrap",
              }}
            >
              <View style={{ width: "28%" }}>
                <Text>Tank Capacity</Text>
                <TextInput
                  value={item.tankCapacity}
                  style={{ borderWidth: 0.5, paddingLeft: 5 }}
                  onChangeText={(text) => {
                    const list = [...mainTanks];
                    list[index].tankCapacity = text;
                    setMainTanks(list);
                  }}
                />
              </View>
              <View style={{ width: "28%" }}>
                <Text>Inlet Pipe Type</Text>
                <TextInput
                  value={item.inletPipeType}
                  style={{ borderWidth: 0.5, paddingLeft: 5 }}
                  onChangeText={(text) => {
                    const list = [...mainTanks];
                    list[index].inletPipeType = text;
                    setMainTanks(list);
                  }}
                />
              </View>
              <View style={{ width: "28%" }}>
                <Text>Inlet Pipe Size</Text>
                <TextInput
                  value={item.inletPipeSize}
                  style={{ borderWidth: 0.5, paddingLeft: 5 }}
                  onChangeText={(text) => {
                    const list = [...mainTanks];
                    list[index].inletPipeSize = text;
                    setMainTanks(list);
                  }}
                />
              </View>
              <View style={{ width: "28%" }}>
                <Text>Outlet Pipe Type</Text>
                <TextInput
                  value={item.outletPipeType}
                  style={{ borderWidth: 0.5, paddingLeft: 5 }}
                  onChangeText={(text) => {
                    const list = [...mainTanks];
                    list[index].outletPipeType = text;
                    setMainTanks(list);
                  }}
                />
              </View>
              <View style={{ width: "28%" }}>
                <Text>Outlet Pipe Size</Text>
                <TextInput
                  value={item.outletPipeSize}
                  style={{ borderWidth: 0.5, paddingLeft: 5 }}
                  onChangeText={(text) => {
                    const list = [...mainTanks];
                    list[index].outletPipeSize = text;
                    setMainTanks(list);
                  }}
                />
              </View>
              <View style={{ width: "30%" }}>
                <Text>Supplying Agency</Text>
                <TextInput
                  value={item.supplyingAgency}
                  style={{ borderWidth: 0.5, paddingLeft: 5 }}
                  onChangeText={(text) => {
                    const list = [...mainTanks];
                    list[index].supplyingAgency = text;
                    setMainTanks(list);
                  }}
                />
              </View>
            </View>
            {item.tankId == "" ? (
              <View style={{ flexDirection: "row", paddingBottom: 30 }}>
                {mainTanks.length !== 1 && (
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#2874f0",
                      padding: 10,
                      width: 100,
                      alignItems: "center",
                      borderRadius: 5,
                      marginRight: 5,
                    }}
                    onPress={() => handleMainTankRemove(index)}
                  >
                    <Text style={{ color: "#fff" }}>Remove</Text>
                  </TouchableOpacity>
                )}
                {mainTanks.length - 1 === index && (
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#2874f0",
                      padding: 10,
                      width: 100,
                      alignItems: "center",
                      borderRadius: 5,
                    }}
                    onPress={() => handleMainTankAdd(index)}
                  >
                    <Text style={{ color: "#fff" }}>Add More</Text>
                  </TouchableOpacity>
                )}
              </View>
            ) : (
              ""
            )}
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={{
          position: "absolute",
          right: 30,
          bottom: 0,
          paddingVertical: 10,
          backgroundColor: "#90ee90",
          paddingHorizontal: 20,
          marginBottom: 10,
          borderRadius: 5,
        }}
        onPress={handelSubmit}
      >
        <Text style={{ fontWeight: "bold" }}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SurveyPage;

const styles = StyleSheet.create({});
