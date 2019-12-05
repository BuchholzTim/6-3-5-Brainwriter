import React, { Component } from "react";
import { connect } from "react-redux";
import { Box, Button } from "grommet";
import PlayerList from "./topicComponents/PlayerList";
import RoundState from "./topicComponents/RoundState";
import Timer from "../../tools/Timer";
import { QuestionBox } from "../../tools/QuestionBox";
import { setTopicPage } from "../../../redux/actions/pageActions";
import { emitPause, emitResume } from "../../../socket/socket";
import { setCurrentRound } from "../../../redux/actions/configActions";
import { setAfterRound } from "../../../redux/actions/controlActions";

export class TopicControls extends Component {
  state = {
    buttonLabel: "Session pausieren",
    pauseLabel: "Session pausieren",
    resumeLabel: "Session weiterführen"
  };

  togglePause = () => {
    const { joinCode, timeIsStopped } = this.props;
    const { pauseLabel, resumeLabel } = this.state;
    if (!timeIsStopped) {
      emitPause(joinCode);
      this.setState({ buttonLabel: resumeLabel });
    } else {
      emitResume(joinCode);
      this.setState({ buttonLabel: pauseLabel });
    }
  };

  cancelSession = () => {
    console.log("Cancelled Session");
  };

  executeAfter = () => {
    const { isAfterRound, currentRound } = this.props;
    if (!isAfterRound) {
      this.props.setAfterRound(!isAfterRound);
    } else {
      this.props.setCurrentRound(currentRound + 1);
      this.props.setAfterRound(!isAfterRound);
    }
  };

  render() {
    const { buttonLabel } = this.state;
    const {
      topic,
      timePerRound,
      readingTime,
      timeBetweenRounds,
      isAfterRound,
      currentRound
    } = this.props;

    let timer;

    if (isAfterRound) {
      const time = timeBetweenRounds;
      timer = (
        <Timer timeInSeconds={time} executeAfter={this.executeAfter}></Timer>
      );
    } else {
      const time = timePerRound + (currentRound - 1) * readingTime;
      timer = (
        <Timer timeInSeconds={time} executeAfter={this.executeAfter}></Timer>
      );
    }

    return (
      <Box direction="column" gap="xlarge" pad="small">
        <QuestionBox question={topic} />

        <Box direction="row" gap="large">
          <PlayerList />

          <Box direction="column" gap="xsmall">
            <RoundState />
            {/* <Timer timeInSeconds={timer} executeAfter={this.executeAfter} /> */}
            {timer}
          </Box>

          <Box direction="column" gap="xsmall" justify="center">
            <Button primary label={buttonLabel} onClick={this.togglePause} />
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
  timePerRound: state.topicReducer.timePerRound,
  timeIsStopped: state.controlReducer.timeIsStopped,
  timeBetweenRounds: state.configReducer.timeBetweenRounds,
  readingTime: state.configReducer.readingTime,
  currentRound: state.configReducer.currentRound,
  isAfterRound: state.controlReducer.isAfterRound
});
const mapDispatchToProps = {
  setPage: setTopicPage,
  setAfterRound: setAfterRound,
  setCurrentRound: setCurrentRound
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicControls);
