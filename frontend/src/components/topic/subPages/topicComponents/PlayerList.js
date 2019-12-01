import React, { Component } from "react";
import { List, Text, Box } from "grommet";
import { getPlayers } from "../../../../axios/apiCalls";
import { connect } from "react-redux";
import { setPlayerInterval } from "../../../../redux/actions/controlActions";

export class PlayerList extends Component {
  state = {
    players: []
  };

  componentDidMount() {
    if (!this.props.intervalStarted) {
      const interval = setInterval(() => this.refreshPlayers(), 1000);
      this.props.setPlayerInterval({
        interval: interval,
        intervalStarted: true
      });
    }
  }

  // Clear Polling from Server
  componentWillUnmount() {
    clearInterval(this.props.interval);
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
    return (
      <Box direction="column" gap="small">
        <Text weight="bold">Teilnehmer:</Text>
        <List
          title="Test"
          primaryKey="name"
          secondaryKey="percent"
          data={this.state.players}
        />
      </Box>
    );
  }
}

const mapStateToProps = state => ({
  joinCode: state.topicReducer.joinCode,
  id: state.topicReducer.id,
  interval: state.topicReducer.interval,
  intervalStarted: state.topicReducer.intervalStarted
});
const mapDispatchToProps = {
  setPlayerInterval: setPlayerInterval
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);
