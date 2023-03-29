import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import useConditionWrapper from "../hooks/useConditionWrapper";
import useApi from "../hooks/useApi";
import ApiService from "../api/ApiService";

const Survey = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  // const [task, setTask] = useState([]);

  const apiWrapper = useConditionWrapper();

  const {
    firstLoad,
    loading,
    data: task,
    reload,
  } = useApi(
    async () =>
      apiWrapper(async () => {
        const res = await ApiService.getSurvey();
        return res.data;
      }),
    []
  );

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
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 10,
        }}
      >
        <View>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#b232b2" }}>
            Survey
          </Text>
        </View>
      </View>
      <ScrollView style={{ paddingHorizontal: 10, paddingTop: 10 }}>
        {task.map((item, index) => (
          <View
            style={{
              backgroundColor: "#fff",
              marginBottom: 20,
              padding: 10,
              elevation: 5,
              borderRadius: 5,
            }}
            key={index}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingBottom: 10,
                alignItems: "center",
                borderBottomWidth: 0.5,
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                {item.surveyName}
              </Text>
              <View
                style={{
                  backgroundColor: "#f0f9ff",
                  padding: 7,
                  borderRadius: 25,
                }}
              >
                {item.icon}
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                borderBottomWidth: 0.5,
                flexWrap: "wrap",
                paddingVertical: 10,
              }}
            >
              <Text style={{ display: "flex",width:"50%" }}>
                <Text style={{ fontWeight: "bold" }}>State:- </Text>
                {item.areaId.stateName}
              </Text>
              <Text style={{ display: "flex",width:"50%" }}>
                <Text style={{ fontWeight: "bold" }}>City:- </Text>
                {item.areaId.cityName}
              </Text>
              <Text style={{ display: "flex",width:"50%" }}>
                <Text style={{ fontWeight: "bold" }}>Region:- </Text>
                {item.areaId.regionName}
              </Text>
              <Text style={{ display: "flex",width:"50%" }}>
                <Text style={{ fontWeight: "bold" }}>Circle:- </Text>
                {item.areaId.circleName}
              </Text>
              <Text style={{ display: "flex",width:"50%" }}>
                <Text style={{ fontWeight: "bold" }}>Zone:- </Text>
                {item.areaId.zoneName}
              </Text>
              <Text style={{ display: "flex",width:"50%" }}>
                <Text style={{ fontWeight: "bold" }}>Division:- </Text>
                {item.areaId.divisionName}
              </Text>
              <Text style={{ display: "flex",width:"50%" }}>
                <Text style={{ fontWeight: "bold" }}>Subdivision:- </Text>
                {item.areaId.subdivisionName}
              </Text>
              <Text style={{ display: "flex",width:"50%" }}>
                <Text style={{ fontWeight: "bold" }}>Pincode:- </Text>
                {item.areaId.pincode}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingTop: 10,
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 18, color: "red" }}>
                Dead Line
              </Text>
              <Text style={{ fontWeight: "bold" }}>{item.deadline}</Text>
            </View>
            <TouchableOpacity
              style={{
                marginVertical: 5,
                backgroundColor: "#2097d2",
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 7,
                borderRadius: 5,
              }}
              onPress={async () => {
                if (item.startedDate === "" || item.startedDate === null) {
                  await ApiService.updateSurvey(item._id);
                }
                navigation.push("Start-Survey", { areaId: item._id });
              }}
            >
              <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 17 }}>
                Start
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Survey;

const styles = StyleSheet.create({});
