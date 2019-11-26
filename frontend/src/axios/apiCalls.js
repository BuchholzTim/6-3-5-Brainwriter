// import { backend_ip, backend_port } from "../config/config";
// import axios from "axios";

// const APIURL = backend_ip + backend_port;

// // Define Endpoints
// const topics = APIURL + "/topics";
// const chatMessages = APIURL + "/chatMessages";

// Snippets
// export const getSnippet = () => axios.get(`${topics}/`);
// export const postSnippet = () => axios.post(`${topics}/`);

// axios
//   .post(`${topics}/axiosPost`, {
//     id: 12
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
