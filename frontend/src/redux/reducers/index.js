import { combineReducers } from "redux";
import topicReducer from "./topicReducer";
import messageReducer from "./messageReducer";
import pageReducer from "./pageReducer";

export default combineReducers({
  topicReducer,
  messageReducer,
  pageReducer
});
