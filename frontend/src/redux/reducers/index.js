import { combineReducers } from "redux";
import playerReducer from "./playerReducer";
import topicReducer from "./topicReducer";

export default combineReducers({
  playerReducer,
  topicReducer
});
