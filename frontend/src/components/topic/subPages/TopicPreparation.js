import React, { Component } from "react";
import { connect } from "react-redux";
import { Box, Text, Button } from "grommet";
import PlayerList from "./topicComponents/PlayerList";
import QuestionBox from "../../tools/QuestionBox";
import { CONTROLS } from "../pages";
import { setPlayers } from "../../../redux/actions/topicActions";
import { setMaxRounds } from "../../../redux/actions/configActions";
import { setPlayerInterval } from "../../../redux/actions/controlActions";
import { setTopicPage } from "../../../redux/actions/pageActions";
import { getPlayers } from "../../../axios/apiCalls";
import { emitStart } from "../../../socket/socket";

export class TopicPreparation extends Component {
  state = {
    players: []
  };

  refreshPlayers = () => {
    const { id } = this.props;
    getPlayers(id).then(data => {
      this.setState({ players: data });
      const { players } = this.state;
      const { propPlayers } = this.props;
      if (players.length !== propPlayers.length) {
        this.props.setPlayers(players);
      }
    });
  };

  onSubmit = () => {
    const { joinCode, playerListInterval, propPlayers } = this.props;
    this.props.setMaxRounds(propPlayers.length);
    clearInterval(playerListInterval);
    emitStart(joinCode);
    this.nextPage();
  };

  nextPage = () => {
    this.props.setPage(CONTROLS);
  };

  render() {
    const { topic, joinCode, playerListIntervalStarted } = this.props;

    if (!playerListIntervalStarted) {
      const interval = setInterval(() => this.refreshPlayers(), 1500);
      this.props.setPlayerInterval({
        playerListInterval: interval,
        playerListIntervalStarted: true
      });
    }
    return (
      <Box direction="column" gap="xlarge" pad="small">
        <Box direction="row" gap="xlarge" pad="small" justify="center">
          <QuestionBox question={topic} />
          <Box direction="row" gap="small">
            <Text weight="bold">Join-Code: </Text>
            <Text>{joinCode}</Text>
          </Box>
        </Box>

        <Box direction="row" gap="large">
          <PlayerList />

          <Box direction="column" gap="medium">
            <Box direction="column" gap="small" align="center">
              <Text weight="bold">Status:</Text>
              <Text>Session noch nicht gestartet, warten auf Teilnehmer</Text>
            </Box>
            <Button primary label="Session starten" onClick={this.onSubmit} />
          </Box>
        </Box>
      </Box>
    );
  }
}

const mapStateToProps = state => ({
  topic: state.topicReducer.topic,
  id: state.topicReducer.id,
  joinCode: state.topicReducer.joinCode,
  playerListInterval: state.controlReducer.playerListInterval,
  playerListIntervalStarted: state.controlReducer.playerListIntervalStarted,
  propPlayers: state.topicReducer.players
});
const mapDispatchToProps = {
  setPage: setTopicPage,
  setPlayers: setPlayers,
  setPlayerInterval: setPlayerInterval,
  setMaxRounds: setMaxRounds
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicPreparation);
