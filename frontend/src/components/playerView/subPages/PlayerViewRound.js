import React, { Component } from "react";
import { connect } from "react-redux";
import { Box } from "grommet";
import IdeaInput from "./ideaComponents/IdeaInput";
import IdeaTable from "./ideaComponents/IdeaTable";
import Timer from "../../tools/Timer";
import { QuestionBox } from "../../tools/QuestionBox";
import { SUMMARY, AFTERROUND } from "../pages";
import { setPlayerPage } from "../../../redux/actions/pageActions";
import { setCurrentMessages } from "../../../redux/actions/messageActions";

export class PlayerViewRound extends Component {
  state = {
    currentMessages: []
  };

  nextPage = () => {
    this.props.setPage(AFTERROUND);
  };

  setCurrentMessage = (currentMessage, index) => {
    let { currentMessages } = this.state;
    currentMessages[index] = currentMessage;
    this.setState({ currentMessages: currentMessages });
  };

  executeAfter = () => {
    const { currentMessages } = this.state;
    this.props.setCurrentMessages({ currentMessages });
    this.nextPage();
  };

  render() {
    const { topic, timePerRound, numIdeas } = this.props;
    const ideaInputs = [];

    // Generate Items
    for (let i = 0; i < numIdeas; i++) {
      // Generate Input-Field for each Idea
      ideaInputs.push(
        <IdeaInput
          setCurrentMessage={this.setCurrentMessage}
          index={i}
        ></IdeaInput>
      );
    }
    return (
      <Box direction="column" gap="small">
        <Box direction="row" align="center" justify="center">
          <QuestionBox question={topic} />
          <Timer
            timeInSeconds={timePerRound}
            executeAfter={this.executeAfter}
          />
        </Box>
        <IdeaTable />
        <Box direction="row">{ideaInputs}</Box>
      </Box>
    );
  }
}

const mapStateToProps = state => ({
  topic: state.topicReducer.topic,
  timePerRound: state.topicReducer.timePerRound,
  numIdeas: state.configReducer.numIdeas,
  currentRound: state.configReducer.currentRound,
  rounds: state.configReducer.maxRounds
});
const mapDispatchToProps = {
  setPage: setPlayerPage,
  setCurrentMessages: setCurrentMessages
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerViewRound);
