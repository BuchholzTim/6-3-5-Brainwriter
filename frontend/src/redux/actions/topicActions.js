import { SET_TOPIC_DATA } from "./types";

export const setTopicData = topic => dispatch => {
  dispatch({
    type: SET_TOPIC_DATA,
    payload: {
      id: topic.id,
      joinCode: topic.joinCode,
      topic: topic.topic,
      timePerRound: topic.timePerRound
    }
  });
};
