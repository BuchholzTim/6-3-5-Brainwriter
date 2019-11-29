import React, { Component } from "react";
import { Box, Text, Button } from "grommet";
import PlayerList from "../../tools/PlayerList";

import { connect } from "react-redux";
import { setTopicPage } from "../../../redux/actions/pageActions";
import { CONTROLS } from "../pages";

import { setPlayerInterval } from "../../../redux/actions/topicActions";

export class TopicPreparation extends Component {
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
          <Button primary label="Session starten" onClick={this.nextPage} />
        </Box>
      </Box>
    );
  }
}

const mapStateToProps = state => ({
  interval: state.topicReducer.interval
});
const mapDispatchToProps = {
  setPage: setTopicPage,
  setPlayerInterval: setPlayerInterval
};

export default connect(mapStateToProps, mapDispatchToProps)(TopicPreparation);
