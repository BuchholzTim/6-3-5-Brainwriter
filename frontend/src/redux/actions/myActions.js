import { MY_TYPE } from "./types";

export const action = () => dispatch => {
  console.log("Action being called");

  dispatch({ type: MY_TYPE, payload: "testData" });
};

// export function action() {
//   return function(dispatch) {
//     dispatch({ type: MY_TYPE, payload: "testData" });
//   };
// }
