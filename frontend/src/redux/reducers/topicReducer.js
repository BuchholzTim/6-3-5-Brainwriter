import { SET_TOPIC_DATA, SET_PLAYERS } from "../actions/types";

const initialState = {
  id: -1,
  topic: "",
  joinCode: "",
  timePerRound: -1,
  players: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_TOPIC_DATA:
      return {
        ...state,
        id: action.payload.id,
        joinCode: action.payload.joinCode,
        topic: action.payload.topic,
        timePerRound: action.payload.timePerRound
      };
    case SET_PLAYERS:
      return { ...state, players: action.payload.players };
    default:
      return state;
  }
}
