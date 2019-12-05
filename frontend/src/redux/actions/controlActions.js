import { SET_INTERVAL, SET_AFTER_ROUND } from "./types";

export const setPlayerInterval = interval => dispatch => {
  dispatch({
    type: SET_INTERVAL,
    payload: {
      playerListInterval: interval.playerListInterval,
      playerListIntervalStarted: interval.playerListIntervalStarted
    }
  });
};

export const setAfterRound = isAfterRound => dispatch => {
  dispatch({
    type: SET_AFTER_ROUND,
    payload: {
      isAfterRound: isAfterRound
    }
  });
};
