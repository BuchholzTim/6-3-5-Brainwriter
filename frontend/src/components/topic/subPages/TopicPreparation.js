import React, { Component } from "react";
import { connect } from "react-redux";
import { Box, Text, Button } from "grommet";
import PlayerList from "./topicComponents/PlayerList";
import { CONTROLS } from "../pages";
import { setPlayers } from "../../../redux/actions/topicActions";
import { setMaxRounds } from "../../../redux/actions/configActions";
import { setPlayerInterval } from "../../../redux/actions/controlActions";
import { setTopicPage } from "../../../redux/actions/pageActions";
import { getPlayers, updateTopic } from "../../../axios/apiCalls";
import { emitStart } from "../../../socket/socket";

import { withTranslation } from "react-i18next";

export class TopicPreparation extends Component {
  state = {
    players: [],
    errorMessage: "Es sind noch keine Spieler beigetreten!",
    displayMessage: "",
  };

  refreshPlayers = () => {
    const { topicID } = this.props;
    getPlayers(topicID).then((data) => {
      this.setState({ players: data });
      const { players } = this.state;
      const { propPlayers } = this.props;
      if (players.length !== propPlayers.length) {
        this.props.setPlayers(players);
      }
    });
  };

  onSubmit = () => {
    const { joinCode, playerListInterval, propPlayers, t } = this.props;
    if (propPlayers.length > 0) {
      this.props.setMaxRounds(propPlayers.length);
      clearInterval(playerListInterval);
      emitStart(joinCode);
      // Update param in DB to false so players cannot join anymore after start signal
      updateTopic({ joinCode, joinable: "false" });
      this.nextPage();
    } else {
      this.setState({
        displayMessage: t("notEnoughPlayers"),
      });
    }
  };

  nextPage = () => {
    this.props.setPage(CONTROLS);
  };

  render() {
    const { topic, joinCode, playerListIntervalStarted, t } = this.props;
    const { displayMessage, players } = this.state;

    if (players.length > 0 && displayMessage !== "") {
      this.setState({
        displayMessage: "",
      });
    }

    if (!playerListIntervalStarted) {
      const interval = setInterval(() => this.refreshPlayers(), 1500);
      this.props.setPlayerInterval({
        playerListInterval: interval,
        playerListIntervalStarted: true,
      });
    }
    return (
      <Box className="wrapper" align="center">
        <Box
          id="oben"
          fill
          align="center"
          justify="center"
          margin={{ top: "5%" }}
          direction="column"
        >
          <Box
            direction="column"
            justify="center"
            align="center"
            alignContent="center"
            wordWrap="break-word"
          >
            <h3 align="center">"{topic}"</h3>
            <h1>JoinCode: {joinCode}</h1>
          </Box>
        </Box>

        <Box
          id="Unten"
          direction="row"
          gap="small"
          justify="evenly"
          width="100%"
          margin={{ top: "xlarge" }}
        >
          <Box direction="column" width="40%" gap="medium" align="center">
            <PlayerList />
          </Box>
          <Box direction="column" width="40%" gap="medium" align="center">
            <Box direction="column" gap="small" align="center">
              <Text weight="bold">{t("status")}</Text>
              <Text>{t("waitingForParticipants")}</Text>
            </Box>
            <Button primary label={t("startRound")} onClick={this.onSubmit} />
            <Text color="status-critical">{displayMessage}</Text>
          </Box>
        </Box>
      </Box>
    );
  }
}

const mapStateToProps = (state) => ({
  topic: state.topicReducer.topic,
  topicID: state.topicReducer.id,
  joinCode: state.topicReducer.joinCode,
  playerListInterval: state.controlReducer.playerListInterval,
  playerListIntervalStarted: state.controlReducer.playerListIntervalStarted,
  propPlayers: state.topicReducer.players,
});
const mapDispatchToProps = {
  setPage: setTopicPage,
  setPlayers: setPlayers,
  setPlayerInterval: setPlayerInterval,
  setMaxRounds: setMaxRounds,
};

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(TopicPreparation)
);
