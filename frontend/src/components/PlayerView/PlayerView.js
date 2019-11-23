import React, { Component } from "react";
import JoinTopic from "./JoinTopic";
import EnterIdeas from "./EnterIdeas";
import { IdeaResults } from "./IdeaResults";
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
            setPage={this.setPage}
          ></EnterIdeas>
        );
      case "2":
        return (
          <IdeaResults
            num_ideas={4}
            question={"Warum ist die Banane krumm?"}
          ></IdeaResults>
        );
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
