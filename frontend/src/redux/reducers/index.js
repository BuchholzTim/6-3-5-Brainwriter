import { combineReducers } from "redux";
import topicReducer from "./topicReducer";
import userReducer from "./userReducer";
import pageReducer from "./pageReducer";

export default combineReducers({
  topicReducer,
  userReducer,
  pageReducer
});
