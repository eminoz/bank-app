import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../../../components/UI/Button";
import Color from "../../../contants/Color";
const AuthScreen = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Getting Started</Text>
        <View>
          <Button
            style={styles.signButton}
            title="Sign in"
            onPress={() => {
              props.navigation.navigate("RegisterScreen");
            }}
          />
        </View>
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.text}> If you have already</Text>
        <Button
          style={styles.registerButton}
          title="Login"
          onPress={() => {
            props.navigation.navigate("LoginScreen");
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 6,
  },
  loginContainer: {
    marginTop: 10,
  },
  signButton: {
    backgroundColor: Color.accentColor,
    borderRadius: 20,
    marginHorizontal: "1%",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 20,

  },
  registerButton: {
    backgroundColor: Color.tweeterColor,
    borderRadius: 20,
    marginHorizontal: "1%",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 20,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom:10
  },
});
AuthScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Auth",
  };
};
export default AuthScreen;
