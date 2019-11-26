import React, { Component } from "react";
import { PlayerViewJoin } from "./subPages/PlayerViewJoin";
import { PlayerViewRound } from "./subPages/PlayerViewRound";
import { PlayerViewSummary } from "./subPages/PlayerViewSummary";
import { ROUND, SUMMARY } from "./pages";

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

  componentWillMount() {
    console.log(this.props);
    // this.props.fetchPosts();
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
      case ROUND:
        return (
          <PlayerViewRound
            num_ideas={this.state.num_ideas}
            question={this.state.question}
            setPage={this.setPage}
            data={this.state.data}
            timePerRound={this.state.timePerRound}
          ></PlayerViewRound>
        );
      case SUMMARY:
        return (
          <PlayerViewSummary
            num_ideas={this.state.num_ideas}
            question={this.state.question}
            data={this.state.data}
          ></PlayerViewSummary>
        );
      default:
        return <PlayerViewJoin setPage={this.setPage}></PlayerViewJoin>;
    }
  };

  render() {
    return this.switchPage();
  }
}

export default PlayerView;
