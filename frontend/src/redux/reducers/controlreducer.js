import { SET_INTERVAL } from "../actions/types";

const initialState = {
  playerListInterval: -1,
  playerListIntervalStarted: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_INTERVAL:
      return {
        ...state,
        playerListInterval: action.payload.playerListInterval,
        playerListIntervalStarted: action.payload.playerListIntervalStarted
      };
    default:
      return state;
  }
}
