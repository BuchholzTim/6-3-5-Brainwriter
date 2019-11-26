import { SET_TOPICDATA } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_TOPICDATA:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}
