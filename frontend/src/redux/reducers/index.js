import { combineReducers } from "redux";
import topicReducer from "./topicReducer";
import pageReducer from "./pageReducer";

export default combineReducers({
  topicReducer,
  pageReducer
});
