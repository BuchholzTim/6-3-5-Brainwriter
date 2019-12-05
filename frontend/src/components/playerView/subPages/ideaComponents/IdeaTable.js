import React, { Component } from "react";
import { DataTable, Text } from "grommet";
import { connect } from "react-redux";

export class IdeaTable extends Component {
  stringToDom = str => {
    return <Text truncate={false}>{str}</Text>;
  };

  /**
   * This function takes all the messages which were sent to the room
   * and returns only those which are relevant for the current round, for the specified player.
   * */
  formatMessagesToTable = () => {
    const { currentRound, players, authorID } = this.props;

    // Iterate over all Players and retrieve their ids (including your own)
    const playerIDs = [];
    for (let i = 0; i < players.length; i++) {
      playerIDs.push(players[i].id);
    }

    // Your own ID
    const playerIndex = playerIDs.indexOf(authorID);

    let rows = [];

    // If the current round is greater than one, hence there should be messages available
    // Messages are retrieved in reversed order (last row first , first row last)
    for (let i = 1; i < currentRound; i++) {
      // Get Index of Author corresponding to the i'th round counted from back to top
      // We use this.mod instead of %, as % returns negative numbers
      const authorIndex = this.mod(playerIndex - i, playerIDs.length);
      const authorOfRow = playerIDs[authorIndex];
      const round = currentRound - i;

      // Retrieve all {numIdeas} messages of a specific round from a specific author
      const row = this.getMessagesIDandRound(authorOfRow, round);
      rows.push(row);
    }
    // Return the Array reversed, as we filled it from back to start
    return rows.reverse();
  };

  mod = (n, m) => {
    return ((n % m) + m) % m;
  };

  getMessagesIDandRound = (id, round) => {
    const { priorMessages } = this.props;
    let data = [];
    for (let i = 0; i < priorMessages.length; i++) {
      const message = priorMessages[i];

      if (message.authorID === id && message.row === round) {
        data.push(message);
      }
    }
    return data;
  };

  render() {
    const { numIdeas } = this.props;
    const column_configs = [];

    for (let i = 0; i < numIdeas; i++) {
      const config = {
        property: `idea_${i + 1}`,
        header: `Idee ${i + 1}`
      };

      column_configs.push(config);
    }

    const messages = this.formatMessagesToTable();
    const data = [];

    for (let i = 0; i < messages.length; i++) {
      const row = messages[i];

      const rowData = {};
      for (let j = 0; j < row.length; j++) {
        const message = this.stringToDom(row[j].content);
        rowData[`idea_${j + 1}`] = message;
      }

      data.push(rowData);
    }

    return (
      <DataTable size="medium" columns={column_configs} data={data}></DataTable>
    );
  }
}

const mapStateToProps = state => ({
  numIdeas: state.configReducer.numIdeas,
  priorMessages: state.messageReducer.priorMessages,
  currentRound: state.configReducer.currentRound,
  players: state.topicReducer.players
});
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(IdeaTable);
