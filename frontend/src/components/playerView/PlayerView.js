import React, { Component } from "react";
import PlayerViewJoin from "./subPages/PlayerViewJoin";
import PlayerViewRound from "./subPages/PlayerViewRound";
import Summary from "../tools/Summary";
import PlayerViewPrepare from "./subPages/PlayerViewPrepare";
import PlayerViewAfterRound from "./subPages/PlayerViewAfterRound";
import { ROUND, SUMMARY, PREPARE, AFTERROUND } from "./pages";

import { connect } from "react-redux";

export class PlayerView extends Component {
  render() {
    const { playerPage } = this.props;
    switch (playerPage) {
      case ROUND:
        return <PlayerViewRound></PlayerViewRound>;
      case SUMMARY:
        return <Summary></Summary>;
      case PREPARE:
        return <PlayerViewPrepare></PlayerViewPrepare>;
      case AFTERROUND:
        return <PlayerViewAfterRound></PlayerViewAfterRound>;
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
