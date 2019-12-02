import React, { Component } from "react";
import { Box, Text, Button } from "grommet";
import PlayerList from "./topicComponents/PlayerList";

import { connect } from "react-redux";
import { setTopicPage } from "../../../redux/actions/pageActions";
import { CONTROLS } from "../pages";

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
    return (
      <Box direction="row" gap="xlarge">
        <PlayerList />

        <Box direction="column" gap="large">
          <Text weight="bold">Status:</Text>
          <Text>Session noch nicht gestartet, warten auf Teilnehmer</Text>
          <Button primary label="Session starten" onClick={this.onSubmit} />
        </Box>
      </Box>
    );
  }
}

const mapStateToProps = state => ({
  joinCode: state.topicReducer.joinCode
});
const mapDispatchToProps = {
  setPage: setTopicPage
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicPreparation);
