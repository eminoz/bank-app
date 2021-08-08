import { AsyncStorage } from "react-native";
export const SIGNUP = "SIGNUP";
export const LOGOUT = "LOGOUT";
export const AUTHENTICATE = "AUTHENTICATE";

export const authenticate = (userId, token) => {
  return (dispatch) => {
    dispatch({ type: AUTHENTICATE, userId: userId, token: token });
  };
};
export const signup = (email, password) => {
  return async (dispatch) => {
    console.log(email, password);
    const responce = await fetch("http://localhost:3000/api/auth/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const resData = await responce.json();
    console.log(resData);

    dispatch(authenticate(resData.localId, resData.idToken));
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:3000/api/auth/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const resData = await response.json();

    dispatch(authenticate(resData.localId, resData.idToken));
    console.log(resData.token, resData.userId);
    saveToMobileStorage(resData.token, resData.userId);
  };
};

const saveToMobileStorage = (token, userId) => {
  AsyncStorage.setItem(
    "userData",
    JSON.stringify({ token: token, userId, userId })
  );
};
export const logout = () => {
  AsyncStorage.removeItem("userData");
  return { type: LOGOUT };
};
