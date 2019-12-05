import { SET_INTERVAL, SET_AFTER_ROUND, SET_TIMER_INTERVAL } from "./types";

export const setPlayerInterval = interval => dispatch => {
  dispatch({
    type: SET_INTERVAL,
    payload: {
      playerListInterval: interval.playerListInterval,
      playerListIntervalStarted: interval.playerListIntervalStarted
    }
  });
};

export const setTimerInterval = timerInterval => dispatch => {
  dispatch({
    type: SET_TIMER_INTERVAL,
    payload: {
      timerInterval: timerInterval
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
