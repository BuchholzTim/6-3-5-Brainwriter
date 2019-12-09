import React, { Component } from "react";
import Home from "./components/Home";
import Topic from "./components/topic/Topic";
import PlayerView from "./components/playerView/PlayerView";
import { Grommet, Box } from "grommet";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Menubar from "./components/Menubar";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";

//Themes
import { hci2b } from "./themes/hci2b";

export class App extends Component {
  render() {
    return (
      <Router>
        <Grommet className="App" theme={hci2b}>
          <Provider store={store}>
            <Menubar />
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
          </Provider>
        </Grommet>
      </Router>
    );
  }
}

export default App;
