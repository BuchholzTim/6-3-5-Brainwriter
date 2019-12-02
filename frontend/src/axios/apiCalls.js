import { backend_ip, backend_port } from "../config/config";
import axios from "axios";

const APIURL = backend_ip + backend_port;

// Define Endpoints
const topicURL = APIURL + "/topics";
const messageURL = APIURL + "/messages";

export const createTopic = topic =>
  axios
    .post(`${topicURL}/create`, {
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
// Return Promis
export const joinTopic = data =>
  axios
    .post(`${topicURL}/join`, {
      userName: data.userName,
      joinCode: data.joinCode
    })
    .then(response => {
      const data = response.data;
      return data;
    });

export const getMessages = topicID =>
  axios
    .post(`${messageURL}/get`, {
      id: topicID
    })
    .then(response => {
      const data = response.data;
      return data;
    });

export const setMessages = messages =>
  axios
    .post(`${messageURL}/set`, {
      messages: messages
    })
    .then(response => {
      const data = response.data;
      return data;
    });

// Retrieves all Players that currently have joined the specified JoinCode
// Returns Names of all Players
export const getPlayers = topicID =>
  axios
    .post(`${topicURL}/getPlayers`, {
      id: topicID
    })
    .then(response => {
      const data = response.data;
      return data;
    });
