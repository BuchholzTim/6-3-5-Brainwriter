import React, { Component } from "react";
import { Home } from "./components/Home";
import { Topic } from "./components/topic/Topic";
import { PlayerView } from "./components/playerView/PlayerView";
import { Grommet, Box } from "grommet";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import MenuBar from "./components/MenuBar";

export class App extends Component {
  render() {
    return (
      <Grommet className="App">
        <Router>
          <MenuBar />
          <Box
            direction="column"
            border={{ color: "brand", size: "medium" }}
            pad={{ vertical: "xsmall" }}
            align="center"
          >
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
          </Box>
        </Router>
      </Grommet>
    );
  }
}

export default App;
