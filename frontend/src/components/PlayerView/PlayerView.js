import React, { Component } from "react";
import JoinTopic from "./sub_pages/JoinTopic";
import EnterIdeas from "./sub_pages/EnterIdeas";
import { IdeaResults } from "./sub_pages/IdeaResults";

export class PlayerView extends Component {
  state = {
    page: "",
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

  // setJoinCode = joinCode => {
  //   this.setState({ joinCode: joinCode });
  // };

  setPage = page => {
    this.setState({ page: page });
  };

  renderPage(page) {
    switch (page) {
      case "1":
        return (
          <EnterIdeas
            num_ideas={this.state.num_ideas}
            question={this.state.question}
            setPage={this.setPage}
            data={this.state.data}
            timePerRound={this.state.timePerRound}
          ></EnterIdeas>
        );
      case "2":
        return (
          <IdeaResults
            num_ideas={this.state.num_ideas}
            question={this.state.question}
            data={this.state.data}
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
