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
import { setPriorMessages } from "../../../redux/actions/messageActions";
import { SUMMARY } from "../pages";

import { withTranslation } from "react-i18next";

import { getMessages } from "../../../axios/apiCalls";

export class TopicControls extends Component {
  state = {
    buttonLabel: "Session pausieren"
  };

  togglePause = () => {
    const { joinCode, timeIsStopped, t } = this.props;
    if (!timeIsStopped) {
      emitPause(joinCode);
      this.setState({ buttonLabel: t("pauseRound") });
    } else {
      emitResume(joinCode);
      this.setState({ buttonLabel: t("resumeRound") });
    }
  };

  executeAfter = () => {
    const { isAfterRound, currentRound, maxRounds, topicID } = this.props;

    if (!isAfterRound) {
      this.props.setAfterRound(!isAfterRound);
    } else {
      this.props.setCurrentRound(currentRound + 1);
      this.props.setAfterRound(!isAfterRound);
    }
    if (currentRound === maxRounds && isAfterRound) {
      getMessages(topicID)
        .then(data => {
          this.props.setPriorMessages(data);
          return;
        })
        .then(() => {
          this.nextPage();
        });
    }
  };

  nextPage = () => {
    this.props.setPage(SUMMARY);
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

    let time = -1;
    if (isAfterRound) {
      time = timeBetweenRounds;
    } else {
      time = timePerRound + (currentRound - 1) * readingTime;
    }

    return (
      <Box direction="column" gap="xlarge" pad="small">
        <QuestionBox question={topic} />

        <Box direction="row" gap="large">
          <PlayerList />

          <Box direction="column" gap="xsmall">
            <RoundState />
            <Timer timeInSeconds={time} executeAfter={this.executeAfter} />
          </Box>
          <Box direction="column" gap="xsmall" justify="center">
            <Button primary label={buttonLabel} onClick={this.togglePause} />
          </Box>
        </Box>
      </Box>
    );
  }
}

const mapStateToProps = state => ({
  topic: state.topicReducer.topic,
  topicID: state.topicReducer.id,
  joinCode: state.topicReducer.joinCode,
  timePerRound: state.topicReducer.timePerRound,
  timeIsStopped: state.controlReducer.timeIsStopped,
  timeBetweenRounds: state.configReducer.timeBetweenRounds,
  readingTime: state.configReducer.readingTime,
  currentRound: state.configReducer.currentRound,
  isAfterRound: state.controlReducer.isAfterRound,
  maxRounds: state.configReducer.maxRounds
});
const mapDispatchToProps = {
  setPage: setTopicPage,
  setAfterRound: setAfterRound,
  setCurrentRound: setCurrentRound,
  setPriorMessages: setPriorMessages
};

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(TopicControls)
);
