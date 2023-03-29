import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PageWarperView from "../components/PageWarperView";

const Meter = () => {
  const reding = [
    {
      date: "01-01-2022",
      reding: "23.05m3",
    },
    {
      date: "01-02-2022",
      reding: "20.05m3",
    },
    {
      date: "01-03-2022",
      reding: "22.10m3",
    },
    {
      date: "01-04-2022",
      reding: "21.50m3",
    },
    {
      date: "01-05-2022",
      reding: "18.00m3",
    },
    {
      date: "01-06-2022",
      reding: "23.05m3",
    },
    {
      date: "01-07-2022",
      reding: "23.05m3",
    },
    {
      date: "01-08-2022",
      reding: "23.05m3",
    },
    {
      date: "01-09-2022",
      reding: "14.00m3",
    },
    {
      date: "01-10-2022",
      reding: "17.03m3",
    },
    {
      date: "01-11-2022",
      reding: "15.00m3",
    },
    {
      date: "01-12-2022",
      reding: "13.05m3",
    },
  ];
  return (
    <PageWarperView title="My Meter">
      <View
        style={{
          elevation: 5,
          flexDirection: "row",
          marginTop: 10,
          paddingHorizontal: 10,
          paddingVertical: 10,
          justifyContent: "space-between",
          backgroundColor:"#20d220",
          marginHorizontal:10
        }}
      >
        <Text style={{ width: "30%", fontWeight: "bold",color:"#fff" }}>S No.</Text>
        <Text style={{ width: "40%", fontWeight: "bold",color:"#fff"  }}>Date</Text>
        <Text style={{ width: "30%", fontWeight: "bold",color:"#fff"  }}>Uses</Text>
      </View>
      {reding.map((item, index) => (
        <View
          style={{
            elevation: 5,
            backgroundColor: "#fff",
            flexDirection: "row",
            marginVertical: 5,
            paddingHorizontal: 10,
            paddingVertical: 10,
            justifyContent: "space-between",
            borderRadius: 6,
            marginHorizontal:10
          }}
        >
          <Text style={{ width: "30%" }}>{index + 1}</Text>
          <Text style={{ width: "40%" }}>{item.date}</Text>
          <Text style={{ width: "30%" }}>{item.reding}</Text>
        </View>
      ))}
    </PageWarperView>
  );
};

export default Meter;

const styles = StyleSheet.create({});
