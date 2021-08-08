import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import Navigator from "./navigations/Navigator";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import authReducer from "./store/reducers/auth";
import userReducer from "./store/reducers/user";
import * as Font from "expo-font";
import ReduxThunk from "redux-thunk";
import NavigationContainer from './navigations/NavigationContainer'
const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
const fetchFont = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFont}
        onFinish={() => {
          setFontLoaded(true);
        }}
        onError={console.warn}
      />
    );
  }
  return (
    <Provider store={store}>
      <NavigationContainer />
    </Provider>
  );
}
