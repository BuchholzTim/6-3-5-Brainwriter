import { SET_USERDATA } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_USERDATA:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}
