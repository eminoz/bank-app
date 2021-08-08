import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";


import Colors from "../contants/Color";
import StartupScreen from "../screens/StartupScreen";
import RegisterScreen from "../screens/user/auth/RegisterScreen";
import LoginScreen from "../screens/user/auth/LoginScreen";
import AuthScreen from "../screens/user/auth/AuthScreen";
import HomePage from "../screens/home/HomePage";
const deafaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTintStyle: {
    fontFamily: "open-sans-bold",
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans",
  },
  headerTintColor: Platform.OS === "android" ? "whote" : Colors.primaryColor,
};
// const ProductNavigator = createStackNavigator(
//   { Opening: OpeningPage },
//   {
//     navigationOptions: {
//       drawerIcon: (drawerConfig) => {
//         <Ionicons
//           name={Platform.OS === "android" ? "md-cart" : "ios-cart"}
//           size={30}
//           color={drawerConfig.tintColor}
//         />;
//       },
//     },
//   },
//   {
//     defaultNavigationOptions: deafaultNavOptions,
//   }
// );

const AuthOpening = createStackNavigator(
  {
    AuthScreen: AuthScreen,
    LoginScreen: LoginScreen,
    RegisterScreen: RegisterScreen,
  },
  {
    defaultNavigationOptions: deafaultNavOptions,
  }
);
const mainScreen =createStackNavigator({
  HomeScreen: HomePage,
})

const MainNavigator = createSwitchNavigator({
  Startup: StartupScreen,
  Auth: AuthOpening,
  Home: mainScreen,
});

export default createAppContainer(MainNavigator);
