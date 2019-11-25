import React, { Component } from "react";
import { Box, Text, Button } from "grommet";
import { PlayerList } from "../tools/PlayerList";
import { Link } from "react-router-dom";

export class TopicControl extends Component {
  state = {
    Authors: {
      Author: [{ name: "Peter" }, { name: "Hans" }]
    }
  };

  startSession = () => {
    console.log("Started session");
  };

  render() {
    return (
      <Box direction="row" gap="xlarge">
        <PlayerList />

        <Box direction="column" gap="large">
          <Text weight="bold">Status:</Text>
          <Text>Session noch nicht gestartet, warten auf Teilnehmer</Text>
          <Link to="/topic/waiting">
            <Button primary label="Session starten" />
          </Link>
        </Box>
      </Box>
    );
  }
}

export default TopicControl;
