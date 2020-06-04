import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./i18n";
import { socket } from "./socket/socket";

// Test Enviroment Variables
console.log(`REACT_APP_BACKEND_IP: ${process.env.REACT_APP_BACKEND_IP}`);
console.log(`REACT_APP_BACKEND_PORT: ${process.env.REACT_APP_BACKEND_PORT}`);
console.log(
  `REACT_APP_DISABLE_REDUX_DEV: ${process.env.REACT_APP_DISABLE_REDUX_DEV}`
);

ReactDOM.render(<App />, document.getElementById("root"));
socket.connect();
