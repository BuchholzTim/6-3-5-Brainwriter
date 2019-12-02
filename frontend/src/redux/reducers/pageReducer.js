import { SET_PLAYER_PAGE, SET_TOPIC_PAGE } from "../actions/types";

const initialState = {
  playerPage: "",
  topicPage: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_PLAYER_PAGE:
      return {
        ...state,
        playerPage: action.payload.playerPage
      };
    case SET_TOPIC_PAGE:
      return {
        ...state,
        topicPage: action.payload.topicPage
      };
    default:
      return state;
  }
}
