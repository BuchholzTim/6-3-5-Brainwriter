import React, { Component } from "react";
import { Box } from "grommet";
import { IdeaInput } from "./ideaComponents/IdeaInput";
import { IdeaTable } from "./ideaComponents/IdeaTable";
import { Timer } from "../../tools/Timer";
import { QuestionBox } from "../../tools/QuestionBox";
import { SUMMARY } from "../pages";
import { connect } from "react-redux";
import { setPlayerPage } from "../../../redux/actions/pageActions";

export class PlayerViewRound extends Component {
  showResults = () => {
    this.props.setPage(SUMMARY);
  };

  render() {
    const { topic, timePerRound, num_ideas, messages } = this.props;

    const ideaInputs = [];

    // Generate Items
    for (let i = 0; i < num_ideas; i++) {
      // Generate Input-Field for each Idea
      ideaInputs.push(<IdeaInput></IdeaInput>);
    }
    return (
      <Box direction="column" gap="small">
        <Box direction="row" align="center" justify="center">
          <QuestionBox question={topic} />
          <Timer roundTime={timePerRound} executeAfter={this.showResults} />
        </Box>
        <IdeaTable num_ideas={num_ideas} data={messages} />
        <Box direction="row">{ideaInputs}</Box>
      </Box>
    );
  }
}

const mapStateToProps = state => ({
  topic: state.topicReducer.topic,
  timePerRound: state.topicReducer.timePerRound,
  num_ideas: state.topicReducer.num_ideas,
  messages: state.topicReducer.messages
});
const mapDispatchToProps = { setPage: setPlayerPage };

export default connect(mapStateToProps, mapDispatchToProps)(PlayerViewRound);
