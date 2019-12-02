import React, { Component } from "react";
import { List, Text, Box } from "grommet";
import { getPlayers } from "../../../../axios/apiCalls";
import { connect } from "react-redux";
import { setPlayerInterval } from "../../../../redux/actions/controlActions";
import { setTopicData } from "../../../../redux/actions/topicActions";

export class PlayerList extends Component {
  state = {
    players: []
  };

  componentDidMount() {
    if (!this.props.intervalStarted && this.props.pollPlayers) {
      const interval = setInterval(() => this.refreshPlayers(), 1000);
      this.props.setPlayerInterval({
        interval: interval,
        intervalStarted: true
      });
    }
  }

  // Clear Polling from Server
  componentWillUnmount() {
    if (this.props.pollPlayers) {
      this.props.setTopicData({
        players: this.state.players
      });
      clearInterval(this.props.interval);
    }
  }

  refreshPlayers = () => {
    const id = this.props.id;
    getPlayers(id).then(players => {
      let names = [];
      for (let i = 0; i < players.length; i++) {
        const player = players[i];
        names.push({ name: player.userName });
      }
      this.setState({ players: names });
    });
  };

  render() {
    let players;
    if (this.props.pollPlayers) {
      players = this.state.players;
    } else {
      players = this.props.players;
    }
    return (
      <Box direction="column" gap="small">
        <Text weight="bold">Teilnehmer:</Text>
        <List
          title="Test"
          primaryKey="name"
          secondaryKey="percent"
          data={players}
        />
      </Box>
    );
  }
}

const mapStateToProps = state => ({
  joinCode: state.topicReducer.joinCode,
  id: state.topicReducer.id,
  interval: state.topicReducer.interval,
  intervalStarted: state.topicReducer.intervalStarted,
  players: state.topicReducer.players
});
const mapDispatchToProps = {
  setPlayerInterval: setPlayerInterval,
  setTopicData: setTopicData
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);
