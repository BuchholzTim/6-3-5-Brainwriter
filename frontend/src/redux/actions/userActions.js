import { SET_USER_DATA } from "./types";
import {} from "../../axios/apiCalls";

export const setUserData = userData => dispatch => {
  dispatch({
    type: SET_USER_DATA,
    payload: {
      userName: userData.userName,
      socketID: userData.socketID
    }
  });
};
