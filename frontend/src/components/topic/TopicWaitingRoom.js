import React, { Component } from "react";
import { Box, Text, Button } from "grommet";
import PlayerList from "../tools/PlayerList";
import Timer from "../tools/Timer"
import RoundState from "../tools/RoundState";

export class TopicWaitingRoom extends Component {
    state={
        round: "1",
        maxrounds: "5"
    }

    pauseSession = () => {
        console.log("Paused Session");
    }

    cancelSession = () => {
        console.log("Cancelled Session");
    }

  render() {
    return (
      <Box direction="column" gap="xlarge" pad="small">
        <Box direction="row" gap="small" justify="center">
          <Text weight="bold">Fragestellung: </Text>
          <Text>Warum ist die Banane krumm?</Text>
        </Box>

        <Box direction="row" gap="large">
          <PlayerList />

          <Box direction="column" gap="xsmall">
          <RoundState/>
          <Timer roundTime={15} executeAfter={()=>{}}/>
          </Box>

          <Box direction="column" gap="xsmall" justify="center">
          <Button primary label="Session pausieren" onClick={this.pauseSession} />
          <Button primary label="Session beenden" onClick={this.cancelSession} />
          </Box>
        </Box>
      </Box>
    );
  }
}

export default TopicWaitingRoom;
