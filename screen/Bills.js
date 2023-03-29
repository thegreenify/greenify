import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons, Feather } from "react-native-vector-icons";
import PageWarperView from "../components/PageWarperView";

const Meters = () => {
  const arr = [
    {
      status: "Unpaid",
    },
    {
      status: "Paid",
    },
  ];
  return (
    <PageWarperView title="My Bills">
      <View style={{ paddingTop: 10 }}>
        {arr.map((item, index) => (
          <View
            style={{
              backgroundColor: "#fff",
              paddingTop: 20,
              paddingHorizontal: 10,
              borderRadius: 6,
              elevation: 5,
              shadowColor: "grey",
              marginBottom: 10,
            }}
            key={index}
          >
            <View
              style={{
                alignSelf: "flex-end",
                borderWidth: 0.5,
                paddingVertical: 3.5,
                borderRadius: 25,
                paddingHorizontal: 10,
                borderColor: item.status === "Unpaid" ? "red" : "green",
                marginBottom: 10,
              }}
            >
              <Text
                style={{ color: item.status === "Unpaid" ? "red" : "green" }}
              >
                {item.status}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
                borderTopWidth: 0.5,
              }}
            >
              <TouchableOpacity
                style={{
                  width: "50%",
                  alignItems: "center",
                  borderRightWidth: 0.5,
                  paddingVertical: 10,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.status === "Paid" && (
                  <Feather
                    name="check-circle"
                    size={20}
                    color={"green"}
                    style={{ paddingRight: 10 }}
                  />
                )}
                <Text style={{ fontWeight: "bold", color:item.status === "Unpaid"?"red":"green"}}>
                  {item.status === "Unpaid" ? "Pay Now" : "Paid"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "50%",
                  paddingVertical: 10,
                }}
              >
                <MaterialCommunityIcons
                  name="file-download-outline"
                  size={20}
                  color={item.status === "Unpaid" ? "silver" : "black"}
                />
                <Text
                  style={{
                    fontWeight: "bold",
                    color: item.status === "Unpaid" ? "silver" : "black",
                  }}
                >
                  Download PDF
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </PageWarperView>
  );
};

export default Meters;

const styles = StyleSheet.create({});
