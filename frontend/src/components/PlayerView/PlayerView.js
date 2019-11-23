import React, { Component } from "react";
import JoinTopic from "./JoinTopic";
import EnterIdeas from "./EnterIdeas copy";
//import {Button, Grommet} from 'grommet';

export class PlayerView extends Component {
  state = {
    page: ""
  };

  setPage = page => {
    this.setState({ page: page });
  };

  renderPage(page) {
    switch (page) {
      case "1":
        return (
          <EnterIdeas
            num_ideas={4}
            question={"Warum ist die Banane krumm?"}
          ></EnterIdeas>
        );
      case "2":
        return <h1>case2</h1>;
      default:
        return <JoinTopic setPage={this.setPage} />;
    }
  }

  render() {
    const { page } = this.state;
    return this.renderPage(page);
  }
}

export default PlayerView;
