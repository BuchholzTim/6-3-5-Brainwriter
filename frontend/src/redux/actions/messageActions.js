import { SET_PRIOR_MESSAGES, SET_CURRENT_MESSAGES } from "./types";

export const setCurrentMessages = messages => dispatch => {
  dispatch({
    type: SET_CURRENT_MESSAGES,
    payload: {
      currentMessages: messages.currentMessages
    }
  });
};

export const setPriorMessages = messages => dispatch => {
  dispatch({
    type: SET_PRIOR_MESSAGES,
    payload: {
      priorMessages: messages
    }
  });
};
