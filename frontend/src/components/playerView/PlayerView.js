import React, { Component } from "react";
import PlayerViewJoin from "./subPages/PlayerViewJoin";
import PlayerViewRound from "./subPages/PlayerViewRound";
import PlayerViewSummary from "./subPages/PlayerViewSummary";
import PlayerViewPrepare from "./subPages/PlayerViewPrepare";
import { ROUND, SUMMARY, PREPARE } from "./pages";

import { connect } from "react-redux";

export class PlayerView extends Component {
  render() {
    const { playerPage } = this.props;
    switch (playerPage) {
      case ROUND:
        return <PlayerViewRound></PlayerViewRound>;
      case SUMMARY:
        return <PlayerViewSummary></PlayerViewSummary>;
      case PREPARE:
        return <PlayerViewPrepare></PlayerViewPrepare>;
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
