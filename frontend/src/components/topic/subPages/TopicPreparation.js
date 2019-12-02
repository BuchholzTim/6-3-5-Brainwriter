import React, { Component } from "react";
import { Box, Text, Button } from "grommet";
import PlayerList from "./topicComponents/PlayerList";

import { connect } from "react-redux";
import { setTopicPage } from "../../../redux/actions/pageActions";
import { CONTROLS } from "../pages";
import QuestionBox from "../../tools/QuestionBox";

import { emitStart } from "../../../socket/socket";

export class TopicPreparation extends Component {
  onSubmit = () => {
    const { joinCode } = this.props;
    console.log("Session started");
    emitStart(joinCode);
    this.nextPage();
  };

  nextPage = () => {
    this.props.setPage(CONTROLS);
  };

  render() {
    const { topic, joinCode } = this.props;
    return (
      <Box direction="column" gap="xlarge" pad="small">
        <Box direction="row" gap="xlarge" pad="small" justify="center">
          <QuestionBox question={topic} />
          <Box direction="row" gap="small">
            <Text weight="bold">Join-Code: </Text>
            <Text>{joinCode}</Text>
          </Box>
        </Box>

        <Box direction="row" gap="large">
          <PlayerList />

          <Box direction="column" gap="medium">
            <Box direction="column" gap="small" align="center">
              <Text weight="bold">Status:</Text>
              <Text>Session noch nicht gestartet, warten auf Teilnehmer</Text>
            </Box>
            <Button primary label="Session starten" onClick={this.nextPage} />
          </Box>
        </Box>
      </Box>
    );
  }
}

const mapStateToProps = state => ({
  topic: state.topicReducer.topic,
  joinCode: state.topicReducer.joinCode
});
const mapDispatchToProps = {
  setPage: setTopicPage
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicPreparation);
