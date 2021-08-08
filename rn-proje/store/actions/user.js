import User from "../../model/user";

export const GET_USER_INFO = "GET_USER_INFO";

export const fetchUser = () => {
  return async (dispatch, getState) => {

    const response = await fetch(
      "http://localhost:3000/api/user/useraccount/605a2ab89b7d680fc86ed351"
    );
    const user = response.json();

    dispatch({ type: GET_USER_INFO, user: user });
  };
};
