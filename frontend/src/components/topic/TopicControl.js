import React, { Component } from "react";
import { Box, List, Text, Button } from "grommet";

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
          <Box direction="column">
          <Text weight="bold">Teilnehmer:</Text>
          <List
            title="Test"
            primaryKey="name"
            secondaryKey="percent"
            data={[
              { name: "Alan"},
              { name: "Bryan"},
              { name: "Chris"},
              { name: "Eric"}
            ]}
          />
          </Box>

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
