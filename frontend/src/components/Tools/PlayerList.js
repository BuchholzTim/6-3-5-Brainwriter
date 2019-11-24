import React, { Component } from "react";
import { List, Text, Box } from "grommet";

export class PlayerList extends Component {
  render() {
    return (
      <Box direction="column" gap="small">
      <Text weight="bold">Teilnehmer:</Text>
      <List
        title="Test"
        primaryKey="name"
        secondaryKey="percent"
        data={[
          { name: "Alan" },
          { name: "Bryan" },
          { name: "Chris" },
          { name: "Eric" }
        ]}
        />
        </Box>
    );
  }
}

export default PlayerList;
