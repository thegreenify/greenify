import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  Fontisto,
  FontAwesome5,
  Entypo,
  MaterialIcons,
  FontAwesome,
} from "react-native-vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import PageWarperView from "../components/PageWarperView";
import { useNavigation } from "@react-navigation/native";
import { createShimmerPlaceholder } from "react-native-shimmer-placeholder";
import LinearGradient from "expo-linear-gradient";

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const Home = () => {
  const navigation = useNavigation();
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState("date");
  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);

    let tempDate = new Date(currentDate);

    const month = tempDate.getMonth();
    let fDate =
      tempDate.getDate() + "-" + months[month] + "-" + tempDate.getFullYear();
    // setUser({ ...user, dateOfBirth: fDate });
    // setDate(fDate);
  };

  const meterData = [
    {
      title: "Kitchen",
      icon: <MaterialIcons name="kitchen" color="#2097d2" size={22} />,
    },
    {
      title: "Bathroom",
      icon: <FontAwesome name="bath" color="#2097d2" size={22} />,
    },
    {
      title: "Sink",
      icon: <FontAwesome5 name="sink" color="#2097d2" size={22} />,
    },
  ];

  return (
    <PageWarperView
      title="Welcome, John Deo"
      secondTitle="Save Water Save Earth"
      padding={true}
    >
      <View
        style={{
          backgroundColor: "#fff",
          marginTop: 20,
          paddingVertical: 20,
          paddingHorizontal: 10,
          borderRadius: 6,
          elevation: 5,
          shadowColor: "grey",
        }}
      >
        <View
          style={{
            paddingBottom: 10,
            borderBottomWidth: 0.5,
            borderBottomColor: "grey",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            Water Usage
          </Text>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              padding: 5,
              // borderWidth: 0.5,
              // borderRadius: 5,
              //borderColor:"grey"
            }}
            onPress={() => setShow(true)}
          >
            <Fontisto
              name="date"
              size={20}
              color="#2097d2"
              style={{ paddingRight: 10 }}
            />
            <Text>
              {date.toISOString().split("T")[0].split("-").reverse().join("-")}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View
            style={{
              width: "49.5%",
              borderRightWidth: 0.5,
              paddingTop: 10,
            }}
          >
            <Text
              style={{ fontWeight: "bold", paddingVertical: 10, fontSize: 15 }}
            >
              Today
            </Text>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
              }}
            >
              <FontAwesome5
                name="hand-holding-water"
                color="#2097d2"
                size={20}
              />
              <Text
                style={{ paddingLeft: 20, fontSize: 25, fontWeight: "bold" }}
              >
                11.5 m3
              </Text>
            </View>
          </View>
          <View style={{ width: "50%", paddingLeft: 10, paddingTop: 10 }}>
            <Text
              style={{ fontWeight: "bold", paddingVertical: 10, fontSize: 15 }}
            >
              This Month
            </Text>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
              }}
            >
              <FontAwesome5 name="water" color="#2097d2" size={20} />
              <Text
                style={{ paddingLeft: 20, fontSize: 25, fontWeight: "bold" }}
              >
                11.5 m3
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        // start={{ x: 0, y: 0 }}
        // end={{ x: 0.8, y: 0 }}
        // colors={["#aaff55", "#fff"]}
        style={{
          width: "100%",
          backgroundColor: "#d2f8d2",
          //backgroundColor: "#b0f3b0",
          borderRadius: 10,
          borderTopLeftRadius: 55,
          elevation: 5,
          shadowColor: "grey",
          marginBottom: 20,
          paddingVertical: 15,
          paddingHorizontal: 30,
          marginTop: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>
            Last Month Bill Payment
          </Text>
          <Text
            style={{
              color: "#2097d2",
              fontSize: 25,
              paddingVertical: 7,
              fontWeight: "bold",
            }}
          >
            ₹ 1800.75
          </Text>
          <Text>
            Last Date To Pay{" "}
            <Text style={{ color: "red" }}>
              {new Date().toISOString().split("T")[0]}
            </Text>
          </Text>
        </View>
        <TouchableOpacity
          style={{
            borderWidth: 0.5,
            borderColor: "red",
            paddingVertical: 5,
            borderRadius: 25,
            paddingHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "red" }}>Pay Now</Text>
          <MaterialIcons name="keyboard-arrow-right" size={20} color={"red"} />
        </TouchableOpacity>
      </View>
      {/* <ShimmerPlaceHolder style={{width:100,height:100,borderRadius:50}}>
      </ShimmerPlaceHolder> */}

      <View
        style={{
          backgroundColor: "#2097d2",
          paddingVertical: 20,
          paddingHorizontal: 10,
          borderRadius: 6,
          elevation: 5,
          shadowColor: "grey",
          flexDirection: "row",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 23, color: "#fff" }}>
          Bathroom Tap is ruining for last 4hr
        </Text>
      </View>
      <Text
        style={{ paddingTop: 10, fontWeight: "bold", borderBottomWidth: 0.5 }}
      >
        Total Meter's In The House And Uses
      </Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          paddingTop: 10,
          justifyContent: "space-between",
        }}
      >
        {meterData.map((item, index) => (
          <TouchableOpacity
            style={{
              width: "48%",
              backgroundColor: "#fff",
              borderRadius: 6,
              elevation: 5,
              shadowColor: "grey",
              marginBottom: 20,
              padding: 10,
              height: 150,
              justifyContent: "space-between",
            }}
            key={index}
            onPress={() => navigation.push("Meter")}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingBottom: 5,
                justifyContent: "space-between",
                borderBottomWidth: 0.5,
                borderBottomColor: "grey",
              }}
            >
              <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                {item.title}
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
            <Text style={{ fontWeight: "bold" }}>Water Used</Text>
            <View
              style={{
                paddingBottom: 20,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Entypo name="water" color="#2097d2" size={25} />
              <Text
                style={{ paddingLeft: 20, fontSize: 25, fontWeight: "bold" }}
              >
                5.5 m3
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          display="default"
          onChange={onChange}
        />
      )}
    </PageWarperView>
  );
};

export default Home;

const styles = StyleSheet.create({});
