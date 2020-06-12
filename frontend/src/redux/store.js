import { convertStringToBoolean } from "../tools/tools";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "remote-redux-devtools";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};
const middleware = [thunk]; //
/* If Production-Build is set to true don't use Redux-Dev-Tools
 * If it is set to true -> Check if Safari is used.
 * Safari doesn't support the native Dev-Tools so we use the remote-devtools on: http://remotedev.io/local
 * If Safari is set to false -> Use Dev-Tool-Extension: http://extension.remotedev.io/#installation
 */
let store;

if (convertStringToBoolean(process.env.REACT_APP_PRODUCTION_BUILD)) {
  store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware))
  );
} else if (convertStringToBoolean(process.env.REACT_APP_SAFARI)) {
  store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
} else {
  store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}
export default store;
