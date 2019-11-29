import {
  SET_TOPIC_DATA,
  SET_MESSAGES,
  INCREMENT_ROUND,
  SET_INTERVAL
} from "../actions/types";

const initialState = {
  id: -1,
  joinCode: "",
  timePerRound: -1,
  topic: "",
  messages: "",
  userName: "",
  num_ideas: 3,
  rounds: 6,
  currentRound: 1,
  interval: -1,
  intervalStarted: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_TOPIC_DATA:
      return {
        ...state,
        id: action.payload.id,
        joinCode: action.payload.joinCode,
        topic: action.payload.topic,
        timePerRound: action.payload.timePerRound,
        userName: action.payload.userName
      };
    // case SET_MESSAGES:
    //   return {
    //     ...state,
    //     messages: action.payload.messages
    //   };
    case INCREMENT_ROUND:
      return {
        ...state,
        currentRound: state.currentRound + 1
      };
    case SET_INTERVAL:
      return {
        ...state,
        interval: action.payload.interval,
        intervalStarted: action.payload.intervalStarted
      };
    default:
      return state;
  }
}
