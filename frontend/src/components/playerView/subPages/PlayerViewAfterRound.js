import React, { Component } from "react";
import { connect } from "react-redux";
import { Heading, Box } from "grommet";
import { QuestionBox } from "../../tools/QuestionBox";
import Timer from "../../tools/Timer";
import { ROUND, SUMMARY } from "../pages";
import { setPlayerPage } from "../../../redux/actions/pageActions";
import { setCurrentRound } from "../../../redux/actions/configActions";
import { setPriorMessages } from "../../../redux/actions/messageActions";
import { setMessages, getMessages } from "../../../axios/apiCalls";

export class PlayerViewAfterRound extends Component {
  state = {
    executed: false
  };

  nextPage = () => {
    const { currentRound, maxRounds } = this.props;
    if (currentRound <= maxRounds) {
      this.props.setPage(ROUND);
    } else {
      this.props.setPage(SUMMARY);
    }
  };

  executeAfter = () => {
    const { id } = this.props;
    getMessages(id)
      .then(data => {
        this.props.setPriorMessages(data);
        return;
      })
      .then(() => {
        this.nextPage();
      });
  };

  constructMessages = () => {
    const { currentMessages, currentRound, authorID } = this.props;
    const messages = [];
    for (let i = 0; i < currentMessages.length; i++) {
      const messageContent = currentMessages[i];
      const message = {
        content: messageContent,
        row: currentRound,
        column: i,
        authorID: authorID
      };
      messages.push(message);
    }
    return messages;
  };

  render() {
    const { executed } = this.state;
    const { topic, currentRound, timeBetweenRounds } = this.props;

    if (!executed) {
      this.setState({ executed: true });
      const messages = this.constructMessages();

      setMessages(messages).then(() => {
        this.props.setCurrentRound(currentRound + 1);
      });
    }

    return (
      <Box direction="column" gap="small" align="center">
        <Heading size="small">Gleich gehts weiter</Heading>
        <Timer
          timeInSeconds={timeBetweenRounds}
          executeAfter={this.executeAfter}
        ></Timer>
        <QuestionBox question={topic} />
      </Box>
    );
  }
}

const mapStateToProps = state => ({
  topic: state.topicReducer.topic,
  id: state.topicReducer.id,
  currentRound: state.configReducer.currentRound,
  maxRounds: state.configReducer.maxRounds,
  timeBetweenRounds: state.configReducer.timeBetweenRounds,
  currentMessages: state.messageReducer.currentMessages,
  authorID: state.authorReducer.id
});

const mapDispatchToProps = {
  setPage: setPlayerPage,
  setCurrentRound: setCurrentRound,
  setPriorMessages: setPriorMessages
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerViewAfterRound);
