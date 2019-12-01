import { INCREMENT_ROUND } from "../actions/types";

const initialState = {
  numIdeas: 3,
  rounds: 6,
  currentRound: 1
};

export default function(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_ROUND:
      return {
        ...state,
        config: {
          currentRound: state.config.currentRound + 1
        }
      };
    default:
      return state;
  }
}
