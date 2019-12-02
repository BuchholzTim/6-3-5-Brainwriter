import { SET_ROUND } from "./types";

export const setRound = currentRound => dispatch => {
  dispatch({
    type: SET_ROUND,
    payload: {
      currentRound: currentRound
    }
  });
};
