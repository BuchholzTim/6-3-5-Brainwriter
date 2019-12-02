import { SET_INTERVAL } from "./types";

export const setPlayerInterval = interval => dispatch => {
  console.log(interval);

  dispatch({
    type: SET_INTERVAL,
    payload: {
      playerListInterval: interval.playerListInterval,
      playerListIntervalStarted: interval.playerListIntervalStarted
    }
  });
};
