import React, { Component } from "react";
import { List, Text, Box } from "grommet";
import { connect } from "react-redux";

export class PlayerList extends Component {
  render() {
    const { players } = this.props;
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
  players: state.topicReducer.players
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);
