import { SET_TOPIC_DATA, SET_USER_DATA } from "./types";
import { getMessages } from "../../axios/apiCalls";

export const setUserData = userData => dispatch => {
  dispatch({
    type: SET_USER_DATA,
    payload: {
      userName: userData.userName
    }
  });
};

export const setTopicData = topicData => dispatch => {
  dispatch({
    type: SET_TOPIC_DATA,
    payload: {
      joinCode: topicData.joinCode,
      topic: topicData.topic,
      timePerRound: topicData.timePerRound
    }
  });
};

export const getTopicData = joinCode => dispatch => {
  //API-CALL
  const topic = "Warum ist die Banane Krumm?";
  const timePerRound = 210;

  const { messages, num_ideas } = getMessages();

  dispatch({
    type: SET_TOPIC_DATA,
    payload: {
      joinCode: joinCode,
      topic: topic,
      timePerRound: timePerRound,
      messages: messages,
      num_ideas: num_ideas
    }
  });
};
