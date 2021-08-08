import React, { useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";

import Input from "../../../components/UI/Input";
import Button from "../../../components/UI/Button";
import * as userAction from "../../../store/actions/auth";
import { useDispatch } from "react-redux";
import Color from "../../../contants/Color";
const RegisterScreen = (props) => {
  const dispatchRedux = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {
    dispatchRedux(userAction.signup(email, password));
  };

  return (
    <View style={(styles.screen, styles.gradient, styles.authContainer)}>
      <Input
        id="email"
        label="E-Mail"
        keyboardType="email-address"
        required
        email
        autoCapitalize="none"
        onChangeText={(value) => {
          setEmail(value);
        }}
      />

      <Input
        id="password"
        label="Password"
        keyboardType="default"
        required
        autoCapitalize="none"
        secureTextEntry={true}
        initialValue=""
        onChangeText={(value) => {
          setPassword(value);
        }}
      />
      <Button style={styles.button} title="Register" onPress={registerUser} />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  authContainer: {
    width: "100%",
    maxWidth: 400,
    maxHeight: 400,
    padding: 20,
  },

  button: {
    backgroundColor: Color.accentColor,
    padding: 10,
    marginTop: 20,
    borderRadius: 30,
    marginLeft: 10,
  },
});
export default RegisterScreen;
