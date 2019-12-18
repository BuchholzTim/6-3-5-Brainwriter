import React, { Component } from "react";
import { connect } from "react-redux";
import { Box, Heading, Text } from "grommet";
import QuestionBox from "../../tools/QuestionBox";
import { ROUND } from "../pages";
import { setPlayerPage } from "../../../redux/actions/pageActions";
import { setMaxRounds } from "../../../redux/actions/configActions";
import { setPlayers } from "../../../redux/actions/topicActions";
import { getPlayers } from "../../../axios/apiCalls";

import { withTranslation } from "react-i18next";

export class PlayerViewPrepare extends Component {
  nextPage = () => {
    this.props.setPage(ROUND);
  };

  executeBeforeStart = () => {
    const { id } = this.props;
    getPlayers(id)
      .then(players => {
        this.props.setPlayers(players);
        this.props.setMaxRounds(players.length);
        return;
      })
      .then(() => {
        this.nextPage();
      });
  };

  render() {
    const { topic, roundStarted, t } = this.props;
    if (roundStarted) {
      this.executeBeforeStart();
    }
    return (
      <Box direction="column" gap="small" align="center">
        <Heading size="small">{t("aboutToStart")}</Heading>
        <QuestionBox question={topic} />
        <Text>{t("waitingForParticipants")}</Text>
      </Box>
    );
  }
}

const mapStateToProps = state => ({
  topic: state.topicReducer.topic,
  id: state.topicReducer.id,
  roundStarted: state.controlReducer.roundStarted
});

const mapDispatchToProps = {
  setPage: setPlayerPage,
  setMaxRounds: setMaxRounds,
  setPlayers: setPlayers
};

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(PlayerViewPrepare)
);
