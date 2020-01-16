import React, { Component } from "react";
import { connect } from "react-redux";
import { Box, Button } from "grommet";
import IdeaTable from "../playerView/subPages/ideaComponents/IdeaTable";
import QuestionBox from "./QuestionBox";

export class PlayerViewSummary extends Component {
  state = {
    shownTable: 0
  };

  showSummary = () => {};

  showNextTable = () => {
    const { players } = this.props;
    const { shownTable } = this.state;
    this.setState({
      shownTable: (shownTable + 1) % players.length
    });
  };

  render() {
    const { topic, players } = this.props;
    const { shownTable } = this.state;

    const tables = [];

    for (let i = 0; i < players.length; i++) {
      const player = players[i];
      const table = (
        <Box pad={{ vertical: "large", horizontal: "medium" }}>
          <IdeaTable authorID={player.id} />
        </Box>
      );
      tables.push(table);
    }

    return (
      <Box
        style={{ wordWrap: "break-word" }}
        direction="column"
        gap="medium"
        pad="small"
        overflow={{ horizontal: "auto" }}
      >
        <QuestionBox question={topic} />
        {tables[shownTable]}
        <Button
          primary
          hoverIndicator="true"
          style={{ width: "100%" }}
          onClick={this.showNextTable}
          label="Next"
        />
      </Box>
    );
  }
}

const mapStateToProps = state => ({
  topic: state.topicReducer.topic,
  players: state.topicReducer.players
});
const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(PlayerViewSummary);
