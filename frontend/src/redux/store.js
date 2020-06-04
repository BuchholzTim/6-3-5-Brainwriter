import { convertStringToBoolean } from "../tools/tools";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};
const middleware = [thunk];
const store = convertStringToBoolean(process.env.REACT_APP_DISABLE_REDUX_DEV)
  ? createStore(
      rootReducer,
      initialState,
      compose(applyMiddleware(...middleware))
    )
  : createStore(
      rootReducer,
      initialState,
      compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    );

export default store;
