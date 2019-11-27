import { backend_ip, backend_port } from "../config/config";
import axios from "axios";

const APIURL = backend_ip + backend_port;

// Define Endpoints
const topics = APIURL + "/topics";
const chatMessages = APIURL + "/chatMessages";

export const createTopic = (topicName, timePerRound) =>
  axios
    .post(`${topics}/create`, {
      topicName: topicName,
      timePerRound: timePerRound
    })
    .then(function(response) {
      // handle success
      console.log(response);
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    })
    .finally(function() {
      // always executed
    });

// axios
//   .get(`${topics}/axiosGet`, {
//     params: {
//       id: 12
//     }
//   })
//   .then(function(response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function(error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function() {
//     // always executed
//   });

export const getMessages = () => {
  //API-CALL
  const data = [
    {
      idea_1: "Noice",
      idea_2: "Much Wow",
      idea_3: "Krasses Ding",
      idea_4:
        "Kranke vierte Idee\nKranke vierte Idee\nKranke vierte Idee\nKranke vierte Idee"
    },
    {
      idea_1:
        "Kranke vierte Idee\nKranke vierte Idee\nKranke vierte Idee\nKranke vierte Idee",
      idea_2: "Much Wow",
      idea_3: "Krasses Ding",
      idea_4: "Kranke vierte Idee"
    },
    {
      idea_1: "Noice",
      idea_2: "Much Wow",
      idea_3:
        "Kranke vierte Idee\nKranke vierte Idee\nKranke vierte Idee\nKranke vierte Idee",
      idea_4: "Kranke vierte Idee"
    },
    {
      idea_1: "Noice",
      idea_2: "Much Wow",
      idea_3: "Krasses Ding",
      idea_4: "Kranke vierte Idee"
    }
  ];

  const num_ideas = Object.keys(data[0]).length;
  return { messages: data, num_ideas: num_ideas };
};

// Creates a Topic in the Database with the specified Parameters
// Return the created topic-data
export const createTopic = (topic, timePerRound) => {
  return {
    topic: topic,
    timePerRound: timePerRound,
    joinCode: "abcdef"
  };
};

// Retrieves a Topic-Object with the specified JoinCode
export const getTopic = joinCode => {
  return {
    topic: "Warum ist die Banane krumm?",
    timePerRound: 60,
    joinCode: "abcdef"
  };
};

// Retrieves all Players that currently have joined the specified JoinCode
// Returns Names of all Players
export const getPlayers = joinCode => {
  return [{ userName: "Tareck" }, { userName: "Hans" }, { userName: "Julia" }];
};

// Retrieves exisiting Topic with joinCode
// Creates new User with specified Name
// Return Topic & User
export const joinTopic = (userName, joinCode, socketID) => {
  const topic = getTopic(joinCode);

  const user = {
    userName: `${userName}_1234`,
    socketID: "zucdhbcjudhzcboelf"
  };

  return [topic, user];
};
