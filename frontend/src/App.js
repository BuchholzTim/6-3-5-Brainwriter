import React, { Component } from "react";
import "./App.css";
import { Grommet } from "grommet";
import { Home } from "./components/Home";
import { Menubar } from "./components/Menubar";
import { socket } from "./socket/socket";
import { Provider } from "react-redux";
import store from "./redux/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Grommet className="App">
          <Menubar></Menubar>
          <Home />
        </Grommet>
      </Provider>
    );
  }
}

export default App;
