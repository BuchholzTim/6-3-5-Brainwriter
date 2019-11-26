import React, { Component } from "react";
import { Box, Button } from "grommet";
import PlayerList from "../../tools/PlayerList";
import Timer from "../../tools/Timer";
import RoundState from "../../tools/RoundState";
import { QuestionBox } from "../../tools/QuestionBox";

export class TopicControls extends Component {
  state = {
    round: "1",
    maxrounds: "5",
    question: "Warum ist die Banane krumm?"
  };

  pauseSession = () => {
    console.log("Paused Session");
  };

  cancelSession = () => {
    console.log("Cancelled Session");
  };

  render() {
    return (
      <Box direction="column" gap="xlarge" pad="small">
        <QuestionBox question={this.state.question} />

        <Box direction="row" gap="large">
          <PlayerList />

          <Box direction="column" gap="xsmall">
            <RoundState />
            <Timer roundTime={15} executeAfter={() => {}} />
          </Box>

          <Box direction="column" gap="xsmall" justify="center">
            <Button
              primary
              label="Session pausieren"
              onClick={this.pauseSession}
            />
            <Button
              primary
              label="Session beenden"
              onClick={this.cancelSession}
            />
          </Box>
        </Box>
      </Box>
    );
  }
}

export default TopicControls;
