import { SET_AUTHOR_DATA } from "../actions/types";

const initialState = {
  userName: "",
  id: -1
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHOR_DATA:
      return {
        ...state,
        userName: action.payload.userName,
        id: action.payload.id
      };
    default:
      return state;
  }
}
