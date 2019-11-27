import { SET_USER_DATA, SET_MESSAGES, INCREMENT_ROUND } from "../actions/types";

const initialState = {
  userName: "",
  messages: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        userName: action.payload.userName
      };
    case SET_MESSAGES:
      return {
        ...state,
        messages: action.payload.messages
      };
    case INCREMENT_ROUND:
      return {
        ...state,
        currentRound: state.currentRound + 1
      };
    default:
      return state;
  }
}
