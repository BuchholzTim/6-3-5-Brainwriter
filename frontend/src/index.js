import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./i18n";
import { socket } from "./socket/socket";
import { convertStringToBoolean } from "./tools/tools";

if (!convertStringToBoolean(process.env.REACT_APP_PRODUCTION_BUILD)) {
  // Test Enviroment Variables
  console.log(`REACT_APP_BACKEND_IP: ${process.env.REACT_APP_BACKEND_IP}`);
  console.log(`REACT_APP_BACKEND_PORT: ${process.env.REACT_APP_BACKEND_PORT}`);
  console.log(
    `REACT_APP_PRODUCTION_BUILD: ${process.env.REACT_APP_PRODUCTION_BUILD}`
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
socket.connect();
