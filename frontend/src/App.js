import React from "react";
import "./App.css";
import { socket } from "./socket/socket";
import Test from "./test";

function App() {
  socket.connect();
  return <Test></Test>;
}

export default App;
