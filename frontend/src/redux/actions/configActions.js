import { INCREMENT_ROUND } from "./types";

export const incrementRound = () => dispatch => {
  dispatch({
    type: INCREMENT_ROUND
  });
};
