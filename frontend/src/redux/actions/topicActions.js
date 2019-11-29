import {
  SET_TOPIC_DATA,
  SET_MESSAGES,
  INCREMENT_ROUND,
  SET_INTERVAL
} from "./types";

export const setTopicData = topicData => dispatch => {
  dispatch({
    type: SET_TOPIC_DATA,
    payload: {
      id: topicData.id,
      joinCode: topicData.joinCode,
      topic: topicData.topic,
      timePerRound: topicData.timePerRound,
      userName: topicData.userName
    }
  });
};

// export const setMessages = messages => dispatch => {
//   dispatch({
//     type: SET_MESSAGES,
//     payload: {
//       messages: messages
//     }
//   });
// };

export const incrementRound = () => dispatch => {
  dispatch({
    type: INCREMENT_ROUND
  });
};

export const setPlayerInterval = data => dispatch => {
  dispatch({
    type: SET_INTERVAL,
    payload: {
      interval: data.interval,
      intervalStarted: data.intervalStarted
    }
  });
};
