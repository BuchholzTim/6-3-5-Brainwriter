import React, { Component } from "react";
import { connect } from "react-redux";
import { QuestionBox } from "../../tools/QuestionBox";
import { Timer } from "../../tools/Timer";
import { Heading, Box, Text } from "grommet";
import { setPlayerPage } from "../../../redux/actions/pageActions";
import { ROUND } from "../pages";

export class PlayerViewAfterRound extends Component {
  nextPage = () => {
    this.props.setPage(ROUND);
  };

  executeAfter = () => {
    this.nextPage();
  };

  render() {
    const { topic } = this.props;
    return (
      <Box direction="column" gap="small" align="center">
        <Heading size="small">Gleich gehts weiter</Heading>
        <Timer roundTime={10} executeAfter={this.executeAfter}></Timer>
        <QuestionBox question={topic} />
        <Text>x Spieler sind beigetreten</Text>
      </Box>
    );
  }
}

const mapStateToProps = state => ({
  topic: state.topicReducer.topic
});

const mapDispatchToProps = {
  setPage: setPlayerPage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerViewAfterRound);
