import {
  SET_USER_DATA,
  SET_TOPIC_DATA,
  SET_MESSAGES,
  INCREMENT_ROUND
} from "../actions/types";

const initialState = {
  userName: "",
  joinCode: "",
  timePerRound: "",
  topic: "",
  messages: "",
  num_ideas: "",
  rounds: "",
  currentRound: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_TOPIC_DATA:
      return {
        ...state,
        topic: action.payload.topic,
        timePerRound: action.payload.timePerRound,
        joinCode: action.payload.joinCode,
        messages: action.payload.messages,
        num_ideas: action.payload.num_ideas,
        rounds: 6,
        currentRound: 1
      };
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
