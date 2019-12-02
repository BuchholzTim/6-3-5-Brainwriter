import { combineReducers } from "redux";

import authorReducer from "./authorReducer";
import configReducer from "./configReducer";
import controlReducer from "./controlReducer";
import messageReducer from "./messageReducer";
import pageReducer from "./pageReducer";
import topicReducer from "./topicReducer";

export default combineReducers({
  authorReducer,
  configReducer,
  controlReducer,
  messageReducer,
  pageReducer,
  topicReducer
});
