import { MY_TYPE } from "../actions/types";

const initialState = {
  items: [],
  data: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case MY_TYPE:
      console.log(`${MY_TYPE}`);
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}
