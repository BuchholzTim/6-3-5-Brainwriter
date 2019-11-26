import React, { Component } from "react";
import PlayerViewJoin from "./subPages/PlayerViewJoin";
import PlayerViewRound from "./subPages/PlayerViewRound";
import PlayerViewSummary from "./subPages/PlayerViewSummary";
import { ROUND, SUMMARY } from "./pages";

import { connect } from "react-redux";

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

  render() {
    const { playerPage } = this.props.playerPage;
    switch (playerPage) {
      case ROUND:
        return <PlayerViewRound></PlayerViewRound>;
      case SUMMARY:
        return <PlayerViewSummary></PlayerViewSummary>;
      default:
        return <PlayerViewJoin></PlayerViewJoin>;
    }
  }
}

const mapStateToProps = state => ({
  playerPage: state.pageReducer.playerPage
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(PlayerView);
