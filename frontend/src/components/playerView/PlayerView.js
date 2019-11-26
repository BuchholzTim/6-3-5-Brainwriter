import React, { Component } from "react";
import JoinTopic from "./subPages/JoinTopic";
import EnterIdeas from "./subPages/EnterIdeas";
import { IdeaResults } from "./subPages/IdeaResults";

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

  switchPage = () => {
    const { page } = this.state;
    switch (page) {
      case "ENTER":
        return (
          <EnterIdeas
            num_ideas={this.state.num_ideas}
            question={this.state.question}
            setPage={this.setPage}
            data={this.state.data}
            timePerRound={this.state.timePerRound}
          ></EnterIdeas>
        );
      case "SUMMARY":
        return (
          <IdeaResults
            num_ideas={this.state.num_ideas}
            question={this.state.question}
            data={this.state.data}
          ></IdeaResults>
        );
      default:
        return <JoinTopic setPage={this.setPage}></JoinTopic>;
    }
  };

  render() {
    return this.switchPage();
  }
}

export default PlayerView;
