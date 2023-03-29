import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import PageWarperView from "../components/PageWarperView";

const Profile = () => {
  const userInfo = [
    {
      title: "My Detail",
    },
  ];
  return (
    <PageWarperView title="Profile" padding={false}>
      <View style={{ height: "40%", paddingHorizontal: 16 }}>
        <View style={styles.bigCircle} />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            height: 86,
            backgroundColor: "#ffc515",
            borderRadius: 10,
            paddingLeft: 10,
            marginTop: 40,
            //justifyContent:"space-between"
          }}
        >
          <View
            style={{
              height: 70,
              backgroundColor: "#d5d5d5",
              width: 70,
              borderRadius: 50,
            }}
          />
          <View style={{ paddingLeft: 10 }}>
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
              John Deo
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingTop: 10,
              }}
            >
              <Text style={{ color: "#fff", paddingLeft: 5, fontSize: 12 }}>
                Taurus, 20 Sept 2022
              </Text>
            </View>
          </View>
          {/* <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#fff",
                justifyContent: "space-between",
                marginRight: 15,
                borderRadius: 5,
                paddingHorizontal: 7,
                paddingVertical: 2,
              }}
            >
              <MaterialIcons name="edit" color={"#2097d2"} size={16} />
              <Text
                style={{ color: "#2097d2", fontSize: 16 }}
                //onPress={() => navigation.navigate("edit-profile")}
              >
                Edit
              </Text>
            </View> */}
        </View>
      </View>
      <View style={{ paddingTop: 75, paddingHorizontal: 16,paddingBottom:22 }}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>My Detail</Text>
        <View style={{ paddingTop: 10 }}>
          <Text style={{ fontSize: 16 }}>Register No</Text>
          <Text
            style={{
              paddingVertical: 5,
              borderBottomWidth: 1,
              borderBottomColor: "silver",
              fontWeight:"bold",
              fontSize: 16
            }}
          >
            ASD34K56
          </Text>
          <Text style={{ fontSize: 16 }}>AAN</Text>
          <Text
            style={{
              paddingVertical: 5,
              borderBottomWidth: 1,
              borderBottomColor: "silver",
              fontWeight:"bold",
              fontSize: 16
            }}
          >
            ASD34K56
          </Text>
        </View>
      </View>
    </PageWarperView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  bigCircle: {
    backgroundColor: "#2097d2",
    position: "absolute",
    width: 640,
    height: 640,
    borderRadius: 720,
    top: -440,
    left: -203,
  },
});
