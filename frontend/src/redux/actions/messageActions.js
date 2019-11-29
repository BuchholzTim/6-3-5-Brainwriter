import { SET_MESSAGES, SET_PRIOR_MESSAGES } from "./types";

export const setMessages = messages => dispatch => {
  dispatch({
    type: SET_MESSAGES,
    payload: {
      messages: messages
    }
  });
};

export const setPriorMessages = priorMessages => dispatch => {
  dispatch({
    type: SET_PRIOR_MESSAGES,
    payload: {
      priorMessages: priorMessages
    }
  });
};
