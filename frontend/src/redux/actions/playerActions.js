import { SET_USERDATA } from "./types";

export const setUserData = userData => dispatch => {
  dispatch({
    type: SET_USERDATA,
    payload: {
      joinCode: userData.joinCode,
      userName: userData.userName
    }
  });
};
