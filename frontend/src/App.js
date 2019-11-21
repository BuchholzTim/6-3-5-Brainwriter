import React from "react";
import "./App.css";
import { Box, Heading, Grommet } from "grommet";
import Home from "./components/Home";
import { socket } from "./socket/socket";
import { Timer } from "./components/Tools/Timer";

function App() {
  socket.connect();
  return <Timer />;
}

export default App;
