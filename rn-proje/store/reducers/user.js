import { GET_USER_INFO } from "../actions/user";
import User from "../../model/user";
const initialState = {
  avaibleUser: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_INFO:
      return {
        avaibleUser: action.user,
      };

    default:
      return state;
  }
};
