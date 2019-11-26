import React from "react";
//import "./App.css";
import { Box, Heading, Grommet, Button } from "grommet";
import { FormPreviousLink } from "grommet-icons";
import Home from "./components/Home";
import { socket } from "./socket/socket";

//Themes
import { deepMerge } from "grommet/utils";
import testTheme from "./themes/testTheme"


const customFocus = deepMerge(Grommet, testTheme
);

function App() {
  socket.connect();
  return (
    <Grommet className="App" theme={customFocus}>
      <Box
        as="header"
        direction="row"
        align="center"
        justify="between"
        pad={{ vertical: "xsmall", horizontal: "xsmall" }}
        background="brand"
        elevation="large"
        style={{ zIndex: "1000" }}
      >
        <Button icon={<FormPreviousLink size="large" color="white" />}></Button>
        <Heading level={3} margin="none" color="white">
          6-3-5 Brainwriter
        </Heading>
      </Box>
      <Box
        direction="column"
        border={{ color: "brand", size: "medium" }}
        pad={{ vertical: "xsmall" }}
        align="center"
      >
        <Home />
      </Box>
    </Grommet>
  );
}

export default App;
