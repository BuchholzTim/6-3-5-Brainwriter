import { SET_TOPIC_PAGE, SET_PLAYER_PAGE } from "./types";

export const setTopicPage = page => dispatch => {
  dispatch({
    type: SET_TOPIC_PAGE,
    payload: {
      topicPage: page
    }
  });
};

export const setPlayerPage = page => dispatch => {
  dispatch({
    type: SET_PLAYER_PAGE,
    payload: {
      playerPage: page
    }
  });
};
