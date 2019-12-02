import { SET_INTERVAL } from "./types";

export const setPlayerInterval = interval => dispatch => {
  dispatch({
    type: SET_INTERVAL,
    payload: {
      playerListInterval: interval.playerListInterval,
      playerListIntervalStarted: interval.playerListIntervalStarted
    }
  });
};
