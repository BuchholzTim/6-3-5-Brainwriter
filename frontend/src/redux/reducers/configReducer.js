import { SET_CURRENT_ROUND, SET_MAX_ROUNDS } from "../actions/types";

const initialState = {
  numIdeas: 3,
  maxRounds: 6,
  currentRound: 1,
  timeBetweenRounds: 10
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_ROUND:
      return {
        ...state,
        currentRound: action.payload.currentRound
      };
    case SET_MAX_ROUNDS:
      return {
        ...state,
        maxRounds: action.payload.maxRounds
      };
    default:
      return state;
  }
}
