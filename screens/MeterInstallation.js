import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const MeterInstallation = () => {
  const insets = useSafeAreaInsets();
  const [meter, setMeter] = useState({
    installationDate: new Date().toISOString().split("T")[0],
    installationTime: new Date().toString().split(" ")[4],
    meterCompany: "",
    model: "",
    flowRate: "",
    startingReading: "",
    remarkGreenify: "",
    remarkCPWD: "",
  });

  let str = meter.installationDate

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <View style={{paddingHorizontal:10}}>
        <View style={{ flexDirection: "row", width: "100%", paddingTop: 10 }}>
          <View style={{ paddingRight: 10, width: "45%" }}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              Installation Date
            </Text>
            <TextInput
              value={meter.installationDate.split("-").reverse().join("-")}
              style={{ borderWidth: 0.5, width: "100%", paddingLeft: 5 }}
            />
          </View>
          <View style={{ paddingRight: 10, width: "45%" }}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              Installation Time
            </Text>
            <TextInput
              value={meter.installationTime}
              style={{ borderWidth: 0.5, width: "100%", paddingLeft: 5 }}
            />
          </View>
        </View>
        <View style={{ flexDirection: "row", width: "100%", paddingTop: 10 }}>
          <View style={{ paddingRight: 10, width: "38%" }}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              Meter Company
            </Text>
            <TextInput
              style={{ borderWidth: 0.5, width: "100%", paddingLeft: 5 }}
            />
          </View>
          <View style={{ paddingRight: 10, width: "30%" }}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>Model</Text>
            <TextInput
              style={{ borderWidth: 0.5, width: "100%", paddingLeft: 5 }}
            />
          </View>
          <View style={{ paddingRight: 10, width: "30%" }}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>Flow Rate</Text>
            <TextInput
              style={{ borderWidth: 0.5, width: "100%", paddingLeft: 5 }}
            />
          </View>
        </View>
        <View style={{ flexDirection: "row", width: "100%", paddingTop: 10 }}>
          <View style={{ paddingRight: 10, width: "35%" }}>
            <Text style={{ fontWeight: "bold", fontSize: 15 }}>
              Starting Reading
            </Text>
            <TextInput
              style={{ borderWidth: 0.5, width: "100%", paddingLeft: 5 }}
            />
          </View>
        </View>
        <Text style={{ fontWeight: "bold", fontSize: 15,paddingVertical:10 }}>Remark For Greenify</Text>
        <TextInput
          style={[
            styles.input,
            {
              height: 100,
              paddingVertical: 10,
              textAlignVertical: "top",
            },
          ]}
          multiline={true}
        />
         <Text style={{ fontWeight: "bold", fontSize: 15,paddingVertical:10 }}>Remark For CPWD</Text>
        <TextInput
          style={[
            styles.input,
            {
              height: 100,
              paddingVertical: 10,
              textAlignVertical: "top",
            },
          ]}
          multiline={true}
        />
      </View>
    </View>
  );
};

export default MeterInstallation;

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 44,
    backgroundColor: "#fff",
    borderRadius: 6,
    paddingHorizontal: 10,
  },
});
