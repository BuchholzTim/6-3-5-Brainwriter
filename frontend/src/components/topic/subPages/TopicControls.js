import React, { Component } from "react";
import { connect } from "react-redux";
import { Box, Button } from "grommet";
import PlayerList from "./topicComponents/PlayerList";
import RoundState from "./topicComponents/RoundState";
import Timer from "../../tools/Timer";
import { QuestionBox } from "../../tools/QuestionBox";
import { setTopicPage } from "../../../redux/actions/pageActions";
import { emitPause, emitResume } from "../../../socket/socket";

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

  render() {
    const { buttonLabel } = this.state;
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
  timeIsStopped: state.controlReducer.timeIsStopped
});
const mapDispatchToProps = { setPage: setTopicPage };

export default connect(mapStateToProps, mapDispatchToProps)(TopicControls);
