import React, { Component } from "react";
import { Box, Text, Button } from "grommet";
import PlayerList from "../tools/PlayerList";

export class TopicControl extends Component {
  state = {
    Authors: {
      Author: [{ name: "Peter" }, { name: "Hans" }]
    }
  };

  setPage = page => {
    this.props.setPage(page);
  };

  startSession= () => {
    console.log("Started session");
    this.setPage("2");
  }

  render() {
    return (
        <Box direction="row" gap="xlarge">
          <PlayerList/>

          <Box direction="column" gap="large">
            <Text weight="bold">Status:</Text>
            <Text>Session noch nicht gestartet, warten auf Teilnehmer</Text>
            <Button primary label="Session starten" onClick={this.startSession}/>
          </Box>
         
          </Box>
    );
  }
}

export default TopicControl;
