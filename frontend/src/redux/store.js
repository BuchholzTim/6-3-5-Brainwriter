import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { production_build } from "../config/config";

const initialState = {};
const middleware = [thunk];
const store = production_build
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
