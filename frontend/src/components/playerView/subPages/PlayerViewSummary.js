import React, { Component } from "react";
import { connect } from "react-redux";
import { Box, Carousel } from "grommet";
import IdeaTable from "./ideaComponents/IdeaTable";
import { QuestionBox } from "../../tools/QuestionBox";

export class PlayerViewSummary extends Component {
  showSummary = () => {};

  render() {
    const { topic, players } = this.props;

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
      <Box direction="column" gap="medium" pad="small">
        <QuestionBox question={topic} />
        <Carousel>{tables}</Carousel>
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
