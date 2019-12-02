import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { socket } from "./socket/socket";

ReactDOM.render(<App />, document.getElementById("root"));
socket.connect();
