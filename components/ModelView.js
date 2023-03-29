import { StyleSheet, Text, View } from "react-native";

import React from "react";
import ReactNativeModal from "react-native-modal";

const ModelView = (props) => {
  return (
    <ReactNativeModal
      isVisible={props.open}
      animationIn="zoomIn"
      animationOut="zoomOut"
      style={{justifyContent:"center",alignItems:"center"}}
    >
      <View style={styles.rnView}>{props.children}</View>
    </ReactNativeModal>
  );
};

export default ModelView;

const styles = StyleSheet.create({
  rnView: {
    width:"50%",
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 14,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
