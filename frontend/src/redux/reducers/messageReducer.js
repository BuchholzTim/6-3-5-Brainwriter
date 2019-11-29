import { SET_MESSAGES, SET_PRIOR_MESSAGES } from "../actions/types";

const initialState = {
  priorMessages: "",
  messages: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_MESSAGES:
      return {
        ...state,
        messages: action.payload.messages
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
