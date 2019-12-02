import { SET_AUTHOR_DATA } from "./types";

export const setAuthorData = author => dispatch => {
  dispatch({
    type: SET_AUTHOR_DATA,
    payload: {
      userName: author.userName,
      id: author.id
    }
  });
};
