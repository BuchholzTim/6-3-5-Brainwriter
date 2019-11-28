import {
  SET_TOPIC_DATA,
  SET_MESSAGES,
  INCREMENT_ROUND
} from "../actions/types";

const initialState = {
  joinCode: "",
  timePerRound: "",
  topic: "",
  messages: "",
  userName: "",
  num_ideas: 3,
  rounds: 6,
  currentRound: 1
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_TOPIC_DATA:
      return {
        ...state,
        topic: action.payload.topic,
        timePerRound: action.payload.timePerRound,
        joinCode: action.payload.joinCode,
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
