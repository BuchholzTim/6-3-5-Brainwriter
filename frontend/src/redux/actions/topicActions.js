import { SET_TOPICDATA } from "./types";

export const setTopicData = topicData => dispatch => {
  dispatch({
    type: SET_TOPICDATA,
    payload: {
      topic: topicData.topic,
      timePerRound: topicData.timePerRound
    }
  });
};
