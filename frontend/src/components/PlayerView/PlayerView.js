import React, { Component } from "react";
import JoinTopic from "./sub_pages/JoinTopic";
import EnterIdeas from "./sub_pages/EnterIdeas";
import { IdeaResults } from "./sub_pages/IdeaResults";
import { Switch, Route } from "react-router-dom";

export class PlayerView extends Component {
  state = {
    joinCode: "",
    userName: "",
    timePerRound: 10,
    question: "Warum ist die Banane krumm?",
    data: "",
    num_ideas: "",
    previous_data: ""
  };

  componentDidMount() {
    this.getMessages();
  }

  getMessages = () => {
    //API-CALL
    const data = [
      {
        idea_1: "Noice",
        idea_2: "Much Wow",
        idea_3: "Krasses Ding",
        idea_4:
          "Kranke vierte Idee\nKranke vierte Idee\nKranke vierte Idee\nKranke vierte Idee"
      },
      {
        idea_1:
          "Kranke vierte Idee\nKranke vierte Idee\nKranke vierte Idee\nKranke vierte Idee",
        idea_2: "Much Wow",
        idea_3: "Krasses Ding",
        idea_4: "Kranke vierte Idee"
      },
      {
        idea_1: "Noice",
        idea_2: "Much Wow",
        idea_3:
          "Kranke vierte Idee\nKranke vierte Idee\nKranke vierte Idee\nKranke vierte Idee",
        idea_4: "Kranke vierte Idee"
      },
      {
        idea_1: "Noice",
        idea_2: "Much Wow",
        idea_3: "Krasses Ding",
        idea_4: "Kranke vierte Idee"
      },
      {
        idea_1: "Noice",
        idea_2: "Much Wow",
        idea_3: "Krasses Ding",
        idea_4: "Kranke vierte Idee"
      },
      {
        idea_1: "Noice",
        idea_2: "Much Wow",
        idea_3: "Krasses Ding",
        idea_4: "Kranke vierte Idee"
      },
      {
        idea_1: "Noice",
        idea_2: "Much Wow",
        idea_3: "Krasses Ding",
        idea_4: "Kranke vierte Idee"
      }
    ];

    this.setState({ data: data, num_ideas: Object.keys(data[0]).length });
  };

  setPage = page => {
    this.setState({ page: page });
  };

  render() {
    return (
      <Switch>
        <Route path="/playerView/summary">
          <IdeaResults
            num_ideas={this.state.num_ideas}
            question={this.state.question}
            data={this.state.data}
          ></IdeaResults>
        </Route>
        <Route path="/playerView/ideating">
          <EnterIdeas
            num_ideas={this.state.num_ideas}
            question={this.state.question}
            setPage={this.setPage}
            data={this.state.data}
            timePerRound={this.state.timePerRound}
          ></EnterIdeas>
        </Route>
        <Route path="/playerView">
          <JoinTopic setPage={this.setPage} />
        </Route>
      </Switch>
    );
  }
}

export default PlayerView;
