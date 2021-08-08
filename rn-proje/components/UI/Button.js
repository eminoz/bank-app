import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Color from "../../contants/Color";
const Button = (props) => {
  return (
    <View>
      <TouchableOpacity
        style={{ ...styles.button, ...props.style }}
        onPress={props.onPress}
      >
        <Text style={styles.buttonText}>{props.title} </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    padding: 2,
  },
});

export default Button;
