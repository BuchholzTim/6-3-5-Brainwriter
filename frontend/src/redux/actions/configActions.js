import { SET_CURRENT_ROUND, SET_MAX_ROUNDS } from "./types";

export const setCurrentRound = currentRound => dispatch => {
  dispatch({
    type: SET_CURRENT_ROUND,
    payload: {
      currentRound: currentRound
    }
  });
};

export const setMaxRounds = maxRounds => dispatch => {
  dispatch({
    type: SET_MAX_ROUNDS,
    payload: {
      maxRounds: maxRounds
    }
  });
};
