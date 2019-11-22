import React from "react";
import "./App.css";
import { Box, Heading, Grommet } from "grommet";
import Home from "./components/Home";
import { socket } from "./socket/socket";

function App() {
  socket.connect();
  return <Home />;
}

export default App;
