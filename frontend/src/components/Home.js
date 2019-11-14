import React, { Component } from "react";
import CreateRoundModerator from "./CreateRoundModerator";
import JoinRound from "./JoinRound";
import Dozentenzugang from "./Dozentenzugang";

export class Home extends Component {
  state = {
    page: ""
  };

  onClick = event => {
    this.setState({
      page: event.target.value
    });
  };

  renderPage(page) {
    switch (page) {
      case "1":
        return <CreateRoundModerator />;
      case "2":
        return <JoinRound />;
      case "3":
        return <Dozentenzugang />;
      default:
        return (
          <div>
            <button value="1" onClick={this.onClick}>
              Schnelle Runde erstellen
            </button>
            <br />
            <button value="2" onClick={this.onClick}>
              Runde beitreten
            </button>
            <br />
            <button value="3" onClick={this.onClick}>
              Dozentenzugang
            </button>
            <br />
          </div>
        );
    }
  }

  render() {
    const { page } = this.state;
    return this.renderPage(page);
  }
}

export default Home;
