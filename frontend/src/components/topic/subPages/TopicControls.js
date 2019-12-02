import React, { Component } from "react";
import { Box, Button } from "grommet";
import PlayerList from "./topicComponents/PlayerList";
import Timer from "../../tools/Timer";
import RoundState from "./topicComponents/RoundState";
import { QuestionBox } from "../../tools/QuestionBox";

import { connect } from "react-redux";
import { setTopicPage } from "../../../redux/actions/pageActions";

import { emitPause, emitResume } from "../../../socket/socket";

export class TopicControls extends Component {
  pauseSession = () => {
    const { joinCode } = this.props;
    console.log("Paused Session");
    emitPause(joinCode);
  };

  cancelSession = () => {
    console.log("Cancelled Session");
  };

  resumeSession = () => {
    const { joinCode } = this.props;
    console.log("Resumed Session");
    emitResume(joinCode);
  };

  render() {
    const { topic, timePerRound } = this.props;
    return (
      <Box direction="column" gap="xlarge" pad="small">
        <QuestionBox question={topic} />

        <Box direction="row" gap="large">
          <PlayerList />

          <Box direction="column" gap="xsmall">
            <RoundState />
            <Timer timeInSeconds={timePerRound} executeAfter={() => {}} />
          </Box>

          <Box direction="column" gap="xsmall" justify="center">
            <Button
              primary
              label="Session pausieren"
              onClick={this.pauseSession}
            />
            <Button
              primary
              label="Session beenden"
              onClick={this.cancelSession}
            />
          </Box>
        </Box>
      </Box>
    );
  }
}

const mapStateToProps = state => ({
  topic: state.topicReducer.topic,
  joinCode: state.topicReducer.joinCode,
  timePerRound: state.topicReducer.timePerRound
});
const mapDispatchToProps = { setPage: setTopicPage };

export default connect(mapStateToProps, mapDispatchToProps)(TopicControls);
