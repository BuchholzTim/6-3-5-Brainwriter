import { SET_TOPIC_DATA, SET_PLAYERS } from "./types";

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

export const setPlayers = players => dispatch => {
  dispatch({
    type: SET_PLAYERS,
    payload: {
      players: players
    }
  });
};
