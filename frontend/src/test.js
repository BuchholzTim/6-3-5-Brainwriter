import React, { Component } from "react";
import { Home } from "./components/Home";
import { Topic } from "./components/topic/Topic";
import { PlayerView } from "./components/playerView/PlayerView";
import { Grommet, Box, Button, Heading } from "grommet";
import { FormPreviousLink } from "grommet-icons";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

export class Test extends Component {
  render() {
    return (
      <Grommet className="App">
        <Router>
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
            <Button
              icon={<FormPreviousLink size="large" color="white" />}
            ></Button>
            <Heading level={3} margin="none" color="white">
              6-3-5 Brainwriter
            </Heading>
          </Box>

          <Switch>
            <Route path="/playerView">
              <PlayerView></PlayerView>
            </Route>
            <Route path="/topic">
              <Topic></Topic>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </Grommet>
    );
  }
}

export default Test;
