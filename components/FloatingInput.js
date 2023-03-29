import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState,useEffect } from "react";

const FloatingInput = (props) => {
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsFocused(!isFocused);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [isFocused]);

  const handelFocus = () => {
     setIsFocused(true);
    // setTimeout(() => {
    //   setIsFocused(!isFocused);
    // }, 500);
  };
  const handelBlur = () => {
    setIsFocused(false);
  };

  const labelStyle = {
    position: "absolute",
    left: 0,
    top: !isFocused ? 18 : 0,
    fontSize: !isFocused ? 20 : 14,
    color: !isFocused ? "#aaa" : "#000",
  };
  return (
    <View style={{paddingTop:18}}>
      <Text style={labelStyle} >{props.label} </Text>
      <TextInput
        style={{
          height: 26,
          fontSize: 20,
          color: "#000",
          borderBottomWidth: 1,
        }}
        onFocus={handelFocus}
        onBlur={handelBlur}
        onChangeText={text=>props.setUserName(text)}
      />
    </View>
  );
};

export default FloatingInput;

const styles = StyleSheet.create({});
