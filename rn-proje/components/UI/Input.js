import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const Input = (props) => {
  return (
    <View tyle={styles.formControl}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput  {...props} style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  formControl: {
    width: "100%",
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  label: {
    fontFamily: "open-sans-bold",
    marginVertical: 8,
  },
});
export default Input;
