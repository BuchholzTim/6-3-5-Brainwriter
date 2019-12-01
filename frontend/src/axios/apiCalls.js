import { backend_ip, backend_port } from "../config/config";
import axios from "axios";

const APIURL = backend_ip + backend_port;

// Define Endpoints
const topics = APIURL + "/topics";
const messages = APIURL + "/messages";

export const createTopic = topic =>
  axios
    .post(`${topics}/create`, {
      topic: topic.topic,
      timePerRound: topic.timePerRound
    })
    .then(response => {
      // handle success
      const data = response.data;
      return data;
    });

// Retrieves exisiting Topic with joinCode
// Creates new User with specified Name
// Return Topic & User
export const joinTopic = data =>
  axios
    .post(`${topics}/join`, {
      userName: data.userName,
      joinCode: data.joinCode
    })
    .then(response => {
      const data = response.data;
      return data;
    });

export const getMessages = topicID =>
  axios
    .post(`${messages}/get`, {
      id: topicID
    })
    .then(response => {
      const data = response.data;
      return data;
    });

// Retrieves all Players that currently have joined the specified JoinCode
// Returns Names of all Players
export const getPlayers = topicID =>
  axios
    .post(`${topics}/getPlayers`, {
      id: topicID
    })
    .then(response => {
      const data = response.data;
      return data;
    });
