import React, { Component } from "react";
import { Box, Text, Button } from "grommet";
import { PlayerList } from "../../tools/PlayerList";

import { connect } from "react-redux";
import { setTopicPage } from "../../../redux/actions/pageActions";
import { CONTROLS } from "../pages";

export class TopicPreparation extends Component {
  state = {
    Authors: {
      Author: [{ name: "Peter" }, { name: "Hans" }]
    }
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
          <Button primary label="Session starten" onClick={this.nextPage} />
        </Box>
      </Box>
    );
  }
}

const mapStateToProps = null;
const mapDispatchToProps = { setPage: setTopicPage };

export default connect(mapStateToProps, mapDispatchToProps)(TopicPreparation);
