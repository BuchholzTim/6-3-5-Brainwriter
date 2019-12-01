import { SET_CURRENT_MESSAGES, SET_PRIOR_MESSAGES } from "../actions/types";

const initialState = {
  priorMessages: [],
  currentMessages: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_MESSAGES:
      return {
        ...state,
        currentMessages: action.payload.currentMessages
      };
    case SET_PRIOR_MESSAGES: {
      return {
        ...state,
        priorMessages: action.payload.priorMessages
      };
    }
    default:
      return state;
  }
}
