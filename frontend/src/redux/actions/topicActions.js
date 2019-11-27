import { SET_TOPIC_DATA } from "./types";
import { getMessages, createTopic, getTopic } from "../../axios/apiCalls";

export const setTopicData = topicData => dispatch => {
  const topic = createTopic(topicData.topic, topicData.timePerRound);

  dispatch({
    type: SET_TOPIC_DATA,
    payload: {
      joinCode: topic.joinCode,
      topic: topic.topic,
      timePerRound: topic.timePerRound
    }
  });
};

export const getTopicData = joinCode => dispatch => {
  //API-CALL
  const topic = getTopic(joinCode);

  dispatch({
    type: SET_TOPIC_DATA,
    payload: {
      joinCode: topic.joinCode,
      topic: topic.topic,
      timePerRound: topic.timePerRound
    }
  });
};
